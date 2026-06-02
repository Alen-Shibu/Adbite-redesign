import React from 'react'
import '../styles/Services.css'

const Services = () => {
// Storing the content in a data array separates your content from layout logic
  const servicesData = [
    {
      num: "01",
      title: "ബിസിനസ്സ് വളർച്ചാസാധ്യത",
      desc: "ജനങ്ങൾ കൂടുതൽ സമയം ചെലവഴിക്കുന്ന ഫുഡ്‌കോർട്ടുകളിൽ നിങ്ങളുടെ ബ്രാൻഡിനെ ശ്രദ്ധിക്കപ്പെടുന്ന രീതിയിൽ പ്രദർശിപ്പിക്കൂ.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 17l6-6 4 4 8-8"/>
          <path d="M15 7h6v6"/>
        </svg>
      )
    },
    {
      num: "02",
      title: "സന്ദർശകർ",
      desc: "കുടുംബങ്ങൾക്കും യുവപ്രൊഫഷണലുകൾക്കും മുന്നിൽ നിങ്ങളുടെ ഓഫറുകൾ ഫലപ്രദമായി അവതരിപ്പിക്കൂ.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="8" r="3"/>
          <circle cx="17" cy="9" r="2.5"/>
          <path d="M4 19c0-3 2.5-5 5-5s5 2 5 5"/>
          <path d="M14 19c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
        </svg>
      )
    },
    {
      num: "03",
      title: "Digital സ്ക്രീനുകൾ",
      desc: "നിങ്ങളുടെ ഓഫറുകളും പ്രൊമോഷനുകളും ഏറ്റവും മികച്ച ദൃശ്യഭംഗിയോടെ ഞങ്ങളുടെ Digital സ്ക്രീനുകളിൽ പ്രദർശിപ്പിക്കാൻ സാധിക്കും.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="12" rx="2"/>
          <path d="M8 20h8"/>
          <path d="M12 16v4"/>
        </svg>  
      )
    },
    {
      num: "04",
      title: "പരസ്യച്ചിലവ്",
      desc: "അച്ചടിമാധ്യമങ്ങളിലെ പരസ്യസേവനങ്ങളെക്കാൾ 90 ശതമാനം കുറഞ്ഞ ചിലവ്.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="6" rx="6" ry="3"/>
          <path d="M6 6v8c0 1.7 2.7 3 6 3s6-1.3 6-3V6"/>
          <path d="M6 10c0 1.7 2.7 3 6 3s6-1.3 6-3"/>
        </svg>
      )
    },
    {
      num: "05",
      title: "പ്രദർശനസൗകര്യം",
      desc: "നിങ്ങളുടെ ഇഷ്ടാനുസരണം പരസ്യങ്ങൾ എപ്പോൾ വേണമെങ്കിലും മാറ്റാൻ സാധിക്കും. ഉദാഹരണം:- ഓരോ ദിവസവും ഓരോ ഓഫറുകൾ.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12a9 9 0 1 1-2.64-6.36"/>
          <polyline points="21 3 21 9 15 9"/>
        </svg>
      )
    },
    {
      num: "06",
      title: "Design Support",
      desc: "നിങ്ങൾക്ക് പരസ്യം ഡിസൈൻ ചെയ്യാൻ support ആവശ്യമെങ്കിൽ ഞങ്ങൾ തയ്യാറാണ്.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
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
