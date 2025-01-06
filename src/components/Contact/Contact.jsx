import React from 'react';
import './Contact.scss';
import V from '../../assets/Contact-img/Vector.svg';

const Contact = () => {
    return (
        <section id="hire-me" className="Contact">

            <div className='Contact-container'>
                <img className='V' src={V} alt="" />
                <h2>Start building your project today.</h2>
                <p>Transform your ideas into a unique digital experience.</p>
                <p>Got questions? Send us a message!</p>
                <a   href="mailto:abdillahiabdourahman65@gmail.com?subject=Portfolio abdourahmanabdillahi.com&body=Votre message ici"><button className='button'> Send us message <span className='tire'></span></button></a>
            </div>
        </section>
    );
}
export default Contact;