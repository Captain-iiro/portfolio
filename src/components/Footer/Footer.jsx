import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <section className="Footer">
            <div className="logo"><span className='text'><a href="/">Captain-iiro</a></span></div>
            <div><span><a href="https://plausible.io/abdourahmanabdillahi.com" target="_blank" rel="noopener noreferrer" aria-label="View website statistics on Plausible">Statistique</a></span></div>
            <div className='social'>
                <div><a href="https://github.com/Captain-iiro" target="_blank" rel="noopener noreferrer" aria-label="View my GitHub profile" className='social-content twitter'></a></div>
                <div><a href="https://x.com/Captain_iiro" target="_blank" rel="noopener noreferrer" aria-label="Follow me on X" className='social-content github'></a></div>
                <div><a href="https://wa.me/25377320261"  target="_blank" rel="noopener noreferrer" aria-label="Contact me on WhatsApp" className='social-content Whatsapp'></a></div>
            </div>

        </section>
    );
}
export default Footer;