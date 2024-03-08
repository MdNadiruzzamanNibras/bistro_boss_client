import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imag1 from '../../../assets/images/home/01.jpg'
import imag2 from '../../../assets/images/home/02.jpg'
import imag3 from '../../../assets/images/home/03.png'
import imag4 from '../../../assets/images/home/04.jpg'
import imag5 from '../../../assets/images/home/05.png'
import imag6 from '../../../assets/images/home/06.png'
const Banner = () => {
    return (
         <Carousel>
                <div>
                    <img src={imag1} />
                    
                </div>
                <div>
                    <img src={imag2} />
                    
                </div>
                <div>
                    <img src={imag3} />
                    
                </div>
                <div>
                    <img src={imag4} />
                    
                </div>
                <div>
                    <img src={imag5} />
                    
                </div>
                <div>
                    <img src={imag6} />
                    
                </div>
                
            </Carousel>
    );
};

export default Banner;