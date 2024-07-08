import './App.css'
import { Form } from '../components/Form'
import { Home } from '../components/Home'
import { useState, useEffect } from 'react'

const NAVIGATION_EVENT = 'pushstate'

function App() {

  const[currentPath,setCurrentPath] = useState(window.location.pathname)

  //Solo se activa cuando se recarga el componente
  useEffect(()=>{

    //Guardo el evento en una constante para asegurarme que añado y remuevo dicho evento correctamente
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname) //Establezo la nueva URL como Current Path
    }

    // Esta función la ejecuto cada vez que se tenga un NAVIGATION_EVENT
    // Navegación cuando voy hacia adelante
    window.addEventListener(NAVIGATION_EVENT,onLocationChange)

    //Navegación cuando voy hacia atrás
    window.addEventListener('popstate',onLocationChange)
    // Remuevo el evento
    return () => {
      window.removeEventListener(NAVIGATION_EVENT,onLocationChange)
      window.removeEventListener('popstate',onLocationChange)
    }

  },[])

  return (
    <main>
      {currentPath === '/' && <Form/>}
      {currentPath === '/home' && <Home/>}
    </main>
  )
}

export default App
