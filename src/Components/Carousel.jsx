import React from 'react';
import '../Styles/Carousel.css';
import Anillo from '../Img/anillo.jpg'
import Piratas from '../Img/piratas.jpg'
import harry from '../Img/harry.jpg';


import Carousel from 'react-bootstrap/Carousel';

export default function Carrucel() {

    return(
        <div className="carousel">

<Carousel>
  <Carousel.Item className="contenedor">
    
    <div className="señor_de_los_anillos" style={{backgroundImage:`url(${Anillo})`}}>
     
    
    
    <Carousel.Caption>
      

      <h3>El señor de los anillos</h3>
      
      <p>Los Anillos de Poder fueron forjados en antiguos tiempos por los herreros Elfos, y Sauron, el Señor Oscuro, forjó el Anillo Único. Pero en una ocasión se lo quitaron, y aunque lo buscó por toda la Tierra Media nunca pudo encontrarlo. Al cabo de muchos años fue a caer casualmente en manos del hobbit Bilbo Bolsón. Sauron llegó a reunir todos los Grandes Anillos, pero continuaba buscando el Anillo Único que completaría el dominio de Mordor. Bilbo desapareció durante la celebración de su centesimodecimoprimer cumpleaños, y dejó a Frodo a cargo del Anillo, y con una peligrosa misión por delante: atravesar la Tierra Media, internarse en las sombras del País Oscuro y destruir el Anillo arrojándolo en las Grietas del Destino..</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item className="contenedor">
    <div className="piratas" style={{backgroundImage:`url(${Piratas})`}}>
    <Carousel.Caption>
      <h3>Piratas del Caribe, Navegando por aguas Misteriosas </h3>
      <p>El capitán Jack Sparrow encuentra a una mujer de su pasado, quien lo obliga a subir al Barba Negra para emprender un viaje en busca de la legendaria Fuente de la Juventud..</p>
    </Carousel.Caption>
    </div> 
  </Carousel.Item>
  <Carousel.Item className="contenedor">

    <div className="harry" style={{backgroundImage:`(${harry})`}}>
      <Carousel.Caption >

      <h3>Harry Potter y el pricionero de Azkaban</h3>
      <p>Harry, Ron y Hermione se marchan de Hogwarts para iniciar su misión más importante: tienen que destruir los horrocruxes, el secreto del poder y la inmortalidad de Voldemort, en los que el temido mago oscuro guarda los fragmentos de su alma..</p>

      </Carousel.Caption>
    </div>
  </Carousel.Item>
</Carousel>

        </div>
    )

}

    
  
   