import React from 'react'
import '../styles/Services.css'

const Services = () => {
// Storing the content in a data array separates your content from layout logic
  const servicesData = [
    {
      num: "01",
      title: "Digital Screen Ads",
      desc: "Eye-catching dynamic displays inside high-footfall venues. Real-time content updates to keep your campaigns fresh.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
      )
    },
    {
      num: "02",
      title: "Standee & Poster Branding",
      desc: "Premium print collateral at gym entrances, clinic waiting rooms, and café counters for maximum dwell-time exposure.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
          <line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
      )
    },
    {
      num: "03",
      title: "Timed Slot Campaigns",
      desc: "Book specific time slots aligned with your audience's peak hours — morning gym rush, lunch crowd, or evening queues.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      )
    },
    {
      num: "04",
      title: "Hyper-Local Targeting",
      desc: "Reach specific neighbourhoods by selecting venues in the exact localities your customers live and work in.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      num: "05",
      title: "Campaign Analytics",
      desc: "Track reach, impressions, and engagement with detailed post-campaign reports. Data-backed insights for every future run.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      )
    },
    {
      num: "06",
      title: "Creative Design Support",
      desc: "Our in-house design team crafts compelling creatives sized for every venue format — no extra cost for eligible packages.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    }
  ];
  return (
    <section id="services" className="services-section">
        <div className="services-head">
            <div>
                <div className="section-label">What we do</div>
                <div className="section-h2">
                    SMART <br />
                    <span className='serif-italic'>indoor</span><br />
                    SOLUTIONS
                </div>
            </div>
            <p className='services-intro'>We curate the right indoor spaces across Kerala to put your brand in front of the right people — at the moments that matter most. Every placement is strategic, every surface is an opportunity.</p>
        </div>

        <div className="services-grid">
            {
                servicesData.map((svc,idx)=> (
                    <div className="service-card" key={idx}>
                        <div className="svc-num">{svc.num}</div>
                        <div className="svc-icon">{svc.icon}</div>
                        <h3 className="svc-title">{svc.title}</h3>
                        <p className="svc-desc">{svc.desc}</p>
                        <div className="svc-arrow">↗</div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Services
