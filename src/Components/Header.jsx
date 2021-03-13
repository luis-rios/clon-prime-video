import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import '../Styles/Header.css'
export default function Header(){
    return (
        <div className="Header-Container">
            <div className="Logo">
                
            </div>
            <div className="Menu">
                <ul>
                    <li> <a href="#" className="item"> Inicio     </a>  </li>
                    <li> <a href="#" className="item"> Tienda     </a>  </li>
                    <li> <a href="#" className="item"> Canales    </a>  </li>
                    <li> <a href="#" className="item"> Categorias
                       {/*  <ul>
                            <li>Series</li>
                            <li>Peliculas</li>
                            <li>Infantil</li>
                            <li>Se incluye con prime</li>
                            <li>Disponible para descargar</li>
                        </ul> */}
                        </a>
                    </li>
                    <li> <a href="#" className="item"> Mi espacio </a></li>
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