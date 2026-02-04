import React from 'react';
import './Footer.css';
import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const Footer = ({ onOpenOrder }) => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>Thar</h3>
                    <p className="footer-tagline">The Taste of Rajasthan</p>
                    <p className="footer-desc">
                        Authentic Rajasthani flavors in the heart of Koramangala. Experience royalty on a plate.
                    </p>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/thar.restaurant/?hl=en" target="_blank" rel="noopener noreferrer">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (onOpenOrder) onOpenOrder();
                                }}
                            >
                                Order Online
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <MapPin size={18} />
                            <span>Jyothi Nivas, 5th Block, Koramangala, Bengaluru</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>089499 36747</span>
                        </li>
                        <li>
                            <Clock size={18} />
                            <span>11:30 AM - 11:30 PM</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Thar Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
