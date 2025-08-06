import "./Contact.scss";
import V from "../../assets/Contact-img/Vector.svg";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="contact, message, projet digital, expérience digitale, transformation digitale"
        />
      </Helmet>
      <section id="hire-me" className="Contact">
        <div className="Contact-container">
          <img className="V" src={V} alt="" />
          <h2>Start building your project today.</h2>
          <p>Transform your ideas into a unique digital experience.</p>
          <p>Got questions? Send us a message!</p>
          <a href="mailto:abdillahiabdourahman65@gmail.com?subject=Portfolioabdourahmanabdillahi.com&body=Votre message ici">
            <button className="button">
              {" "}
              Send us message <span className="tire"></span>
            </button>
          </a>
        </div>
      </section>
    </>
  );
};
export default Contact;
