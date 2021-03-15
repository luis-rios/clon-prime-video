import Header from '../Components/Header';
import Carousel from '../Components/Carousel';
import CarouselSeries from '../Components/Carouselpys';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
export default function Home(){
    return(
        <div>
            <Header/>
            <Carousel/>
            {/* <CarouselSeries/> */}
            <Card/>
            <Footer/>
        </div>
    )
}