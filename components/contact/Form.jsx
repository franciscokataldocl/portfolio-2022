
import styled from 'styled-components';
import React, { useState } from "react";

const Form = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [telefono, setTelefono] = useState("");
    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("ENVIAR");

    //   Form validation state
    const [errors, setErrors] = useState({});

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
      let tempErrors = {};
      let isValid = true;

      if (nombre.length <= 0) {
        tempErrors["nombre"] = true;
        isValid = false;
      }
      if (email.length <= 0) {
        tempErrors["email"] = true;
        isValid = false;
      }
        if (telefono.length <= 0) {
          tempErrors["telefono"] = true;
          isValid = false;
        }

      if (mensaje.length <= 0) {
        tempErrors["mensaje"] = true;
        isValid = false;
      }

      setErrors({ ...tempErrors });
      console.log("errors", errors);
      return isValid;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      let isValidForm = handleValidation();

      if (isValidForm) {
        setButtonText("ENVIANDO");
        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: email,
            nombre: nombre,
            telefono: telefono,
            mensaje: mensaje,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const { error } = await res.json();
        if (error) {
          console.log(error);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setButtonText("ENVIAR");
          // Reset form fields
          setNombre("");
            setEmail("");
            setTelefono("");
          setMensaje("");
          return;
        }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setNombre("");
        setEmail("");
        setTelefono("");
        setMensaje("");
        setButtonText("ENVIAR");
        setShowSuccessMessage(false);
      }
      console.log(nombre, email, mensaje, telefono);
    };
  return (
    <FormContainer>
      <FormBox onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            placeholder="Ej: francisco kataldo"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          {errors?.nombre && (
            <p className="error">El nombre no puede estar vacío</p>
          )}
        </InputGroup>
        <InputGroup>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Ej: hola@kataldo.cl"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors?.email && <p className="error">Email no puede estar vacío</p>}
        </InputGroup>
        <InputGroup>
          <label htmlFor="">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={telefono}
            placeholder="Ej: 920210860"
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
          />
          {errors?.telefono && (
            <p className="error">Teléfono no puede estar vacío</p>
          )}
        </InputGroup>
        {/* <InputGroup>
          <label htmlFor="">¿Qué necesitas?</label>
          <select name="">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </InputGroup> */}
        {/* <InputGroup>
          <label htmlFor="">Tiempo estimado desarrollo</label>
          <select name="">
            <option value="volvo">10 a 15 días</option>
            <option value="saab">15 a 30 días</option>
            <option value="mercedes">1 a 2 meses</option>
            <option value="audi">3 a 4 meses</option>
            <option value="audi">4 a 6 meses</option>
            <option value="audi">Indefinido</option>
          </select>
        </InputGroup> */}
        {/* <InputGroup>
          <label htmlFor="">Presupuesto estimado</label>
          <select name="">
            <option value="volvo">Menos de 200.000 clp</option>
            <option value="saab">Menos de 350.000 clp</option>
            <option value="mercedes">Menos de 500.000 clp</option>
            <option value="audi">Menos de 800.000 clp</option>
            <option value="audi">Menos de 1.000.000 clp</option>
            <option value="audi">Menos de 2.000.000 clp</option>
          </select>
        </InputGroup> */}
        <InputGroup>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            name="mensaje"
            type="text"
            placeholder="Mensaje"
            value={mensaje}
            onChange={(e) => {
              setMensaje(e.target.value);
            }}
          ></textarea>
          {errors?.mensaje && (
            <p className="error">Mensaje no puede estar vacío</p>
          )}
        </InputGroup>
        <InputGroup>
          <button className="btn btn-send" type="submit">
            {buttonText}
          </button>
          {showSuccessMessage && (
            <p className="success-msg">
              <strong>{nombre}</strong>, tu mensaje fue enviado correctamente
            </p>
          )}
        </InputGroup>
      </FormBox>
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.div`

  width: 100%;
`;
const FormBox = styled.form`
background:white;
width:100%;
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;
`

const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width:100%;
  max-width:350px;
  margin-bottom:15px;
  & input {
    width: 100%;
    padding: 10px 40px;
    border-radius: 5px;
    text-align: center;
    border: var(--grey) solid 1px;
    font-size: 1.1rem;

  }
  & select {
    width: 100%;
    padding: 10px 40px;
    border-radius: 5px;
    text-align: center;
    border: var(--grey) solid 1px;
    font-size: 1.1rem;
    color:var(--grey);
  }
  & textarea{
    width:100%;
    height:100px;
    border-radius:5px;
  }
`;