import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>La Chismosa FM</title>
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
                  src="../images/inicio/lachismosa-banner.jpg"
                  alt="Lachismosa"
                  className="main-banner w-100 d-none d-sm-block"
                />
                <StaticImage
                  src="../images/inicio/lachismosa-banner-sm.jpg"
                  alt="Lachismosa"
                  className="main-banner w-100 d-block d-sm-none"
                />
                <Card.ImgOverlay className="rounded-0 d-flex align-items-center p-0">
                  <Container>
                    <Row>
                      <Col md={12}>
                        <div className="content-banner-home">
                          <StaticImage
                            src="../images/assets/la-chismosa.png"
                            alt="Lachismosa"
                          />
                          <p className="texto-banner-home">
                            La primera visual <br /> radio del Ecuador.
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
                    <h1 className="titulo-lachismosa">La Chismosa FM</h1>
                    <p className="texto-lachismosa mb-0 pt-2">
                      RADIO LA CHISMOSA FM es una radiodifusora de carácter
                      informativo, educativo, deportivo, intercultural, de
                      opinión y de entretenimiento, que produce, transmite y
                      promueve una programación de calidad que contribuye a la
                      construcción de la sociedad.
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Row md={12} className="mt-md-3 px-0 pb-5 text-center">
                    <h2 className="titulo-podcast d-flex align-items-center mb-3">
                      ESCÚCHANOS
                      <span className="titulo-envivo mx-2">
                        EN VIVO <span> &#9679; </span>
                      </span>
                    </h2>
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="//www.alsolnet.com/stream/lachismosatv/player.htm"
                        title="YouTube video"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </Row>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container fluid className="background-2 px-0">
          <Row>
            <Col md={12}>
              <Card className="text-white border-0 rounded-0">
                <picture>
                  <StaticImage
                    src="../images/inicio/concursos/lachismosa-concursos.jpg"
                    alt="Lachismosa"
                    className="d-none d-sm-block"
                  />
                  <StaticImage
                    src="../images/inicio/concursos/lachismosa-concursos-ws-sm.jpg"
                    alt="Lachismosa"
                    className="d-block d-sm-none"
                  />
                </picture>
                <Card.ImgOverlay className="rounded-0 d-flex align-items-center p-0">
                  <Container>
                    <Row className="d-flex justify-content-center">
                      <Col md={12} className="text-center text-md-start">
                        <Button
                          variant="dark"
                          className="btn-destacado mb-4 mb-md-2 px-md-4 pb-0"
                        >
                          Nuestros Concursos
                          {/* <i className="bi bi-play-circle"></i> */}
                        </Button>
                      </Col>
                    </Row>
                    <Row className="cont-destacados d-flex justify-content-center">
                      <Col xs={6} md={3} lg={3} className="pt-2">
                        <a
                          href="https://www.facebook.com/lachismosafm/videos/533844251172514"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Card className="card text-white border-0 card-rounded">
                            <StaticImage
                              src="../images/inicio/concursos/parlotrivia-deportiva.png"
                              alt="Lachismosa"
                            />
                            {/* <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                              <h5 className="card-title text-center">
                                Parlotrivia Deportiva
                              </h5>
                            </Card.ImgOverlay> */}
                          </Card>
                        </a>
                      </Col>
                      <Col xs={6} md={3} lg={3} className="pt-2">
                        <a
                          href="https://www.facebook.com/lachismosafm/videos/658970735278545/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="card text-white border-0 card-rounded">
                            <StaticImage
                              src="../images/inicio/concursos/billeteate.png"
                              alt="Lachismosa"
                            />
                            {/* <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <h5 className="card-title text-center">
                              Paleta Regalona
                            </h5>
                          </div> */}
                          </div>
                        </a>
                      </Col>
                      <Col xs={6} md={3} lg={3} className="pt-2">
                        <a
                          href="https://www.facebook.com/285968131793242/videos/590151322442491"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="card text-white border-0 card-rounded">
                            <StaticImage
                              src="../images/inicio/concursos/capsula-regalona.png"
                              alt="Lachismosa"
                            />
                            {/* <img src="images/concursos/capsula-regalona.jpg" className="card-img img-fluid card-rounded" alt="capsula regalona"> */}
                            {/* <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <h5 className="card-title text-center">
                              La Cápsula Regalona
                            </h5>
                          </div> */}
                          </div>
                        </a>
                      </Col>
                      <Col xs={6} md={3} lg={3} className="pt-2">
                        <a
                          href="https://www.facebook.com/lachismosafm/videos/1097950727786050/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="card text-white border-0 card-rounded">
                            <StaticImage
                              src="../images/inicio/concursos/botella-regalona.png"
                              alt="Lachismosa"
                            />
                            {/* <img src="images/concursos/capsula-regalona.jpg" className="card-img img-fluid card-rounded" alt="capsula regalona"> */}
                            {/* <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <h5 className="card-title text-center">
                              La Cápsula Regalona
                            </h5>
                          </div> */}
                          </div>
                        </a>
                      </Col>
                    </Row>
                  </Container>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container fluid className="background-2 px-0 mt-3 mt-md-5">
          <Row>
            <Col md={12}>
              <Card className="text-white border-0 rounded-0">
                <picture>
                  <StaticImage
                    src="../images/inicio/concursos/lachismosa-concursos.jpg"
                    alt="Lachismosa"
                    className="d-none d-sm-block"
                  />
                  <StaticImage
                    src="../images/inicio/concursos/lachismosa-concursos-xs.jpg"
                    alt="Lachismosa"
                    className="d-block d-sm-none"
                  />
                </picture>
                <Card.ImgOverlay className="rounded-0 d-flex align-items-center p-0">
                  <Container>
                    <Row className="d-flex justify-content-center">
                      <Col md={8} className="text-center text-md-start">
                        <Button
                          variant="dark"
                          className="btn-destacado mb-4 mb-md-2 px-md-4 pb-0"
                        >
                          Eventos
                          {/* <i className="bi bi-play-circle"></i> */}
                        </Button>
                      </Col>
                    </Row>
                    <Row className="cont-destacados d-flex justify-content-center">
                      <Col xs={6} md={4} lg={4} className="pt-4 px-0">
                        <a
                          href="https://www.facebook.com/lachismosafm/videos/1053382205253989"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Card className="card text-white border-0 card-rounded">
                            <StaticImage
                              src="../images/inicio/eventos/tour-party-reggaeton.png"
                              alt="Lachismosa"
                            />
                            {/* <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                              <h5 className="card-title text-center">
                                Parlotrivia Deportiva
                              </h5>
                            </Card.ImgOverlay> */}
                          </Card>
                        </a>
                      </Col>
                      <Col xs={6} md={4} lg={4} className="pt-4 px-0">
                        <a
                          href="https://www.facebook.com/lachismosafm/videos/533361121651148"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="card text-white border-0 card-rounded">
                            <StaticImage
                              src="../images/inicio/eventos/chismoruta5k.png"
                              alt="Lachismosa"
                            />
                            {/* <img src="images/concursos/capsula-regalona.jpg" className="card-img img-fluid card-rounded" alt="capsula regalona"> */}
                            {/* <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <h5 className="card-title text-center">
                              La Cápsula Regalona
                            </h5>
                          </div> */}
                          </div>
                        </a>
                      </Col>
                    </Row>
                  </Container>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container fluid className="background-2 px-0 mt-3 mt-md-5">
          <Row>
            <Col md={12}>
              <Card className="text-white border-0 rounded-0">
                <picture>
                  <StaticImage
                    src="../images/inicio/concursos/lachismosa-concursos.jpg"
                    alt="Lachismosa"
                    className="d-none d-sm-block"
                  />
                  <StaticImage
                    src="../images/inicio/concursos/lachismosa-concursos-xs.jpg"
                    alt="Lachismosa"
                    className="d-block d-sm-none"
                  />
                </picture>
                <Card.ImgOverlay className="rounded-0 d-flex align-items-center p-0">
                  <Container>
                    <Row className="d-flex justify-content-center">
                      <Col md={8} className="text-center text-md-start">
                        <Button
                          variant="dark"
                          className="btn-destacado mb-4 mb-md-2 px-md-4 pb-0"
                        >
                          Segmentos
                          {/* <i className="bi bi-play-circle"></i> */}
                        </Button>
                      </Col>
                    </Row>
                    <Row className="cont-destacados d-flex justify-content-center">
                      <Col xs={6} md={4} lg={4} className="pt-4 px-0">
                        <a
                          href="https://www.facebook.com/lachismosafm/videos/504625394549899/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Card className="card text-white border-0 card-rounded">
                            <StaticImage
                              src="../images/inicio/segmentos/chismosa-goza.png"
                              alt="Lachismosa"
                            />
                            {/* <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                            <h5 className="card-title text-center">
                              Parlotrivia Deportiva
                            </h5>
                          </Card.ImgOverlay> */}
                          </Card>
                        </a>
                      </Col>
                      <Col xs={6} md={4} lg={4} className="pt-4 px-0">
                        <a
                          href="https://www.facebook.com/lachismosafm/videos/533361121651148"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="card text-white border-0 card-rounded">
                            <StaticImage
                              src="../images/inicio/segmentos/chimosa-carta.png"
                              alt="Lachismosa"
                            />
                            {/* <img src="images/concursos/capsula-regalona.jpg" className="card-img img-fluid card-rounded" alt="capsula regalona"> */}
                            {/* <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <h5 className="card-title text-center">
                              La Cápsula Regalona
                            </h5>
                          </div> */}
                          </div>
                        </a>
                      </Col>
                    </Row>
                  </Container>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5">
          <Row className="pb-5 d-flex justify-content-center">
            <Col md={8}>
              <a
                className="twitter-timeline"
                data-theme="light"
                href="https://twitter.com/ChismosaFm?ref_src=twsrc%5Etfw"
                data-tweet-limit="2"
              >
                Tweets by ChismosaFm
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
