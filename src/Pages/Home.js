import Header from '../Components/Header';
import Carousel from '../Components/Carousel';
export default function Home(){
    return(
        <div>
            <Header/>
            <Carousel/>
            <img 
                src="https://m.media-amazon.com/images/S/sonata-images-prod/CROW_MX_PARAMOUNTPLUS_Two_Weeks_to_Live/bd73c577-43de-4f01-85f3-6687d85f74d2._UR3000,600_SX1500_FMjpg_.jpg" 
                alt="Two weeks to live Temporada 1" 
                loading="eager">
            </img>
            <img 
            src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Bliss/b62ac153-7085-441c-874c-0c1316beb85a._UR3000,600_SX1500_FMjpg_.jpg" 
            alt="Dicha" 
            loading="eager"></img>
            <img src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_FBTCOG/819c0851-c473-45b9-8653-a53c994bc126._UR1280,600_SX1500_FMjpg_.jpg" alt="Animales Fantásticos: Los Crímenes De Grindelwald" loading="eager"></img>
            <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_SH_Bombshell/594bf600-f2f9-4900-88fd-bfc3d9df7d3f._UR3000,600_SX1500_FMjpg_.jpg" alt="El escándalo" loading="eager"></img>
        </div>
    )
}