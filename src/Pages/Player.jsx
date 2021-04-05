import React from 'react';
import YouTube from 'react-youtube';
import Header from '../Components/Header';
import Fotter from '../Components/Footer';
import '../Styles/Home.css';
export default class Player extends React.Component {
    render(){
        const opts = {
            height: '480',
            width: '720',
            playerVars: {
                autoplay: 1
            }
        }
        return (
            <div>
                <Header/>
                <YouTube 
                    videoId="https://www.youtube.com/watch?v=CduA0TULnow&list=RDCduA0TULnow&start_radio=1"
                    opts={opts} 
                    onReady={this._onReady}/>
                <Fotter/>
            </div>
        )

    }
    _onReady(event) {        
        event.target.pauseVideo();
      }
}