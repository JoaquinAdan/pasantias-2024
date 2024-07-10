import '../src/styles/formStyle.css'
import logo from '../src/images/lock.V3.png'

import { useState } from 'react'
import { Unauthorized } from './Unauthorized'
import { useNavigate } from 'react-router-dom'
import { authLogin } from './AuthLogin'

export function Form(){

    const navigate = useNavigate()
    const[iconEnabled,setEnabled] = useState(true)

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[auth,setAuth] = useState(null)

    const URL = 'http://testiis01.campana.gov.ar/Municipalidad.Campana.Api/api/auth/login'

    const sendData = {
      'email':email,
      'password':password
    }

    const handlerName = (event) => {setEmail(event.target.value)}
    const handlerPassword = (event) => {setPassword(event.target.value)}

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
            authLogin(data.token)
            navigate('/home')
          } else {
            setAuth(`${data.message}`)
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
                      <input type={iconEnabled ? "password" : "text"} name="password" id="pass" value={password} onChange={handlerPassword}/>
                    </label>
                    <i className={iconEnabled ? 'bx bx-show-alt' : 'bx bx-hide'} id="eye" onClick={()=>setEnabled(!iconEnabled)}></i>
              </div>      
          
            </div>

            <div className="bottomContainer">
                    <button id="btn">SIGN UP</button>
                    <a href="">Dont have an account?</a>
                    <p id="frase"></p>
            </div>

            {
            auth && <Unauthorized result={auth}></Unauthorized>
            }

          </form>
      
        </div>

        <div className="phoneContainer">
          <img src={logo} alt="locked"/>
        </div>
      </div>
    )
}