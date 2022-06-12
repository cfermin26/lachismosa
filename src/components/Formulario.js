import React, { useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const [activeSpinner, setActiveSpinner] = useState(false);
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [genero, setGenero] = useState("");
  const [fechaInscripcion, setFechaInscripcion] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [edad, setEdad] = useState(0);
  const [cedula, setCedula] = useState("");
  const [profesion, setProfesion] = useState("");
  const [talla, setTalla] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  /* console.log(nombreCompleto);
  console.log(genero);
  console.log(fechaInscripcion);
  console.log(fechaNacimiento);
  console.log(edad);
  console.log(cedula);
  console.log(profesion);
  console.log(talla);
  console.log(telefono);
  console.log(email);
  console.log(direccion); */

  const handleChange = (event) => {
    setGenero(event.target.value);
  };

  const handleChange2 = (event) => {
    setTalla(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActiveSpinner(true);
    // let cid = cuid();
    const dataForm = new FormData();
    dataForm.append("nombre_completo", nombreCompleto);
    dataForm.append("genero", genero);
    dataForm.append("fecha_inscripcion", fechaInscripcion);
    dataForm.append("fecha_nacimiento", fechaNacimiento);
    dataForm.append("edad", edad);
    dataForm.append("cedula", cedula);
    dataForm.append("profesion", profesion);
    dataForm.append("talla", talla);
    dataForm.append("telefono", telefono);
    dataForm.append("email", email);
    dataForm.append("direccion", direccion);
    const respuesta = await axios.post(
      "https://kernel.inkside.studio/api/inscripcion",
      dataForm
    );

    if (respuesta.status === 200) {
      if (respuesta.data.status === "Ok") {
        setNombreCompleto("");
        // setGenero("");
        setFechaInscripcion("");
        setFechaNacimiento("");
        setEdad("");
        setCedula("");
        setProfesion("");
        // setTalla("");
        setTelefono("");
        setEmail("");
        setDireccion("");
        e.target.reset();
        setActiveSpinner(false);
        // handleClose();
        Toast.fire({
          icon: "success",
          title: "Su registro ha sido realizado exitosamente",
        });
        window.location.replace("https://www.meet2go.com/ev/chismoruta5k/");
        /* Swal.fire({
          title: "¡Gracias por confiar en nosotros!",
          text: "Pronto nos pondremos en contacto con usted.",
          showCloseButton: true,
          icon: "success",
        }); */
      } else {
        setActiveSpinner(false);
        Toast.fire({
          icon: "error",
          title: "Error al enviar la información",
        });
        /* Swal.fire({
          title: "Error al enviar la información",
          text: "Intente en unos minutos...",
          showCloseButton: true,
          icon: "error",
        }); */
      }
    } else {
      setActiveSpinner(false);
      Toast.fire({
        icon: "error",
        title: "Error al enviar la información",
      });
      /* Swal.fire({
        title: "Error al enviar informacion",
        text: "Intente en unos minutos...",
        showCloseButton: true,
        icon: "error",
      }); */
    }
  };

  return (
    <>
      <Container>
        <Row
          className="mb-4 mb-md-5 pb-2 pb-md-4 d-flex justify-content-center"
          id="formulario"
        >
          <Col md={6} className="bg-purple order-2 order-md-1">
            <Row>
              <Col md={12}>
                <h2 className="titulo-carrera-md text-center mb-3">
                  Inscripción
                </h2>
              </Col>
            </Row>
            <Form
              className="contacto-form"
              id="contacto"
              onSubmit={handleSubmit}
            >
              <Row>
                <Col md={6} className="mt-3">
                  <FloatingLabel label="Nombre completo">
                    <Form.Control
                      type="text"
                      placeholder="Nombre completo"
                      required
                      onChange={(e) => setNombreCompleto(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={6} className="mt-3">
                  <FloatingLabel label="Género">
                    <Form.Select
                      required
                      value={genero}
                      onChange={handleChange}
                    >
                      <option value="">- Seleccione -</option>
                      <option value="femenino">Femenino</option>
                      <option value="masculino">Masculino</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>

                <Col md={6} className="mt-3">
                  <FloatingLabel label="Fecha de inscripción">
                    <Form.Control
                      type="date"
                      placeholder="Fecha de inscripción"
                      required
                      onChange={(e) => setFechaInscripcion(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={6} className="mt-3">
                  <FloatingLabel label="Fecha de nacimiento">
                    <Form.Control
                      type="date"
                      placeholder="Fecha de nacimiento"
                      required
                      onChange={(e) => setFechaNacimiento(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={6} className="mt-3">
                  <FloatingLabel label="Edad">
                    <Form.Control
                      type="edad"
                      placeholder="Edad"
                      required
                      onChange={(e) => setEdad(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={6} className="mt-3">
                  <FloatingLabel label="Cédula">
                    <Form.Control
                      type="text"
                      placeholder="Cédula"
                      required
                      onChange={(e) => setCedula(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={6} className="mt-3">
                  <FloatingLabel label="Profesión">
                    <Form.Control
                      type="text"
                      placeholder="Profesión"
                      required
                      onChange={(e) => setProfesion(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={6} className="mt-3">
                  <FloatingLabel label="Talla">
                    <Form.Select
                      required
                      value={talla}
                      onChange={handleChange2}
                    >
                      <option value="">- Seleccione -</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>

                <Col md={6} className="mt-3">
                  <FloatingLabel label="Teléfono">
                    <Form.Control
                      type="text"
                      placeholder="Teléfono"
                      required
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={6} className="mt-3">
                  <FloatingLabel label="Email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12} className="mt-3">
                  <FloatingLabel label="Dirección">
                    <Form.Control
                      type="text"
                      placeholder="Dirección"
                      required
                      onChange={(e) => setDireccion(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12}>
                  {activeSpinner ? (
                    <Spinner className="mt-4" />
                  ) : (
                    <Button
                      type="submit"
                      variant="danger"
                      className="btn-enviar rounded-0 px-4 mt-4 w-100"
                    >
                      Enviar
                    </Button>
                  )}
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Formulario;
