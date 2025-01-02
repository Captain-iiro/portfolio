import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <section className="Footer">
            <div className="logo"><span className='text'><a href="/">Captain-iiro</a></span></div>
            <div><span><a href="">Statistique</a></span></div>
            <div className='social'>
                <div><a href="github" className='social-content github'></a></div>
                <div><a href="twitter" className='social-content twitter'></a></div>
                <div><a href="Whatsapp" className='social-content Whatsapp'></a></div>
            </div>

        </section>
    );
}
export default Footer;