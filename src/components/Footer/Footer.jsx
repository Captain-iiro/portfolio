import "./Footer.scss";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Captain-iiro",
                            "sameAs": [
                                "https://github.com/Captain-iiro",
                                "https://x.com/Captain_iiro",
                            ],
                            "jobTitle": "Software Developer",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Captain-iiro"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "Customer Support",
                                "url": "https://abdourahmanabdillahi.com/#hire-me"
                            }
                        }
                    `}
        </script>
      </Helmet>
      <section className="Footer" role="contentinfo">
        <div className="logo">
          <span className="text">
            <a href="/">Captain-iiro</a>
          </span>
        </div>
        <div className="footer-bottom element3">
          <p>
            &copy; {new Date().getFullYear()} Captain-iiro. All rights reserved.
          </p>
        </div>
        <div className="social">
          <div>
            <a
              href="https://github.com/Captain-iiro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View my GitHub profile"
              className="social-content twitter"
            ></a>
          </div>
          <div>
            <a
              href="https://x.com/Captain_iiro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow me on X"
              className="social-content github"
            ></a>
          </div>
          <div> {/* mettre un reseaux social de plus */}</div>
        </div>
      </section>
    </>
  );
};
export default Footer;
