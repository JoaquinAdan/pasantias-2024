import React from "react";
import { useState } from 'react'
import "./LoginForm.css";


function LoginForm() {
  return (
    <form action="#" method="post" className="">
      <div className="form-grid">
        <div className="input-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required=""
          />
        </div>
        <div className="input-field">
          <label>Contraseña</label>
          <div className="password-container">
            <input
              type="password"
              className="input-toggle"
              name="Password1"
              id="Password1"
              placeholder="Contraseña"
              required=""
            />
            <button type="button" className="button-toggle">
              <span className="show-icon" id="togglePassword">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
              <span className="hide-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <label className="check-remaind">
        <input id="checkbox" type="checkbox" />
        <span className="checkmark"></span>
        <p className="remember">Recordarme</p>
      </label>
      <button type="submit" className="btn btn-primary btn-style">
        Ingresar
      </button>
    </form>
  );
}


export default LoginForm;
