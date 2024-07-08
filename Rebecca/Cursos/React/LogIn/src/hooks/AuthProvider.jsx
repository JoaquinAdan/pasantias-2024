import { useContext, createContext, useState } from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext(); //almacenar y proporcionar datos

const AuthProvider = ({ children }) => { //actúa como proveedor del contexto de autenticación   
  const[user, setUser] = useState(null);
  const[token, setToken] = useState(localStorage.getItem("site")|| "");  /*administra el estado de autenticación del usuario, 
  proporcionando funcionalidades como inicio de sesión, cierre de sesión y almacenamiento de tokens*/
  const loginAction = async (data) => { /*unción maneja el inicio de sesión del usuario enviando una solicitud POST a un punto final de autenticación, 
    actualizando el estado del usuario y del token tras una respuesta exitosa y almacenando el token en el almacenamiento local . */
    try {
      const response = await fetch("https://randomuser.me/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.data) {
        setUser(res.data.user);
        setToken(res.token);
        localStorage.setItem("site", res.token);
        navigate("/dashboard");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => { //borra los datos del usuario y del token, y elimina el token del almacenamiento local
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};