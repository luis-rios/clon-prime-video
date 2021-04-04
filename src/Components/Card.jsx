import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBan, faClosedCaptioning, faPlayCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Card.css';


export default class Card extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {
            name,
            img,
            description,
            duration,
            classification
         } = this.props
        return (
            <div className="Card-container">
                
                <div 
                    className="Img-card" 
                    style={{backgroundImage:`url(${img})`}}>                
                    <h6 className="Prime-label">Clon</h6>
                </div>
                <div className="Info-card">
                    <FontAwesomeIcon  className="item" icon={faPlayCircle}/>
                    <p>Reproducir</p>
                    <FontAwesomeIcon  className="item" icon={faPlus}/>
                    <FontAwesomeIcon  className="item" icon={faBan}/>
                    <div className="texto">

                        <h5>Se incluye con Clon</h5>
                        <h3>{name}</h3>
                        {/* <h3>{season}</h3> */}
                        <h4>{description} </h4>                                                
                        <p>{duration}
                        <FontAwesomeIcon icon={faClosedCaptioning}/>
                        <h1> {classification}</h1>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}