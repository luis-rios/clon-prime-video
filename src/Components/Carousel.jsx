import React from 'react';
import '../Styles/Carousel.css';
import Mujeres from '../Img/01.jpg'
import Pareja from '../Img/02.jpg'
import Escandalo from '../Img/03.jpg';
import Magia from '../Img/05.jpg';

import Carousel from 'react-bootstrap/Carousel';

export default function Carrucel() {

    return(
        <div className="carousel">

<Carousel>
  <Carousel.Item className="contenedor">
    
    <div className="peliculas" style={{backgroundImage:`url(${Mujeres})`}}>
     
    <Carousel.Caption>
    
    </Carousel.Caption>
    </div>
 
  </Carousel.Item>
  <Carousel.Item className="contenedor">
    <div className="peliculas" style={{backgroundImage:`url(${Pareja})`}}>
    <Carousel.Caption>
     
    </Carousel.Caption>
    </div> 
  </Carousel.Item>
  <Carousel.Item className="contenedor">

    <div className="peliculas" style={{backgroundImage:`url(${Escandalo})`}}>
      <Carousel.Caption >


      </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item className="contenedor">

    <div className="peliculas" style={{backgroundImage:`url(${Magia})`}}>
      
        <h2>Sin origen</h2>

        <p> IMDb4,7 !hr 33min 2020</p>

        <h4>Pedro del Toro es un padre de familia quien vela por suseguridad .Pero quien lo visita no es quien lo esperaba .<br/>Una niña pondra a prueba su arsenal de seguridad, y un 
        <br/> grupo de choque buscara a como de lugar apoderarse de la niña, por el secreto que ella guarda.</h4>




      
    </div>
  </Carousel.Item>


</Carousel>

        </div>
    )

}

    
  
   