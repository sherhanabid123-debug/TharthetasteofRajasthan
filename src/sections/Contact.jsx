import React from 'react';
import './Contact.css';
import Reveal from '../components/Reveal';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <span className="section-subtitle">Visit Us</span>
                        <h2 className="section-title">Locate & Contact</h2>
                        <div className="section-divider"></div>
                    </div>
                </Reveal>

                <div className="contact-grid">
                    <Reveal delay={200}>
                        <div className="contact-info">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Thar+The+Taste+of+Rajasthan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-card address-card"
                            >
                                <MapPin className="contact-icon" size={32} />
                                <h3>Address</h3>
                                <p>Jyothi Nivas, 10, 2nd floor, 17th main road, college road, opposite 315 Work Avenue, 5th Block, Koramangala, Bengaluru, Karnataka 560095</p>
                            </a>

                            <a href="tel:+918949936747" className="contact-card phone-card">
                                <Phone className="contact-icon" size={32} />
                                <h3>Phone</h3>
                                <p>089499 36747</p>
                            </a>

                            <div className="contact-card">
                                <Clock className="contact-icon" size={32} />
                                <h3>Timings</h3>
                                <p>Mon - Sun: 11:30 AM - 11:30 PM</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="map-wrapper">
                            <iframe
                                src="https://maps.google.com/maps?q=Thar%20-%20The%20Taste%20of%20Rajasthan%2C%20Koramangala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                            ></iframe>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Thar+The+Taste+of+Rajasthan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-overlay-link"
                                aria-label="Open location in Google Maps"
                            ></a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
