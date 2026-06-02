import React, { useState } from 'react'
import '../styles/Contact.css';

const Contact = () => {

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        'firstName' : '',
        'lastName' : '',
        'email' : '',
        'phone' : '',
        'service' : '',
        'message' : ''
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(prev => ({...prev,[name]:value})) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Campaign Enquiry Submitted:',formData)
        setFormSubmitted(true)
    }

  return (
    <section id="contact" className="contact-section">

        <div className="contact-head">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-h2">
            LET'S BUILD<br/>
            YOUR <span className="serif-italic">next</span><br/>
            CAMPAIGN.
            </h2>
        </div>

        <div className="contact-layout">
            {/* left column */}
            <div className="contact-info-block">
                <div className="contact-info-card">
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-val">
                    <a href="mailto:contact.adbite@gmail.com">contact.adbite@gmail.com</a>
                    </div>
                 </div>

                 <div className="contact-info-card">
                    <div className="contact-item-label">Phone</div>
                    <div className="contact-item-val">
                    <a href="tel:+916282359567">+91 6282359567</a>
                    </div>
                </div>

                <div className="contact-info-card">
                    <div className="contact-item-label">Headquarters</div>
                    <div className="contact-item-val">
                    Near Mallappally Thiruvalla Road Market,<br /> Mallappally,Kerala 689585
                    </div>
                </div>

                <div className="contact-info-card">
                    <div className="contact-item-label">Business Hours</div>
                    <div className="contact-item-val">Mon – Sat, 9 AM – 6 PM</div>
                </div>
                <div className="contact-info-card whatsapp-card">
                <div className="contact-item-label">Quick Contact</div>
                        <a
                            href="https://wa.me/916282359567?text=Hi%20ADBite,%20I'd%20like%20to%20know%20more%20about%20your%20advertising%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-btn"
                        >
                            WhatsApp Us →
                        </a>
                </div>
            </div>

            {/* Right column */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName"
                        name="firstName" 
                        placeholder="Alen" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName"
                        name="lastName" 
                        placeholder="Shibu" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="alen@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    placeholder="+91 98765 43210" 
                    value={formData.phone}
                    onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <div className="select-wrapper">
                    <select 
                        id="service"
                        name="service" 
                        value={formData.service}
                        onChange={handleChange}
                    >
                        <option value="">Select a service</option>
                        <option value="Digital Screen Ads">Digital Screen Ads</option>
                        <option value="Standee & Poster Branding">Standee & Poster Branding</option>
                        <option value="Timed Slot Campaigns">Timed Slot Campaigns</option>
                        <option value="Hyper-Local Targeting">Hyper-Local Targeting</option>
                        <option value="Campaign Analytics">Campaign Analytics</option>
                        <option value="Creative Design Support">Creative Design Support</option>
                    </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    id="message"
                    name="message" 
                    placeholder="Tell us about your brand and campaign goals…"
                    value={formData.message}
                    onChange={handleChange}
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className={`form-submit ${formSubmitted ? 'submitted' : ''}`}
                    disabled={formSubmitted}
                >
                    {formSubmitted ? "Sent! We'll be in touch ✓" : "Send Enquiry →"}
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact
