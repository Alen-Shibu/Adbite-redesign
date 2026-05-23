import React from 'react'
import '../styles/Ticker.css'

function Ticker() {
    const words = [
        "Indoor Advertising", 
        "Gyms", 
        "Cafés", 
        "Salons", 
        "Clinics", 
        "High Impact", 
        "Hyper Local",
    ];
  return (
    <div className='ticker-wrapper'>
        <div className="ticker-track">
            {/* First instance */}
            <div className="ticker-group">
                {
                    words.map((word,idx)=> (
                        <React.Fragment key={`first-${idx}`}>
                            <span className='ticker-item'>{word}</span>
                            <span className='ticker-dot'>✦</span>
                        </React.Fragment>
                    ))
                }
            </div>
            {/* Second instance for illusion */}
            <div className="ticker-group" aria-hidden="true">
                {
                    words.map((word,idx)=> (
                        <React.Fragment key={`second-${idx}`}>
                            <span className='ticker-item'>{word}</span>
                            <span className='ticker-dot'>✦</span>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Ticker