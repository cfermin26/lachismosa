import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { StaticImage } from "gatsby-plugin-image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="py-4 py-md-5 d-flex justify-content-center">
          <Col md={2} className="my-auto pb-4 pb-md-0 text-center">
            <Link to="/">
              <StaticImage
                src="../images/assets/lachismosa-logo.svg"
                alt="Lachisamosa fm"
                className="logo-footer"
              />
            </Link>
          </Col>

          <div className="col-md-3 my-auto px-md-0">
            <ul className="contacto-footer">
              <li>
                <StaticImage
                  src="../images/assets/footer-horario.png"
                  alt="Lachisamosa fm"
                />
                09:00 am - 13:00 pm / 14:00 pm - 18:00 pm{" "}
              </li>
              <li>
                <StaticImage
                  src="../images/assets/footer-direccion.png"
                  alt="Lachisamosa fm"
                />
                Av. José Peralta 3-45 y Alfonso Cordero
              </li>
            </ul>
          </div>
          <div className="col-md-2 my-auto px-md-0">
            <ul className="contacto-footer">
              <li>
                <StaticImage
                  src="../images/assets/footer-email.png"
                  alt="Lachisamosa fm"
                />
                <a
                  href="mailto:info@lachismosafm.ec"
                  className="text-reset text-decoration-none"
                >
                  info@lachismosafm.ec
                </a>
              </li>
              <li>
                <StaticImage
                  src="../images/assets/footer-telefono.png"
                  alt="Lachisamosa fm"
                />
                (07) 4101041 - 0991041119
              </li>
            </ul>
          </div>
          <div className="col-md-2 my-auto pt-3 pt-md-0">
            <ul className="social-footer d-flex d-none d-sm-flex">
              <li>
                <a
                  href="https://www.facebook.com/SEMUVEX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../images/assets/footer-facebook.png"
                    alt="Lachisamosa fm"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/la_chismosa_104.1_fm?utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../images/assets/footer-instagram.png"
                    alt="Lachisamosa fm"
                  />
                </a>
              </li>
            </ul>
            <ul className="social-footer d-flex d-none d-sm-flex">
              <li>
                <a
                  href="https://twitter.com/ChismosaFm?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../images/assets/footer-twitter.png"
                    alt="Lachisamosa fm"
                  />
                </a>
              </li>
              <li>
                <span target="_blank" rel="noopener noreferrer">
                  <StaticImage
                    src="../images/assets/footer-tiktok.png"
                    alt="Lachisamosa fm"
                  />
                </span>
              </li>
            </ul>
            <ul className="social-footer d-flex d-block d-sm-none">
              <li>
                <a
                  href="https://www.facebook.com/SEMUVEX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../images/assets/footer-facebook.png"
                    alt="Lachisamosa fm"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/la_chismosa_104.1_fm?utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../images/assets/footer-instagram.png"
                    alt="Lachisamosa fm"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ChismosaFm?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../images/assets/footer-twitter.png"
                    alt="Lachisamosa fm"
                  />
                </a>
              </li>
              <li>
                <span target="_blank" rel="noopener noreferrer">
                  <StaticImage
                    src="../images/assets/footer-tiktok.png"
                    alt="Lachisamosa fm"
                  />
                </span>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
