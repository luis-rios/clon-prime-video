import React from 'react';
import Logo from '../Img/flecha.jpg';
import '../Styles/Footer.css';
export default function Footer(){
    return (
        <div className="Footer-container">
            <img 
                src={Logo} 
                alt="logo-prime-video"
                style={{width:"200px"}}
            />
            <div className="Enlaces">
                <p><a href="#"> Términos y Aviso de privacidad </a></p>
                <p><a href="#"> Envianos tus comentarios</a></p>
                <p><a href="#"> Ayuda</a></p>
                <p>©2020-2021, ing.luisrios@gmail.com Inc. o sus filiales</p>
            </div>
        </div>
    )
}