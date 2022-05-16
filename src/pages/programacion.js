import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Helmet from "react-helmet";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Programacion = () => {
  return (
    <main>
      <Helmet>
        <title>Programación</title>
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
                src="../images/programacion/lachismosa-programacion.jpg"
                alt="Lachismosa"
                className="main-banner w-100 d-none d-sm-block"
              />
              <StaticImage
                src="../images/programacion/lachismosa-programacion-sm.jpg"
                alt="Lachismosa"
                className="main-banner w-100 d-block d-sm-none"
              />
              <Card.ImgOverlay className="rounded-0 d-flex align-items-center p-0">
                <Container>
                  <Row>
                    <Col md={12}>
                      <div className="content-banner">
                        <h1 className="titulo-banner">Programación</h1>
                        <p className="texto-banner">
                          Transmitimos la mejor <br />
                          programación musical <br />y de entretenimiento.
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
              <Row>
                <Col xs={6} md={4} lg={3} className="text-center mt-4 mt-md-5">
                  <StaticImage
                    src="../images/programacion/programacion-1.png"
                    alt="Lachismosa"
                  />
                  <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                    Resumen de noticias nacionales e internacionales con
                    entrevistas.
                  </h2>
                  <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                    <p className="dia-programacion">Lunes a Viernes</p>
                    <p className="hora-programacion">de 07h00 a 09h00</p>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={3} className="text-center mt-4 mt-md-5">
                  <StaticImage
                    src="../images/programacion/programacion-2.png"
                    alt="Lachismosa"
                  />
                  <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                    Entretenimiento radial, una programación fuera de lo normal.
                  </h2>
                  <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                    <p className="dia-programacion">Lunes a Viernes</p>
                    <p className="hora-programacion">de 09h00 a 12h00</p>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={3} className="text-center mt-4 mt-md-5">
                  <StaticImage
                    src="../images/programacion/programacion-3.png"
                    alt="Lachismosa"
                  />
                  <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                    La música que tanto te gusta, entretenimiento, información y
                    mucho más.
                  </h2>
                  <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                    <p className="dia-programacion">Lunes a Viernes</p>
                    <p className="hora-programacion">de 12h00 a 15h00</p>
                  </div>
                </Col>

                <Col xs={6} md={4} lg={3} className="text-center mt-4 mt-md-5">
                  <StaticImage
                    src="../images/programacion/programacion-4.png"
                    alt="Lachismosa"
                  />
                  <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                    Música tropical/variada e interacción en las redes sociales.
                  </h2>
                  <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                    <p className="dia-programacion">Lunes a Viernes</p>
                    <p className="hora-programacion">de 15h00 a 18h00</p>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={3} className="text-center mt-4 mt-md-5">
                  <StaticImage
                    src="../images/programacion/programacion-5.png"
                    alt="Lachismosa"
                  />
                  <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                    Interacción contínua acompañada con música clásica y actual.
                  </h2>
                  <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                    <p className="dia-programacion">Lunes a Viernes</p>
                    <p className="hora-programacion">de 18h00 a 20h00</p>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={3} className="text-center mt-4 mt-md-5">
                  <StaticImage
                    src="../images/programacion/programacion-6.png"
                    alt="Lachismosa"
                  />
                  <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                    Noticias deportivas que hacen de la jornada es de interés de
                    la fanaticada nacional.
                  </h2>
                  <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                    <p className="dia-programacion">Lunes a Viernes</p>
                    <p className="hora-programacion">de 20h00 a 21h00</p>
                  </div>
                </Col>

                <Col xs={6} md={4} lg={3} className="text-center mt-4 mt-md-5">
                  <StaticImage
                    src="../images/programacion/programacion-7.png"
                    alt="Lachismosa"
                  />
                  <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                    Canciones con historia propia, porque la música no tiene
                    años.
                  </h2>
                  <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                    <p className="dia-programacion">Lunes a Viernes</p>
                    <p className="hora-programacion">de 21h00 a 23h00</p>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={3} className="text-center mt-4 mt-md-5">
                  <StaticImage
                    src="../images/programacion/programacion-8.png"
                    alt="Lachismosa"
                  />
                  <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                    Fines de semana con el mejor acompañamiento.
                  </h2>
                  <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                    <p className="dia-programacion">Sábados</p>
                    <p className="hora-programacion">de 14h00 a 17h00</p>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={3} className="text-center mt-4 mt-md-5">
                  <StaticImage
                    src="../images/programacion/programacion-9.png"
                    alt="Lachismosa"
                  />
                  <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                    Sintonía al máximo acompañada de una programación de lujo.
                  </h2>
                  <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                    <p className="dia-programacion">Sábados</p>
                    <p className="hora-programacion">de 11h00 a 14h00</p>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={3} className="text-center mt-4 mt-md-5">
                  <StaticImage
                    src="../images/programacion/programacion-10.png"
                    alt="Lachismosa"
                  />
                  <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                    Lo más destacado de la música disco, un viaje a los 70's y
                    80's.
                  </h2>
                  <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                    <p className="dia-programacion">Jueves</p>
                    <p className="hora-programacion">de 07h00 a 11h00</p>
                  </div>
                </Col>
              </Row>
              <br />
              <br />
            </Container>
          </Col>
        </Row>
      </Container>

      <Footer />
    </main>
  );
};

export default Programacion;
