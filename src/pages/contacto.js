import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Contacto = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Cobertura y contacto</title>
          <meta
            name="description"
            content="RADIO LA CHISMOSA FM es una radiodifusora de carácter informativo,
                educativo, deportivo, intercultural, de opinión y de entretenimiento, que produce, transmite y promueve
                una programación de calidad que contribuye a la construcción de la sociedad"
          />
          <meta property="og:title" content="RADIO LA CHISMOSA FM" />
          <meta property="og:url" content="https://www.lachismosafm.ec/" />
          <meta property="og:type" content="article" />
          <meta
            property="og:description"
            content="RADIO LA CHISMOSA FM es una radiodifusora de carácter informativo,
            educativo, deportivo, intercultural, de opinión y de entretenimiento, que produce, transmite y promueve
            una programación de calidad que contribuye a la construcción de la sociedad"
          />

          <meta
            name="keywords"
            content="la chismosa, podcast, fm, radio, frecuencias, ecuador"
          />
        </Helmet>
        <Container fluid>
          <Row>
            <Col md={12} className="px-0 d-flex justify-content-center">
              <Card className="bg-dark text-white rounded-0 border-0">
                <StaticImage
                  src="../images/contacto/lachismosa-contacto.jpg"
                  alt="Lachismosa"
                  className="main-banner w-100 d-none d-sm-block"
                />
                <StaticImage
                  src="../images/contacto/lachismosa-contacto-sm.jpg"
                  alt="Lachismosa"
                  className="main-banner w-100 d-block d-sm-none"
                />
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={12}>
              <Container>
                <Row className="d-flex justify-content-center mt-5 pt-md-5">
                  <Col md={4} className="px-0">
                    <h1 className="titulo-lachismosa text-center">
                      Frecuencias
                    </h1>
                    <p className="texto-contacto mb-0 pt-2 pt-md-4">
                      <span className="frecuencia-contacto">104.1 FM: </span>
                      Cuenca, Azogues, Biblián, Déleg.
                    </p>
                    <p className="texto-contacto mb-0">
                      <span className="frecuencia-contacto">104.5 FM: </span>
                      Gualaceo, Paute, El Sígsig, Chordeleg.
                    </p>
                    <p className="texto-contacto mb-0">
                      <span className="frecuencia-contacto">102.9 FM: </span>
                      Girón, San Fernando, Santa Isabel.
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>

          <Row>
            <Col md={8} className="mx-auto py-4 py-md-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15938.744478695624!2d-79.0038951!3d-2.9064272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x735207dc0128e84a!2sRadio%20La%20Chismosa%20104.1%20FM!5e0!3m2!1ses-419!2sec!4v1656616397840!5m2!1ses-419!2sec"
                width="100%"
                height="500"
                title="lachismosa"
                /* style="border:0;" */
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* <StaticImage src="../images/contacto/mapa.png" alt="Lachismosa" /> */}
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Container>
                <Row className="my-3 my-md-4">
                  <Col md={4} className="my-auto mx-auto px-0">
                    <ul className="contacto-info">
                      <li>
                        <StaticImage
                          src="../images/assets/footer-horario.png"
                          alt="Lachismosa"
                        />
                        09:00 am - 13:00 pm / 14:00 pm - 18:00 pm
                      </li>
                    </ul>
                  </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                  <Col md={3} className="my-auto px-0">
                    <ul className="contacto-info">
                      <li>
                        <StaticImage
                          src="../images/assets/footer-email.png"
                          alt="Lachismosa"
                        />
                        info@lachismosafm.ec
                      </li>
                    </ul>
                  </Col>
                  <Col md={3} className="my-auto px-0">
                    <ul className="contacto-info">
                      <li>
                        <StaticImage
                          src="../images/assets/footer-email.png"
                          alt="Lachismosa"
                        />
                        radiolachismosafm@gmail.com
                      </li>
                    </ul>
                  </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                  <Col md={4} className="my-auto px-0">
                    <ul className="contacto-info">
                      <li>
                        <StaticImage
                          src="../images/assets/footer-telefono.png"
                          alt="Lachismosa"
                        />
                        <span className="contacto-bold">Ventas:</span> 099 104
                        1119 / 099 387 21110
                      </li>
                    </ul>
                  </Col>
                  <Col md={4} className="my-auto px-0">
                    <ul className="contacto-info">
                      <li>
                        <StaticImage
                          src="../images/assets/footer-telefono.png"
                          alt="Lachismosa"
                        />
                        <span className="contacto-bold">Cabina:</span> 099 104
                        1100
                      </li>
                    </ul>
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className="text-center mt-2">
                    <ul className="contacto-info">
                      <li>
                        <StaticImage
                          src="../images/assets/footer-direccion.png"
                          alt="Lachismosa"
                        />
                        Av. José Peralta 3-45 y Alfonso Cordero
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>

          <Row className="row">
            <Col md={12}>
              <Container>
                <Row className="d-flex justify-content-center my-3 my-md-5">
                  <Col md={4} className="my-auto px-0">
                    <ul className="contacto-social">
                      <li>
                        <StaticImage
                          src="../images/assets/footer-facebook.png"
                          alt="Lachismosa"
                        />
                        <span className="text-reset text-decoration-none">
                          La Chismosa Fm 104.1
                        </span>
                      </li>
                      <li>
                        <StaticImage
                          src="../images/assets/footer-instagram.png"
                          alt="Lachismosa"
                        />
                        <span className="text-reset text-decoration-none">
                          @la_chismosa_104.1_fm
                        </span>
                      </li>
                    </ul>
                  </Col>
                  <Col md={3} className="my-auto px-0">
                    <ul className="contacto-social">
                      <li>
                        <StaticImage
                          src="../images/assets/footer-twitter.png"
                          alt="Lachismosa"
                        />
                        <span className="text-reset text-decoration-none">
                          @ChismosaFm
                        </span>
                      </li>
                      <li>
                        <StaticImage
                          src="../images/assets/footer-tiktok.png"
                          alt="Lachismosa"
                        />
                        <span className="text-reset text-decoration-none">
                          @la_chismosa_fm
                        </span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};

export default Contacto;
