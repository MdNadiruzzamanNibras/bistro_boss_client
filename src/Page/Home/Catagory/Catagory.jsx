import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/images/home/slide1.jpg"
import slide2 from "../../../assets/images/home/slide2.jpg"
import slide3 from "../../../assets/images/home/slide3.jpg"
import slide4 from "../../../assets/images/home/slide4.jpg"
import slide5 from "../../../assets/images/home/slide5.jpg"
import SectionTilte from '../../../Componets/sectionTitle/SectionTilte';
const Catagory = () => {
    return (
      <section>
        <SectionTilte
          subheading={"---From 11:00am to 10:00pm---"}
          heading={"ORDER ONLINE"}
        >

        </SectionTilte>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
      >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h4 className='text-4xl text-white pb-8 -mt-16 text-center uppercase'>Salads</h4>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
                <h4 className='text-4xl text-white pb-8 -mt-16 text-center uppercase'>Soups</h4></SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h4 className='text-4xl text-white pb-8 -mt-16 text-center uppercase'>pizzas</h4>
        </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h4 className='text-4xl text-white pb-8 -mt-16 text-center uppercase'>desserts</h4>
        </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <h4 className='text-4xl text-white pb-8 -mt-16 text-center uppercase'>Salads</h4>
        </SwiperSlide>
        
      </Swiper>
        </section>
    );
};

export default Catagory;