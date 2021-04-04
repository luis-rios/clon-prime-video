import Details from '../Components/Detail';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Detail(){
    const[pelicula,setPelicula] = useState([])

    const getDataMovie  = async ()=>{
        try{
            const res = await axios.get(`http://127.0.0.1:8000/peliculas/Pelicula/3/`)
            const movie = await res.data
            setPelicula(movie)
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getDataMovie()
    },[])
    return (
        <div>
            <Header/>
            <Details
                image = {pelicula.img}
                title = {pelicula.name}
                description = {pelicula.description}
                direction = {pelicula.direction}
                cast = {pelicula.distribution}
                genres = {pelicula.category}
                subtitles = {pelicula.subtitles}
                audioLanguages = {pelicula.language}
                duration = {pelicula.duration}
                clasification = {pelicula.classification}
                link = {pelicula.link}
            />
            <Footer/>
        </div>
    )
}