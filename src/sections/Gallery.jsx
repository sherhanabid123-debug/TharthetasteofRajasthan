import React from 'react';
import './Gallery.css';
import Reveal from '../components/Reveal';
import imgAmbience from '../assets/gallery/ambience.jpg';
import imgChowki from '../assets/gallery/chowki.jpg';
import imgLanterns from '../assets/gallery/lanterns.jpg';

const Gallery = () => {
    const images = [
        { id: 1, src: imgAmbience, alt: 'Colourfull Ambience' },
        { id: 2, src: imgChowki, alt: 'Traditional Down Sitting Chowki' },
        { id: 3, src: imgLanterns, alt: 'Festive Rajasthani Decor' },
    ];

    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <span className="section-subtitle">Visual Feast</span>
                        <h2 className="section-title">Our Gallery</h2>
                        <div className="section-divider"></div>
                    </div>
                </Reveal>

                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div className="gallery-item">
                                <img src={image.src} alt={image.alt} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span>{image.alt}</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
