import React from 'react';
import './Catering.css';
import Reveal from '../components/Reveal';
import cateringBanner from '../assets/catering_banner.jpg';

const Catering = () => {
    return (
        <section id="catering" className="section catering-section">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <span className="section-subtitle">Royal Events</span>
                        <h2 className="section-title">Catering Services</h2>
                        <div className="section-divider"></div>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <div className="catering-banner-wrapper">
                        <img src={cateringBanner} alt="Thar Catering Services" className="catering-banner" />
                    </div>
                    <div className="catering-action">
                        <a href="tel:+919380075541" className="catering-btn">Contact Us for Events</a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Catering;
