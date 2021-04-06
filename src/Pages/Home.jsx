import React from 'react';
import Header from '../Components/Header';
import Carousel from '../Components/Carousel';
import CarouselSeries from '../Components/Carouselpys';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Home.css';

export default function Home(){
    const [pelicula, setPelicula] = useState([])
    const obtenerPelicula = async ()=>{
        
            const response = await axios.get("http://127.0.0.1:8000/peliculas/Pelicula/")
            const movie = await response.data
            setPelicula(movie)
        
    }
    useEffect(()=>{
        obtenerPelicula()
    },[])
    return(
        <div className="Home-container">
            <Header/>
            <Carousel/>
            {/* <CarouselSeries/> */}
            <p> <span>Clon</span> Peliculas que te recomendamos </p>            
            <section className="card-tienda">
                {
                    pelicula.map(item =>(
                        <Card
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            category={item.category}
                            img={item.img}
                            duration={item.duration}
                            language={item.language}
                            subtitles={item.subtitles}
                            creationDate={item.creationDate}
                            classification={item.classification}
                            link={item.link}
                            direction={item.direction}
                            distribution={item.distribution}
                            categories={item.categories}
                            id={item.id}
                        />            

                    ))
                }
            </section>
            <p> <span>Clon</span> Las series más vistas en Clon Video </p>
            <p> <span>Clon</span> Películas añadidas recientemente </p>
            <p> <span>Clon</span> Series que pensamos que te gustarán </p>
            <p> <span>Clon</span> Películas infantiles y familiares </p>
            <Footer/>
        </div>
    )
}