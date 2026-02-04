import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import './OrderModal.css';

const OrderModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="order-modal-backdrop" onClick={handleBackdropClick}>
            <div className="order-modal-content">
                <button className="close-btn" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <h3 className="modal-title">Order Online</h3>
                <p className="modal-subtitle">Choose your preferred platform</p>

                <div className="platform-options">
                    <a
                        href="https://www.swiggy.com/city/bangalore/thar-the-taste-of-rajasthan-koramangala-jyothi-niwas-college-toad-rest414271"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-card swiggy"
                    >
                        <div className="platform-info">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg"
                                alt="Swiggy"
                                className="platform-logo"
                            />
                            <span className="platform-action">Order Now <ExternalLink size={14} /></span>
                        </div>
                    </a>

                    <a
                        href="https://www.zomato.com/bangalore/thar-the-taste-of-rajasthan-koramangala-5th-block-bangalore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-card zomato"
                    >
                        <div className="platform-info">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg"
                                alt="Zomato"
                                className="platform-logo"
                            />
                            <span className="platform-action">Order Now <ExternalLink size={14} /></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
