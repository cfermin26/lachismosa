import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Helmet from "react-helmet";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const QuienesSomos = () => {
  return (
    <main>
      <Helmet>
        <title>Quienes somos</title>
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
      <Menu />
      <Container fluid>
        <Row>
          <Col md={12} className="px-0 d-flex justify-content-center">
            <Card className="bg-dark text-white rounded-0 border-0">
              <StaticImage
                src="../images/quienes-somos/lachismosa-quienes-somos.jpg"
                alt="Lachismosa"
                className="main-banner w-100 d-none d-sm-block"
              />
              <StaticImage
                src="../images/quienes-somos/lachismosa-quienes-somos-sm.jpg"
                alt="Lachismosa"
                className="main-banner w-100 d-block d-sm-none"
              />
              <Card.ImgOverlay className="rounded-0 d-flex align-items-center p-0">
                <Container>
                  <Row>
                    <Col md={12}>
                      <div className="content-banner">
                        <h1 className="titulo-banner">¿Quiénes somos?</h1>
                        <p className="texto-banner">
                          La Chismosa FM,
                          <br />
                          la mejor radiodifusora
                          <br />
                          del país.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Container>
              <Row className="d-flex justify-content-center mt-5 mb-4 pt-md-5">
                <Col md={8} className="text-center">
                  <h1 className="titulo-lachismosa">¿Quiénes somos?</h1>
                  <p className="texto-lachismosa mb-0 pt-2">
                    RADIO LA CHISMOSA FM es parte de nuestra audiencia, de su
                    alegría diaria, de su convivir y que nuestra programación
                    audio visual, sirva además de entretener e informar, también
                    para culturizar, motivar y guiar de una forma sana,
                    divertida e informal, basados en nuestra filosofía de
                    transmitir buenas noticias, con una actitud positiva y
                    motivadora en el día a día de nuestros radioyentes.
                  </p>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center mt-5 mb-4 pt-md-5">
                <Col md={8} className="text-center">
                  <h1 className="titulo-lachismosa">Misión</h1>
                  <p className="texto-lachismosa mb-0 pt-2">
                    Ser un medio de comunicación audio visual, con equipamiento
                    de última tecnología, que brinda al público en general una
                    programación AAA, con responsabilidad y visión social,
                    basada en valores ligados a la consecución de una sociedad
                    más justa y democrática, con programación imparcial,
                    contrastada, moderna y entretenida, apta para todo público.
                  </p>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center mt-5 mb-4 mb-md-5 pb-md-5 pt-md-5">
                <Col md={8} className="text-center">
                  <h1 className="titulo-lachismosa">Visión</h1>
                  <p className="texto-lachismosa mb-0 pt-2">
                    Ser la radio con mayor sintonía en las provincias de Azuay y
                    Cañar a través de la transmisión de su programación en las
                    frecuencias 104.1 104.5 y 102.9 y de sus canales digitales
                    vía streaming, a fin de llegar a los más altos estándares de
                    calidad en servicio a nuestra audiencia, con excelente
                    sonido, fidelidad y ofreciendo información fresca, real,
                    interesante, entregada con respeto y objetividad.
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default QuienesSomos;
