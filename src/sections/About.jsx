import React from 'react';
import './About.css';
import Reveal from '../components/Reveal';
import aboutImg from '../assets/about-img.png';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <Reveal>
                            <span className="section-subtitle">Our Story</span>
                            <h2 className="section-title">A Legacy of Flavors</h2>
                            <div className="divider-gold"></div>

                            <p className="about-text">
                                <strong>Thar - The Taste of Rajasthan</strong> brings the rich heritage of Rajasthani cuisine to your plate.
                                Our journey began with a simple passion: to serve authentic, home-cooked flavors that tell the story of the desert land.
                            </p>
                            <p className="about-text">
                                From the spicy <em>Laal Maas</em> to the comforting <em>Dal Baati Churma</em>, every dish is prepared with traditional spices
                                and age-old recipes passed down through generations. Experience royal hospitality and a culinary voyage
                                that will transport you straight to the palaces of Rajasthan.
                            </p>

                            <div className="about-features">
                                <div className="feature-item">
                                    <span className="feature-icon">✦</span>
                                    <span>Authentic Recipes</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✦</span>
                                    <span>Royal Ambiance</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✦</span>
                                    <span>Fresh Ingredients</span>
                                </div>
                            </div>

                            <button className="btn-gold">Discover More</button>
                        </Reveal>
                    </div>

                    <div className="about-image-column">
                        <Reveal delay={200}>
                            <div className="image-composition">
                                <div className="image-wrapper">
                                    <img src={aboutImg} alt="Rajasthani Thali" className="main-image" />
                                </div>
                                <div className="decorative-frame"></div>
                                <div className="experience-badge">
                                    <span className="years">10+</span>
                                    <span className="label">Years of<br />Excellence</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
