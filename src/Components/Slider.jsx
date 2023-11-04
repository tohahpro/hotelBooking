
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import banner from '../assets/images/banner.jpg'

const Slider = () => {
    return (
        <div className='mx-56 py-20'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                autoplay={true}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div>
                        <img src={banner} alt="" />
                        <div>
                            sfsjfj
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;