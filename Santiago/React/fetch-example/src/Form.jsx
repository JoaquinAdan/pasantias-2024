import './Form.css'
import { useState } from 'react'

export function Form(){

    //Defino las variables de estado, la URL de la api a utilizar y la data a enviar para corroborar la validación.

    const URL = 'https://reqres.in/api/login' //Envío nombre y contraseña, si existe perfil me devuelve un token, sino devuelve undefined.

    const [email,setEmail] = useState(''); //tengo email predeterminado como ''.
    const [password,setPassword] = useState('');//tengo contraseña predeterminada como ''.
    const [result,setResult] = useState(null);// tengo un resultado que se inicializa como null, ya que no se realiza la operación con la carga del componente.
    
    const sendData = {
        'email': email,
        'password':password
    }
    //Establezco un handle para cada una de los setters.
    
    const handleEmail = (event) => {
        setEmail(event.target.value) //Con event.target hago referencia al input relacionado con el email, con .value obtengo su valor
    }
    
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    
    //En el handle del result tengo quew realizar el fetch, puesto que este mismo devuelve el resultado.
    function handleResult(event){
        event.preventDefault() //con preventDefault estblezco que no se mantengan el estado de los componentes cuando re realiza la operación.
        fetch(URL,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            // body: JSON.stringify({email: email, password: password}),
            body: JSON.stringify(sendData)
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.token){
                    setResult(`El usuario está validado, su token es: token ${data.token}`)
                } else {
                    setResult('El usuario no está validado')
                }
            })
            .catch((error) => {
                console.error("Error en el Fecth al hacer la petición POST",error)
                setResult('El usuario no puede ser validado')
            })
    }  





    return(
        <div>
            <form className="form" onSubmit={handleResult}> {/*al presionar el último botón del form se ejecuta el onSubmit*/}
                <div className="title">
                    <h1>Ejemplo de Fetch</h1>
                </div>

                <div className="inputsContainer">
                    <div className="inputName">
                        <label htmlFor="email">Nombre
                            <input type="text" name="email" onChange={handleEmail} value={email} placeholder='example@xmail.com'/>
                        </label>
                    </div>
                    <div className="inputPassword">
                        <label htmlFor="pass">Contraseña
                            <input type="password" name="pass" onChange={handlePassword} value={password} placeholder='password'/>
                        {/* Cuando se escribe el input se llama a setPassword al cual se le pasa el valor actual del input */}
                        </label>
                    </div>
                </div>

                <button type="submit">Enviar datos</button>
            </form>
            {/* result contiene el estaod actual del envío, si es true se muestra el renderizado condicional */}
            { 
                result && <p>{result}</p>
            }
        </div>

    )
}