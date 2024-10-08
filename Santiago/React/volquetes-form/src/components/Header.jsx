import logo from '../images/logo.png'
import camionVolquete from '../images/camion-volquete.png'

import { useState, useEffect } from 'react'

export default function Header(){

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => { window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false) }
        window.addEventListener("scroll", handleScroll)
        return () => { window.removeEventListener("scroll", handleScroll) }
    }, [])


    return(
        <header className={`hidden lg:flex justify-between w-screen sticky top-0 p-5 drop-shadow-sm transition-colors duration-300 ${isScrolled ? " backdrop-blur-md" : "bg-slate-100"}`} style={{ zIndex: 9999 }}>
                <img src={logo} alt="logo" className="w-36" />
                <nav className={`space-x-9 flex items-center transition-colors duration-300 ${isScrolled ? "text-slate-50 drop-shadow-2xl" : "text-black"}`}>
                    <a href="#fecha_entrega">Fecha de entrega</a>
                    <a href="#calle">Calle</a>
                    <a href="#localizacion">Localización</a>
                    <a href="#datos_chofer">Datos del Chofer</a>
                    <a href="#logistica">Logística</a>
                    <a href="#datos-solicitante">Datos del Solicitante</a>
                </nav>
                <img src={camionVolquete} alt="volquete" className="w-16" />
            </header>
    )
}