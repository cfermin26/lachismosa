import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Programacion = () => {
  return (
    <Layout>
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
              <Container className="cont-progra">
                <Row>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-1.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Jammil Bustan, Tania Párraga, y Luis Mogrovejo.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Lunes a Viernes</p>
                      <p className="hora-programacion">de 07h00 a 09h00</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-2.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Jammil Bustan, Tania Párraga, y Luis Mogrovejo.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Lunes a Viernes</p>
                      <p className="hora-programacion">de 07h00 a 09h00</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-3.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Alejandro Tigre, Amelia Pesantez, Mauri Garnica, Reily
                      Sailema y Tres Patines.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Lunes a Viernes</p>
                      <p className="hora-programacion">de 09h00 a 12h00</p>
                    </div>
                  </Col>

                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-4.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Giorgio Gallegos, Bebeto Dj.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Lunes a Viernes</p>
                      <p className="hora-programacion">de 12h00 a 15h00</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-5.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      JC El Pantera, Lina Álvarez, Israel Villamar DJ Casado.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Lunes a Viernes</p>
                      <p className="hora-programacion">de 20h00 a 21h00</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-6.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Chino Mejía.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Lunes a Viernes</p>
                      <p className="hora-programacion">de 18h00 a 20h00</p>
                    </div>
                  </Col>

                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-7.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Cristian Pantosini, Miguel Gutiérrez, Juan Diego Picon.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Lunes a Viernes</p>
                      <p className="hora-programacion">de 20h00 a 21h00</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-8.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Djs Chismosos.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Viernes</p>
                      <p className="hora-programacion">de 21h00 a 00h00</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-9.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      El Cuervo.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Sábado</p>
                      <p className="hora-programacion">de 07h00 a 11h00</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-10.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Oscar Marcelo.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Sábado</p>
                      <p className="hora-programacion">de 11h00 a 14h00</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-11.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Juan Morales, El Mono Serrano.
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Jueves</p>
                      <p className="hora-programacion">de 14h00 a 17h00</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-12.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Nene Mike
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Sábado</p>
                      <p className="hora-programacion">de 17h00 a 20h00</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="text-center mt-4 mt-md-5"
                  >
                    <StaticImage
                      src="../images/programacion/programacion-13.jpg"
                      alt="Lachismosa"
                    />
                    <h2 className="titulo-programacion mt-2 mt-md-3 px-3">
                      Djs de la Chismosa
                    </h2>
                    <div className="fecha-programacion mx-auto mt-2 mt-md-3">
                      <p className="dia-programacion">Domingo</p>
                    </div>
                  </Col>
                </Row>
                <br />
                <br />
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};

export default Programacion;
