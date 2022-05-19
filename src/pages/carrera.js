import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Formulario from "../components/Formulario";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Carrera = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Carrera</title>
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
                  src="../images/carrera/lachisamosa-carrera.jpg"
                  alt="Lachismosa"
                  className="main-banner w-100 d-none d-sm-block"
                />
                <StaticImage
                  src="../images/carrera/lachisamosa-carrera-sm.jpg"
                  alt="Lachismosa"
                  className="main-banner w-100 d-block d-sm-none"
                />
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Container>
                <Row className="d-flex justify-content-center my-4 pt-md-5">
                  <Col md={8} className="text-center my-3 my-md-0 pb-md-5">
                    <h1 className="titulo-carrera mb-0">ChismoRuta 5K</h1>
                    <h2 className="subtitulo-carrera">
                      La primera carrera recreacional
                    </h2>
                    <p className="texto-lachismosa mb-0 pt-2">
                      Ven participa y únete a nuestra campaña en contra del
                      machismo, xenofobia <br className="d-none d-sm-block" /> y
                      violencia a la mujer, niño y familia.
                    </p>
                    <p className="texto-carrera mb-0 mt-4 mb-0">
                      <span className="carrera-bold">Fecha:</span> Domingo 05 de
                      junio de 2022
                    </p>
                    <p className="texto-carrera mb-0">
                      <span className="carrera-bold">Hora:</span> 9h00
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

        <Formulario />

        <Container>
          <Row>
            <Col md={12} className="px-0 d-flex justify-content-center">
              <Card className="bg-dark text-white rounded-0 border-0">
                <StaticImage
                  src="../images/carrera/lachismosa-ruta.png"
                  alt="Lachismosa"
                  className="main-banner w-100 d-none d-sm-block"
                />
                <StaticImage
                  src="../images/carrera/lachismosa-ruta-sm.png"
                  alt="Lachismosa"
                  className="main-banner w-100 d-block d-sm-none"
                />
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Container>
                <Row className="d-flex justify-content-center mt-5 mb-md-4 pt-md-5">
                  <Col md={8} className="text-center">
                    <h2 className="titulo-carrera-md">
                      Kilómetros del <br className="d-block d-sm-none" />
                      Recorrido
                    </h2>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                  <Col md={4} className="my-auto">
                    <p className="texto-lachismosa">
                      <ul className="lista-carrera">
                        <li>
                          <span className="carrera-bold">Km0:</span> Radio La
                          Chismosa 104.1 FM. <br /> Jose Peralta 3-45 y Alfonso
                          Cordero, salida.
                        </li>
                        <li>
                          <span className="carrera-bold">Km1:</span> Av. Solano
                          y Daniel Cordova, sector
                          <br className="d-none d-sm-block" /> colegio Benigno
                          Malo.
                        </li>
                        <li>
                          <span className="carrera-bold">Km2:</span>: Av. Solano
                          y 10 de agosto, sector
                          <br className="d-none d-sm-block" /> Virgen de Bronce.
                        </li>
                      </ul>
                    </p>
                  </Col>
                  <Col md={4} className="my-auto">
                    <p className="texto-lachismosa">
                      <ul className="lista-carrera">
                        <li>
                          <span className="carrera-bold">Km3:</span> 24 de mayo
                          y la Y subida a turi.
                        </li>
                        <li>
                          <span className="carrera-bold">Km4:</span> Av. 24 de
                          mayo, sector UDA.
                        </li>
                        <li>
                          <span className="carrera-bold">Km5:</span>: Parque El
                          Paraíso.
                        </li>
                      </ul>
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col
              md={12}
              className="d-flex justify-content-center text-center text-light mt-4 mt-md-5"
            >
              <div className="cont-inscripcion py-4 py-md-5">
                <h3 className="titulo-inscripcion">Inscripciones</h3>
                <h4 className="valor-inscripcion mt-4 mb-0">
                  VALOR DE LA INSCRIPCIÓN
                </h4>
                <p className="texto-lachismosa mt-2 mb-0 lh-1">
                  <span className="carrera-bold">$10,00</span> por persona
                </p>
                <p className="texto-lachismosa mb-0 lh-1">
                  Incluye camiseta, gorra y medalla
                </p>
                <a href="https://www.meet2go.com/ev/chismoruta5k/">
                  <Button
                    variant="light"
                    className="btn-inscripcion px-4 my-4 my-md-5"
                  >
                    ¡INSCRíBETE AQUÍ!
                  </Button>
                </a>
                <h3 className="titulo-premio">PREMIOS</h3>
                <p className="texto-lachismosa mb-2 lh-1">
                  <span className="carrera-bold">Habrá sorteo de premios </span>
                  de <br /> nuestros auspiciantes.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-3 mt-md-4">
            <Col md={12} className="mt-4 mt-md-5 text-center">
              <h2 className="titulo-carrera-md">Seguridad y control</h2>
              <p className="texto-lachismosa mb-1 lh-1 mt-4 mt-md-5">
                - La seguridad será brindada por la Policía Nacional a lo largo
                de todo el recorrido.
              </p>
              <p className="texto-lachismosa mb-1 lh-1">
                - El control del tránsito y cierre de vías estará a cargo de la
                EMOV EP.
              </p>
              <p className="texto-lachismosa mb-1 lh-1">
                - Para la prevención y socorro se contará con el apoyo de la
                Cruz Roja y Cuerpo de Bomberos de Cuenca.
              </p>
              <p className="texto-lachismosa mb-1 lh-1">
                - El cumplimiento de la ruta por parte de los atletas estará a
                cargo del personal deportivo de Radio La Chismosa.
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-4 mt-md-4">
            <Col md={12} className="mt-4 mt-md-5 text-center">
              <h2 className="titulo-carrera-md ">
                Reglamento y condiciones generales
              </h2>
              <p className="texto-lachismosa mb-0 mt-4 mt-md-5">
                <ol className="lista-carrera">
                  <li>
                    La Carrera recreativa “ChismoRuta 5k” se realizará en
                    cualquier estado del tiempo
                    <br className="d-none d-sm-block" /> que permita al
                    competidor correr en condiciones seguras.
                  </li>
                  <li>
                    Es obligatorio para los participantes inscritos correr con
                    la camiseta oficial.
                  </li>
                  <li>
                    Los organizadores del evento y auspiciantes de la
                    competencia no se responsabilizan por{" "}
                    <br className="d-none d-sm-block" />
                    accidentes ocurridos antes, durante y después de la carrera,
                    como tampoco por el extravío de objetos.
                  </li>
                </ol>
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="bg-reglas text-light py-5">
            <Col md={12}>
              <Container>
                <Row>
                  <Col md={12}>
                    <h4 className="titulo-reglas text-center">
                      REGLAS INSCRIPCIÓN
                    </h4>
                  </Col>
                </Row>

                <Row className="d-flex justify-content-center mt-2">
                  <Col md={5} className="br-light">
                    <p className="texto-lachismosa">
                      <ol className="lista-carrera">
                        <li>
                          Para participar oficialmente en la carrera es
                          necesario inscribirse.
                        </li>
                        <li>
                          No se realizan devoluciones del valor de las
                          inscripciones, por no poder asistir por cualquier
                          motivo.
                        </li>
                      </ol>
                    </p>
                  </Col>
                  <Col md={5}>
                    <p className="texto-lachismosa">
                      <ol start="3" className="lista-carrera">
                        <li>
                          Las inscripciones NO son transferibles, ni los pagos
                          reembolsables.
                        </li>
                        <li>
                          El competidor inscrito que no retire su kit o que no
                          se presente el día del evento no recibirá el kit de
                          competidor.
                        </li>
                      </ol>
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className="mt-4">
                    <h4 className="titulo-reglas text-center">
                      KITS COMPETIDOR
                    </h4>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-2">
                  <Col md={4} className="br-light">
                    <p className="texto-lachismosa">
                      <ol className="lista-carrera">
                        <li>
                          No se entregarán kit de competidor
                          <br className="d-none d-sm-block" /> o camiseta en
                          otra fecha que la programada.
                        </li>
                      </ol>
                    </p>
                  </Col>
                  <Col md={4} className="br-light">
                    <p className="texto-lachismosa">
                      <ol start="2" className="lista-carrera">
                        <li>
                          Los participantes deberán retirar su kit de competidor
                          en la ciudad de Cuenca.
                        </li>
                      </ol>
                    </p>
                  </Col>
                  <Col md={4}>
                    <p className="texto-lachismosa">
                      <ol start="3" className="lista-carrera">
                        <li>
                          Si el kit no es retirado en la fecha programada, no se
                          entregan kits el día de la carrera ni se reembolsará
                          el dinero de la inscripción.
                        </li>
                      </ol>
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="mt-3 mt-md-4 d-flex justify-content-center">
            <Col md={8} className="mt-4 mt-md-5 text-center">
              <h2 className="titulo-carrera-md">La Organización</h2>
              <p className="texto-lachismosa mt-4 mt-md-5">
                En caso de lesiones de los participantes inscritos, los
                organizadores del evento se encargarán de su traslado hasta el
                hospital más cercano. Todos los gastos de medicamentos,
                curaciones, traslados adicionales, hospitalización o
                internación, exámenes de laboratorio e imagen, procedimientos no
                quirúrgicos o quirúrgicos, correrán por cuenta del participante
                o competidor.
              </p>
              <p className="texto-lachismosa">
                Las imágenes que se obtengan en la competencia podrán ser
                utilizadas por los organizadores del evento y por las empresas
                auspiciantes para fines de difusión y publicidad del evento y/o
                de productos asociados al mismo. Los competidores que acepten
                participar no tendrán derecho a realizar reclamos por el uso de
                su imagen.
              </p>
              <p className="texto-lachismosa">
                Los organizadores del evento tiene la facultad para modificar el
                recorrido establecido; detener la carrera en caso de
                inclemencias del tiempo u otro impedimento que imposibilite el
                normal desarrollo de la misma; o desviar el curso de ella en
                caso de dificultades en el terreno, inclemencias del tiempo o
                hechos inesperados.
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mt-md-4 d-flex justify-content-center">
            <Col md={8} className="mt-4 mt-md-5">
              <h2 className="titulo-carrera-md text-center">Equipamento</h2>
              <p className="texto-lachismosa mt-4 mt-md-5 text-center">
                Los participantes oficiales obligatoriamente deben portar:
              </p>
              <p className="texto-lachismosa d-flex justify-content-center">
                <ol>
                  <li>Camiseta oficial de competencia.</li>
                  <li>Gorra oficial de la ChismoRuta 5k</li>
                </ol>
              </p>
            </Col>
          </Row>
        </Container>

        <br />
        <br />
        <br />
      </main>
    </Layout>
  );
};

export default Carrera;
