import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import '../Styles/Header.css'
export default function Header(){
    return (
        <div className="Header-Container">
               <Link to="/">
                    <div className="Logo">
                        
                    </div>
               </Link>
            <div className="Menu">
                <ul>
                    <li> <Link to="/" className="item"> Inicio</Link></li>
                    <li> <Link to="/Tienda" className="item"> Tienda  </Link></li>
                    <li> <Link to="/Canales" className="item"> Canales</Link></li>
                    <li> <Link to="/" className="item"> Categoria </Link>                    
                        {/*  <ul>
                            <li>Series</li>
                            <li>Peliculas</li>
                            <li>Infantil</li>
                            <li>Se incluye con prime</li>
                            <li>Disponible para descargar</li>
                        </ul> */}
                    </li>                                
                    <li><Link to="/MiEspacio" className="item"> Mi espacio</Link></li>
                </ul>
            </div>
            <div className="Busqueda">
                <div className="Search-container">
                    <FontAwesomeIcon className="btn"icon={faSearch}/>
                    <input type="text" placeholder="Buscar"/>                    
                    <img 
                        src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" 
                        alt="avatar-amazon" 
                        className="icono-avatar"/>                                            
                    <p>Luis</p>
                </div>                               
            </div>
            
           
        </div>
    )
}