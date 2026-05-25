import React from 'react'

const DistrictAccordion = ({ locationData, isOpen, onToggle }) => {
  const { district, description, venues } = locationData;
  return (
      // clickable Header bar
      <div className={`district-accordion-item ${isOpen ? 'active-district' : ''}`}>
        <div className="district-accordion-header" onClick={onToggle}>
          <div className="district-header-text">
            <h3>{district}</h3>
            {description && <p>{description}</p>}
          </div>
          <span className="district-arrow-icon">{isOpen ? '−' : '+'}</span>
        </div>

        {/* Expandable Venues  */}
        {
          isOpen && (
            <div className='district-accordion-content'>
              {
                venues.length === 0 ? (
                  <p className='empty-district-text'>No screen locations active in this region yet.</p>
                ) : (
                  <ul className='backend-venue-list'>
                    {
                      venues.map((venue) => (
                        <li key={venue._id} className='backend-venue-item'>
                          <div className='backend-venue-dot'></div>
                          <span className='backend-venue-name'>{venue.name}</span>
                        </li>
                      ))
                    }
                  </ul>
                )
              }
            </div>
          )
        }
      </div>
  )
}

export default DistrictAccordion
