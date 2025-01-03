import React from 'react';
import './Contact.scss';
import V from '../../assets/Contact-img/Vector.svg';

const Contact = () => {
    return (
        <section id="hire-me" className="Contact">

            <div className='Contact-container'>
                <img className='V' src={V} alt="" />
                <h2>Let’s start designing your project</h2>
                <p>Want to see how to transform your brand into a </p>
                <p>unique style. sent us a message</p>
                <a   href="mailto:abdillahiabdourahman65@gmail.com"><button className='button'> Send us message <span className='tire'></span></button></a>
            </div>
        </section>
    );
}
export default Contact;