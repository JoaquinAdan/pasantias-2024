import './styles/formStyle.css'
import { navigate } from '../src/Link'
import { useState } from 'react'

export function Form(){

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[auth,setAuth] = useState(null)

    const URL = 'http://testiis01.campana.gov.ar/Municipalidad.Campana.Api/api/auth/login'

    const sendData = {
      'email':email,
      'password':password
    }

    const handlerName = (event) => {
      setEmail(event.target.value)
    }

    const handlerPassword = (event) => {
      setPassword(event.target.value)
    }

    function handlerAuth(event){
      event.preventDefault()
      fetch(URL,{
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(sendData)
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.token){
            setAuth(`El usuario está validado, su token es ${data.token}`)
            navigate('/home')
          } else {
            setAuth('El usuario no está registrado')
          }
        })
        .catch((error) => {
          console.error("Error al realizar la petición POST durante el fetch",error)
          setAuth('El usuario no puede ser validado')
        })
    }
    

    return(
        <div className="fullContainer">

        <div className="formContainer">
          <form className='form' onSubmit={handlerAuth}>

            <div className="titleContainer">
              <h1>Login</h1>
            </div>

            <div className="inputsContainer">

              <div className="username">
                    <label htmlFor="name">USERNAME
                      <input type="text" name="username" id="name" value={email} onChange={handlerName}/>
                    </label>
              </div>

              <div className="password">
                    <label htmlFor="pass">PASSWORD
                      <input type="password" name="password" id="pass" value={password} onChange={handlerPassword}/>
                    </label>
                    <i className='bx bx-show-alt' id="eye"></i>
              </div>      
          
            </div>

            <div className="bottomContainer">
                    <button id="btn">SIGN UP</button>
                    <a href="">Dont have an account?</a>
                    <p id="frase"></p>
            </div>

          </form>
          {
            auth && <p>{auth}</p>
          }
        </div>

        <div className="phoneContainer">
          <img src="lock.V3.png" alt="lock"/>
        </div>
      </div>
    )
}