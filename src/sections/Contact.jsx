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
                        <h2 className="section-title">Our Locations</h2>
                        <div className="section-divider"></div>
                        <p className="section-description">
                            Experience the royal taste of Rajasthan at our exclusive outlets.
                        </p>
                    </div>
                </Reveal>

                <div className="locations-grid">
                    {/* Koramangala Branch */}
                    <Reveal delay={200}>
                        <div className="location-card">
                            <div className="location-map">
                                <iframe
                                    src="https://maps.google.com/maps?q=Thar%20The%20Taste%20of%20Rajasthan%20Koramangala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Koramangala Location"
                                ></iframe>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Thar+The+Taste+of+Rajasthan+Koramangala"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-overlay-link"
                                    aria-label="View Koramangala location on Google Maps"
                                ></a>
                            </div>
                            <div className="location-details">
                                <h3>Koramangala</h3>
                                <p className="location-address">
                                    <MapPin size={18} className="location-icon" />
                                    10, 2nd Floor, 17th Main Rd, Opp. 315 Work Avenue, 5th Block, Koramangala, Bengaluru
                                </p>
                                <div className="location-actions">
                                    <a href="tel:+918949936747" className="btn-location btn-phone">
                                        <Phone size={16} /> +91 89499 36747
                                    </a>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Thar+The+Taste+of+Rajasthan+Koramangala"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-location"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Brookfield Branch */}
                    <Reveal delay={400}>
                        <div className="location-card">
                            <div className="location-map">
                                <iframe
                                    src="https://maps.google.com/maps?q=Thar%20The%20Taste%20of%20Rajasthan%20AECS%20Layout%20Brookefield&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Brookfield Location"
                                ></iframe>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Thar+The+Taste+of+Rajasthan+Brookefield"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-overlay-link"
                                    aria-label="View Brookfield location on Google Maps"
                                ></a>
                            </div>
                            <div className="location-details">
                                <h3>Brookfield</h3>
                                <p className="location-address">
                                    <MapPin size={18} className="location-icon" />
                                    321, 1st Main Rd, AECS Layout, Brookefield, Bengaluru, Karnataka 560037
                                </p>
                                <div className="location-actions">
                                    <a href="tel:+916362433174" className="btn-location btn-phone">
                                        <Phone size={16} /> +91 63624 33174
                                    </a>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Thar+The+Taste+of+Rajasthan+Brookefield"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-location"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={600}>
                    <div className="general-contact">
                        <div className="contact-item">
                            <Clock className="contact-icon-lg" />
                            <div>
                                <h4>Opening Hours</h4>
                                <p>Mon - Sun: 11:30 AM - 11:30 PM</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
