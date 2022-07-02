import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import ReactPlayer from "react-player";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>App</title>
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
                  src="../images/app/lachismosa-app-banner.jpg"
                  alt="Lachismosa"
                  className="main-banner w-100 d-none d-sm-block"
                />
                <StaticImage
                  src="../images/app/lachismosa-app-banner-sm.jpg"
                  alt="Lachismosa"
                  className="main-banner w-100 d-block d-sm-none"
                />
                <Card.ImgOverlay className="rounded-0 d-flex align-items-center p-0">
                  <Container>
                    <Row>
                      <Col md={12}>
                        <div className="content-banner">
                          <h1 className="titulo-banner">
                            ¿Cómo descargar <br />
                            nuestra app?
                          </h1>
                          <p className="texto-banner">
                            Sigue los pasos del video <br />
                            y disfruta de La Chismosa <br />
                            desde cualquier dispositivo.
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
                    <p className="texto-lachismosa mb-0 pt-2">
                      Escucha tu música favorita, descárgate nuestro app de la
                      chismosa. Entérate de las ultimas noticias del mundo del
                      entretenimiento.
                    </p>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-5 mb-4 pt-md-4">
                  <Col md={8} className="text-center">
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      url="https://www.facebook.com/watch/?v=532963767746294"
                      controls
                    />
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-5 mb-4 mb-md-5 pb-md-5 pt-md-5">
                  <Col md={8} className="text-center">
                    <p className="texto-lachismosa mb-0 pt-2">
                      Desde tu celular ingresa a tu app de descargas.
                    </p>
                    <p className="texto-lachismosa mb-0 pt-4">
                      - Busca la Chismosa fm
                    </p>
                    <p className="texto-lachismosa mb-0 pt-2">
                      - Verifica que sea la app correcta.
                    </p>
                    <p className="texto-lachismosa mb-0 pt-2">
                      - Presiona en descargar y listo.
                    </p>

                    <p className="texto-lachismosa mb-0 pt-4">
                      Si tienes IOS hazlo desde la App Store.
                    </p>
                    <p className="texto-lachismosa mb-0 pt-2">
                      Si tienes Android hazlo desde Play Store.
                    </p>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                  <Col md={12} className="text-center text-md-center">
                    <Button
                      variant="dark"
                      className="btn-descarga mb-4 mb-md-2 px-md-4 pb-0"
                    >
                      Descarga aquí
                    </Button>
                  </Col>
                </Row>

                <Row className="d-flex justify-content-center mt-4 mb-5">
                  <Col xs={6} md={3} className="text-center text-md-center">
                    <StaticImage
                      src="../images/app/app-store.jpg"
                      alt="Lachismosa"
                    />
                  </Col>
                  <Col xs={6} md={3} className="text-center text-md-center">
                    <StaticImage
                      src="../images/app/google-play.jpg"
                      alt="Lachismosa"
                    />
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

export default App;
