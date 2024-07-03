import React from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./LoginForm.css";

function LoginForm() {
  const [inputType, setInputType] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  console.log(formData);

  const handleSubmitEvent = (e) => {
    //se activa cuando el formulario se envía
    e.preventDefault(); //evita que el formulario se envíe de forma automática cuando se presiona el botón de enviar
    if (input.username !== "" && input.password !== "") {
      auth.loginAction(input);//Validación de datos
      //acciones para procesar los datos
    }
    alert("please provide a valid input"); //alerta de datos invalidos
  };

  const handleInput = (e) => {
    // manejar los cambios en los campos del formulario
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmitEvent} action="#" method="post" className="">
      <div className="form-grid">
        <div className="input-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInput}
            placeholder="Email"
            required={true}
          />
        </div>
        <div className="input-field">
          <label>Contraseña</label>
          <div className="password-container">
            <input
              type={inputType ? "text" : "password"}
              className="input-toggle"
              name="password"
              id="Password1"
              placeholder="Contraseña"
              onChange={handleInput}
              required={true}
            />
            <button onClick={() => setInputType(!inputType)}>
              {!inputType ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-style">
        Ingresar
      </button>
    </form>
  );
}

export default LoginForm;
