import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DistrictAccordion from '../components/DistrictAccordion'
import '../styles/Location.css'

const Location = () => {

    const [locations, setLocations] = useState([]);
    const [openDistrictId, setOpenDistrictId] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/api/locations')
        .then(res => {
            setLocations(res.data)
            if(res.data.length>0){
                setOpenDistrictId(res.data[0]._id)
            }
            setLoading(false)
        })
        .catch(err => {
            console.error("Error connecting to backend:", err);
            setLoading(false)
        })
    },[])

    const toggleDistrict = (id) => {
        setOpenDistrictId(openDistrictId === id ? null : id)
    }

    if (loading) return <div className='loading-state'>Loading display nodes...</div>;


  return (
    <section id="locations" className="locations-section">
        <div className="locations-layout-grid">
            {/* Left Side */}
            <div className="locations-left-panel">
                <div className="locations-header-area">
                    .<div className="section-label">Where We Are</div>
                    <h2 className="section-h2">
                        ACROSS <span className="serif-italic">Kerala</span>,<br/>WE'RE THERE.
                    </h2>
                </div>

                <div className="district-accordion-list">
                    {
                        locations.map((loc) => (
                            <DistrictAccordion 
                                key={loc._id}
                                locationData={loc}
                                isOpen={openDistrictId === loc._id}
                                onToggle={() => toggleDistrict(loc._id)}
                            />
                        ))
                    }
                </div>
            </div>

            {/* Right Side */}
            <div className="locations-right-panel">
                <div className="map-blueprint-placeholder">
                    <div className="blueprint-placeholder-content">
                        <div className="blueprint-pulse-dot"></div>
                        <h3>Map View Placeholder</h3>
                        <p>Leaflet map architecture will integrate here once the left list functionality is fully finished.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Location
