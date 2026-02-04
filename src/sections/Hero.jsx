import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = ({ onOpenOrder }) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-background" style={{
                backgroundImage: `url(${heroBg})`,
                transform: `translateY(${offset * 0.5}px)`
            }}></div>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <span className="hero-subtitle">Welcome to</span>
                <h1 className="hero-title">Thar - The Taste of Rajasthan</h1>
                <p className="hero-description">
                    Experience the royal flavors of authentic Rajasthani cuisine in the heart of Bangalore.
                </p>
                <div className="hero-cta">
                    <a href="#menu" className="hero-btn btn-primary">View Menu</a>
                    <button className="hero-btn btn-outline" onClick={onOpenOrder}>Order Online</button>
                </div>
            </div>

            <a href="#about" className="scroll-indicator">
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
                <span className="arrow"></span>
            </a>
        </section>
    );
};

export default Hero;
