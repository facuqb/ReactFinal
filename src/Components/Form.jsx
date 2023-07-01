import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();
    if(name.length < 5){
      // setError('el nombre debe ser mayor a 5 caracteres')
      // return;
      setError('Ingrese únicamente letras y una cantidad mayor de 5 caracteres');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    } else if (name.length < 5 || !email.includes("@")) {
      setError("Revise su información");
      return;
    }

    setSuccessMessage(
      `Gracias ${name}, lo contactaremos en las proximas horas al mail ${email}`
    );
    setError('')
  };

  useEffect(()=>{
    if(successMessage){
      const msj = setTimeout(() => {
        setSuccessMessage('')

      }, 3000);
      return () => clearTimeout(msj)
    }
  },[successMessage])

  return (
    <form onSubmit={handleSubmit} className="form-estilo">
      <div className="campo">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ingrese su nombre"
        />
      </div>
      <div className="campo">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ingrese su email"
        />
      </div>
      <div className="campo">
        <button type="submit">Enviar</button>
      </div>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};

export default Form;
