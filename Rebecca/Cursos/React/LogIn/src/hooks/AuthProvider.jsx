import { useContext, createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(); //almacenar y proporcionar datos

const AuthProvider = ({ children }) => {
  //actúa como proveedor del contexto de autenticación
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("site") || ""
  ); /*administra el estado de autenticación del usuario, 
  proporcionando funcionalidades como inicio de sesión, cierre de sesión y almacenamiento de tokens*/
  const loginAction = async (data) => {
    /*función maneja el inicio de sesión del usuario enviando una solicitud POST a un punto final de autenticación, 
    actualizando el estado del usuario y del token tras una respuesta exitosa y almacenando el token en el almacenamiento local . */
    try {
      const response = await fetch(
        "https://gestion.campana.gov.ar/api/Auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      //console.log(response.status > 400);
      const res = await response.json();
      if (response.status >= 400) {
        toast.error(res.message);
      }
      console.log(res);
      if (response.status >= 200 && response.status < 400) {
        //La acción se realiza solo cuando la respuesta es "correcta"
        setUser(res.admin);
        setToken(res.token);
        // console.log(res.data)
        localStorage.setItem("site", res.token);
        navigate("/dashboard");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    //borra los datos del usuario y del token, y elimina el token del almacenamiento local
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
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
