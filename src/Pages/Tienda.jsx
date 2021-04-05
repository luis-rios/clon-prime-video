import React ,{ useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import axios from 'axios';
import '../Styles/Home.css';

export default function Tienda(){
    const[moviePay,setMoviePay] = useState([])
    const getMoviePay = async ()=>{
        const response = await axios.get("http://127.0.0.1:8000/peliculas/Pelicula/")
        const movie = await response.data
        setMoviePay(movie)
    }
    useEffect(()=>{
        getMoviePay()
    },[])
    return (
        <div className="Tienda-container">
            <Header/>
            <section className="card-tienda">            
                {
                    moviePay.map((item)=>(
                        <Card className="card-component"
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
                        />
                    ))
                }
            </section>
            <Footer/>
        </div>
    )
}