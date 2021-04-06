import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link}    from 'react-router-dom';
import { 
    faCommentAlt, 
    faDownload, 
    faDrumstickBite, 
    faPenSquare, 
    faPlay, 
    faPlus, 
    faQuestionCircle, 
    faShareAltSquare 
    } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Detail.css';
export default class Detail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {
            image,
            title,
            description,
            direction,
            cast,
            genres,
            subtitles,
            audioLanguages,
            duration,
            clasification,
            id,
            
        }=this.props
        return (
            <div className="Detail-container" style={{backgroundImage:`url(${image})`}}>
                
                    <h1>{title}</h1>
                    <p>
                        IMDb 8,1 {duration} min 
                        <span>X-RAY</span> 
                        <span> AD)))</span> 
                        <span>{clasification}</span>
                        <span><FontAwesomeIcon icon={faCommentAlt}/></span> 
                    </p>
                    <p >{description}</p>
                    <div className="chat">
                        <Link to={`/Player/${id}`}><button> <FontAwesomeIcon icon ={faPlay}/> Reproducir</button></Link>                        
                        <FontAwesomeIcon icon={faPlus}/>
                        <FontAwesomeIcon icon={faDrumstickBite}/>
                        <FontAwesomeIcon icon={faDownload}/>
                    </div>
                    <div className="info">
                        <ul>
                            <li>Dirección:</li>
                            <li>Reparto:</li>
                            <li>Géneros:</li>
                            <li>Subtitulos:</li>
                            <li>Idiomas:</li>
                        </ul>   
                        <ul>
                            <li> <h5>{direction}</h5>  </li>
                            <li> <h5>{cast} </h5> </li>
                            <li> <h5>{genres} </h5> </li>
                            <li> <h5>{subtitles} </h5> </li>
                            <li><h5> {audioLanguages}</h5>  </li>    
                        </ul>                     
                    </div>
                   
                
                <div className="Descripcion">
                    <div className="Terminos">
                        Al hacer clic en reproducir, aceptas nuestros <a href="#">Términos de uso</a>
                    </div>
                    <div className="Opciones">
                        <FontAwesomeIcon  
                            className="item"                       
                            icon={faShareAltSquare} />                    
                            Compartir 
                        <FontAwesomeIcon 
                            className="item" 
                            icon={faPenSquare}/> 
                            Comentarios 
                        <FontAwesomeIcon 
                            className="item" 
                            icon={faQuestionCircle}/>
                            Obtener ayuda
                    </div>
                </div>                
            </div>
        )
    }
}