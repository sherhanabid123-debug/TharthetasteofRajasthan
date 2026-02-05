import React from 'react';
import './Footer.css';
import { Instagram, MapPin, Phone, Clock } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = ({ onOpenOrder }) => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-col">
                    <img src={logo} alt="Thar - The Taste of Rajasthan" className="footer-logo-img" />
                    <p className="footer-tagline">The Taste of Rajasthan</p>
                    <div className="footer-hours mt-2">
                        <h5 className="footer-subhead">Opening Hours</h5>
                        <p><Clock size={14} className="inline-icon" /> 11:30 AM - 11:30 PM</p>
                        <p className="text-sm opacity-75">Daily</p>
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
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/thar.restaurant/?hl=en" target="_blank" rel="noopener noreferrer">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Koramangala</h4>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} className="flex-shrink-0" />
                            <span>Jyothi Nivas, 5th Block, Koramangala, Bengaluru</span>
                        </li>
                        <li>
                            <Phone size={18} className="flex-shrink-0" />
                            <span>+91 89499 36747</span>
                        </li>
                    </ul>
                    <div className="delivery-buttons">
                        <a href="https://www.swiggy.com/city/bangalore/thar-the-taste-of-rajasthan-koramangala-jyothi-niwas-college-toad-rest414271" target="_blank" rel="noopener noreferrer" className="footer-link-btn btn-swiggy">
                            Order on Swiggy
                        </a>
                        <a href="https://www.zomato.com/bangalore/thar-the-taste-of-rajasthan-koramangala-5th-block-bangalore" target="_blank" rel="noopener noreferrer" className="footer-link-btn btn-zomato">
                            Order on Zomato
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Brookfield</h4>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} className="flex-shrink-0" />
                            <span>ITPL Main Road, Brookfield, Bengaluru</span>
                        </li>
                        <li>
                            <Phone size={18} className="flex-shrink-0" />
                            <span>+91 63624 33174</span>
                        </li>
                    </ul>
                    <div className="delivery-buttons">
                        <a href="https://www.swiggy.com/city/bangalore/thar-the-taste-of-rajasthan-marathahalli-rest1154135" target="_blank" rel="noopener noreferrer" className="footer-link-btn btn-swiggy">
                            Order on Swiggy
                        </a>
                        <a href="https://www.zomato.com/bangalore/thar-the-taste-of-rajasthan-aecs-layout-bangalore" target="_blank" rel="noopener noreferrer" className="footer-link-btn btn-zomato">
                            Order on Zomato
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Thar Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
