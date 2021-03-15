import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/Card.css';
import {faBan, faClosedCaptioning, faPlayCircle, faPlus } from '@fortawesome/free-solid-svg-icons';


export default class Card extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="Card-container">
                <div 
                    className="Img-card" 
                    style={{backgroundImage:`url("https://images-na.ssl-images-amazon.com/images/S/pv-target-images/219dea0577b94808411d18c9c3a226b36c79edaf7862ca24e35859396605f97f._UR1920,1080_RI_UX667_UY375_.jpg?retry=0._SX356_FMjpg_")`}}>                
                    <h6 className="Prime-label">clon</h6>
                </div>
                <div className="Info-card">
                    <FontAwesomeIcon  className="item" icon={faPlayCircle}/>
                    <p>Reproducir</p>
                    <FontAwesomeIcon  className="item" icon={faPlus}/>
                    <FontAwesomeIcon  className="item" icon={faBan}/>
                    <div className="texto">
                        <h5>Se incluye con Clon</h5>
                        <h3>PRISON BREAK, EN BUSCA DE</h3>
                        <h3>LA VERDAD - Season 1</h3>
                        <h4>"La mayoria de los hombres harian </h4>
                        <h4>cual quier cosa por salir de la penitenciaria</h4>
                        <h4>Fox Riber pero Michael Scofield..."</h4>                                                                   
                        <p>2006 
                        <FontAwesomeIcon icon={faClosedCaptioning}/>
                        <h1> 16</h1>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}