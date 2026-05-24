import React from 'react'
import '../styles/Hero.css'

const HeroSection = () => {
  //Not hardcoding stats make its easier to modify and update
  const metrics = [
    {value:"50",suffix:"+",label:"Venues"},
    {value:"10",suffix:"+",label:"Cities"},
    {value:"200",suffix:"+",label:"Campaigns"}
  ];
  return (
    <section id="hero" className="hero-section">
      {/* Left side */}
      <div className="hero-left">
        <div className="hero-badge">
          Kerala's Indoor Advertising Experts
        </div>

        <h1 className="hero-h1">
          YOUR BRAND, <br />
          <span className="serif-italic">everywhere</span> <br />
          INDOORS
        </h1>

        <p className='hero-sub'>
          Adbite places your brand inside the spaces people actually spend time — 
          gyms, clinics, cafés, salons, and more. High-impact indoor advertising across Kerala.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Start a Campaign</a>
          <a href="#services" className="btn-ghost">
            See Services 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <div className="hero-stats">
          {
            metrics.map((stat,idx)=>(
              <div className="stat-group" key={idx}>
                <div className="stat-num">
                  {stat.value}<span>{stat.suffix}</span>
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* 2. RIGHT SIDE: THE DISPLAY SCREEN VISUALS - Completely AI generated*/}
      <div className="hero-right">
        <div className="hero-grid-bg"></div>
        
        <div className="hero-visual-content">
          {/* Card 1 */}
          <div className="ad-mockup mockup-1">
            <div className="mockup-img"><span>ADBITE</span></div>
            <div className="mockup-bar accent"></div>
            <div className="mockup-bar short"></div>
            <div className="mockup-bar xs"></div>
          </div>
          
          {/* Card 2 */}
          <div className="ad-mockup mockup-2">
            <div className="mockup-bar gold"></div>
            <div className="mockup-bar short"></div>
            <div className="mockup-bar xs"></div>
          </div>
          
          {/* Card 3 */}
          <div className="ad-mockup mockup-3">
            <div className="mockup-img"><span>BRAND</span></div>
            <div className="mockup-bar accent"></div>
            <div className="mockup-bar xs"></div>
          </div>
        </div>
        
        <div className="hero-tag-watermark">ADB</div>
      </div>
    </section>
  )
}

export default HeroSection
