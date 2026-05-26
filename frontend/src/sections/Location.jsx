import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import DistrictAccordion from '../components/DistrictAccordion'
import '../styles/Location.css'

const Location = () => {
    const [locations, setLocations] = useState([]);
    const [openDistrictId, setOpenDistrictId] = useState(null);
    const [activeVenue, setActiveVenue] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const markersGroupRef = useRef(null);

    const makeCustomIcon = (isClicked) => {
        const size = isClicked ? 14 : 10;
        const color = isClicked ? '#d4a94a' : '#c94a2b';
        return L.divIcon({
            className: 'custom-map-pin',
            html: `<div style="
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: ${color};
                border: 2px solid #ffffff;
                box-shadow: 0 0 8px ${color}aa;
                transition: all 0.2s ease;
            "></div>`,
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2]
        });
    };

    // 1. FETCH BACKEND DATA
    useEffect(() => {
        axios.get('http://localhost:5000/api/locations')
        .then(res => {
            setLocations(res.data)
            if(res.data.length > 0){
                setOpenDistrictId(res.data[0]._id)
            }
            setLoading(false)
        })
        .catch(err => {
            console.error("Error connecting to backend:", err);
            setLoading(false)
        })
    }, [])

    // 2. INITIALIZE THE MAP
    useEffect(() => {
        if (loading || !mapContainerRef.current || mapRef.current) return;

        const initializedMap = L.map(mapContainerRef.current, {
            zoomControl: true,
            scrollWheelZoom: false
        }).setView([10.1, 76.6], 7.5);

        // Clean Esri Satellite Tile Stream
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
            maxZoom: 19
        }).addTo(initializedMap);

        // Transparent label layout overlay so city text stays legible over the landscape
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; CARTO',
            maxZoom: 19,
            pane: 'markerPane' 
        }).addTo(initializedMap);

        const markersGroup = L.layerGroup().addTo(initializedMap);

        mapRef.current = initializedMap;
        markersGroupRef.current = markersGroup;

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [loading]);

    // 3. UPDATE MAP PINS WHEN SELECTIONS ALTER
    useEffect(() => {
        if (!mapRef.current || !markersGroupRef.current || locations.length === 0) return;

        markersGroupRef.current.clearLayers();

        const activeDistrictData = locations.find(loc => loc._id === openDistrictId);

        if (!activeDistrictData) {
            mapRef.current.flyTo([10.1, 76.6], 7.5, { duration: 1.2 });
            return;
        }

        if (!activeVenue || !activeDistrictData.venues.some(v => v._id === activeVenue._id)) {
            if (activeDistrictData.venues.length > 0) {
                const firstVenue = activeDistrictData.venues[0];
                mapRef.current.flyTo([firstVenue.lat, firstVenue.lng], 11, { duration: 1.2 });
            }
        }

        activeDistrictData.venues.forEach(venue => {
            const isSelected = activeVenue && activeVenue._id === venue._id;
            
            const marker = L.marker([venue.lat, venue.lng], {
                icon: makeCustomIcon(isSelected)
            }).addTo(markersGroupRef.current);

            marker.on('click', () => {
                setActiveVenue(venue);
            });
        });

    }, [openDistrictId, activeVenue, locations]);

    // 4. PAN AND ZOOM SHARP INTO A CLICKED VENUE
    useEffect(() => {
        if (!mapRef.current || !activeVenue) return;
        mapRef.current.flyTo([activeVenue.lat, activeVenue.lng], 14, { duration: 1.2 });
    }, [activeVenue]);


    const toggleDistrict = (id) => {
        setOpenDistrictId(openDistrictId === id ? null : id);
        setActiveVenue(null);
    }

    if (loading) return <div className='loading-state'>Loading display nodes...</div>;

    return (
        <section id="locations" className="locations-section">
            <div className="locations-layout-grid">
                {/* Left Side */}
                <div className="locations-left-panel">
                    <div className="locations-header-area">
                        <div className="section-label">Where We Are</div>
                        <h2 className="section-h2">
                            ACROSS <span className="serif-italic">Kerala</span>,<br/>WE'RE THERE.
                        </h2>
                    </div>

                    <div className="district-accordion-list">
                        {locations.map((loc) => (
                            <DistrictAccordion 
                                key={loc._id}
                                locationData={loc}
                                isOpen={openDistrictId === loc._id}
                                onToggle={() => toggleDistrict(loc._id)}
                                activeVenue={activeVenue}
                                setActiveVenue={setActiveVenue}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side */}
                <div className="locations-right-panel">
                    <div className="map-leaflet-wrapper">
                        <div ref={mapContainerRef} className="actual-leaflet-map-element"></div>
                        
                        <div className={`map-hud-overlay ${activeVenue ? 'visible' : ''}`}>
                            <div className="hud-label">Active Node</div>
                            <h4 className="hud-venue-title">{activeVenue?.name}</h4>
                            <p className="hud-coords">
                                {activeVenue?.lat ? activeVenue.lat.toFixed(4) : 0}° N, {activeVenue?.lng ? activeVenue.lng.toFixed(4) : 0}° E
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location;