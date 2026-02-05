import React from 'react';
import './Gallery.css';
import Reveal from '../components/Reveal';
import img1 from '../assets/gallery/img1.jpg';
import img2 from '../assets/gallery/img2.jpg';
import img3 from '../assets/gallery/img3.jpg';
import img4 from '../assets/gallery/img4.jpg';
import img5 from '../assets/gallery/img5.jpg';

const Gallery = () => {
    const images = [
        { id: 2, src: img2, alt: 'Thar Wall Art' },
        { id: 1, src: img1, alt: 'Restaurant Interior - Colorful Umbrellas' },
        { id: 3, src: img3, alt: 'Wall Murals' },
        { id: 4, src: img4, alt: 'Decorated Wall' },
        { id: 5, src: img5, alt: 'Dining Area' },
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
