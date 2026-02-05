import React, { useState } from 'react';
import './Menu.css';
import Reveal from '../components/Reveal';
import { menuCategories, menuItems } from '../data/menu';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('musthaves');

    return (
        <section id="menu" className="section menu-section">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <span className="section-subtitle">Discover Our Flavors</span>
                        <h2 className="section-title">Authentic Menu</h2>
                        <div className="section-divider"></div>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <div className="menu-tabs">
                        {menuCategories.map((category) => (
                            <button
                                key={category.id}
                                className={`menu-tab ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <div className="menu-grid">
                    {menuItems[activeCategory].map((item, index) => (
                        <Reveal key={item.id} delay={index * 100}>
                            <div className="menu-card">
                                <div className="menu-card-header">
                                    <h3 className="menu-item-name">{item.name}</h3>
                                    <span className="menu-item-price">{item.price}</span>
                                </div>
                                <p className="menu-item-desc">{item.description}</p>
                                {item.bestseller && <span className="badge-bestseller">Bestseller</span>}
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={400}>
                    <div className="menu-cta text-center">
                        <a href="https://www.swiggy.com/city/bangalore/thar-the-taste-of-rajasthan-koramangala-jyothi-niwas-college-toad-rest414271" target="_blank" rel="noopener noreferrer" className="premium-menu-btn">
                            <span className="btn-text">View on Swiggy</span>
                            <span className="btn-shine"></span>
                        </a>
                        <a href="/menu.pdf" target="_blank" rel="noopener noreferrer" className="premium-menu-btn premium-menu-btn-secondary">
                            <span className="btn-text">View Our Menu</span>
                            <span className="btn-shine"></span>
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Menu;
