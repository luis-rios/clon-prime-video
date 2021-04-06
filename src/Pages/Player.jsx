import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import Header from '../Components/Header';
import Fotter from '../Components/Footer';
import axios from 'axios';
import {useParams} from 'react-router-dom';

import '../Styles/Home.css';

export default function Player ()  {
        const{id} = useParams()
        const[video,setVideo] = useState([])
        const opts = {
            height: '480',
            width: '720',
            playerVars: {
                autoplay: 1
            }
        }
        const getVideo = async()=>{
            const response = await axios.get(`http://127.0.0.1:8000/peliculas/Pelicula/${id}`)
            const videoplay =  await response.data
            setVideo(videoplay)
        }
        useEffect(()=>{
            getVideo()
        },[])
        const _onReady=(e)=> {        
            e.target.pauseVideo();
          }
        return (
            <div >
                <Header/>
                <YouTube 
                    className="player"
                    /* videoId="https://www.youtube.com/watch?v=CduA0TULnow&list=RDCduA0TULnow&start_radio=1"  */                   
                     videoId={video.link}
                    
                    opts={opts} 
                    onReady={_onReady}/>
                <Fotter/>
            </div>
        )

    }
