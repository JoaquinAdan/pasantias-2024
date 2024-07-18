import React from "react"
import "./HomePage.css"
import VolquetesForm from "../components/Form"

function HomePage(){
    return(
        <div className="background">
            <div className="containerForm">
                <VolquetesForm/>
            </div>
        </div>
    )
}

export default HomePage