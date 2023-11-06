import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import client1 from '../assets/images/Client-1.png'
import client2 from '../assets/images/client2.png'




const Slider = () => {



    return (


        <div className='py-20'>
            <h3 className='text-center text-3xl md:text-7xl font-bold my-10'>Client Feedback</h3>
            <div className='hidden md:flex my-20'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={3}
                    autoplay={true}
                    // navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className='p-10 h-full bg-white'>
                            <div className='flex justify-center'>
                                <img src={client1} alt="" />
                            </div>
                            <div className='py-5 px-3 space-y-4'>
                                <h2 className='text-center text-3xl font-medium'>Alice Johnson</h2>
                                <p className='text-center text-base font-medium'>My stay at your hotel was exceptional. The service, cleanliness, and comfort exceeded my expectations. I will be returning soon!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-10 h-full bg-white'>
                            <div className='flex justify-center'>
                                <img src={client1} alt="" />
                            </div>
                            <div className='py-5 px-3 space-y-4'>
                                <h2 className='text-center text-3xl font-medium'>Alice Johnson</h2>
                                <p className='text-center text-base font-medium'>My stay at your hotel was exceptional. The service, cleanliness, and comfort exceeded my expectations. I will be returning soon!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-10 h-full bg-white'>
                            <div className='flex justify-center'>
                                <img src={client2} alt="" />
                            </div>
                            <div className='py-5 px-3 space-y-4'>
                                <h2 className='text-center text-3xl font-medium'>Alice Johnson</h2>
                                <p className='text-center text-base font-medium'>My stay at your hotel was exceptional. The service, cleanliness, and comfort exceeded my expectations. I will be returning soon!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-10 h-full bg-white'>
                            <div className='flex justify-center'>
                                <img src={client2} alt="" />
                            </div>
                            <div className='py-5 px-3 space-y-4'>
                                <h2 className='text-center text-3xl font-medium'>Alice Johnson</h2>
                                <p className='text-center text-base font-medium'>My stay at your hotel was exceptional. The service, cleanliness, and comfort exceeded my expectations. I will be returning soon!</p>
                            </div>
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>


            <div className='md:hidden'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={2}
                    slidesPerView={1}
                    autoplay={true}
                    // navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className='p-10 h-full bg-white'>
                            <div className='flex justify-center'>
                                <img src={client1} alt="" />
                            </div>
                            <div className='py-5 px-3 space-y-4'>
                                <h2 className='text-center text-3xl font-medium'>Alice Johnson</h2>
                                <p className='text-center text-base font-medium'>My stay at your hotel was exceptional. The service, cleanliness, and comfort exceeded my expectations. I will be returning soon!</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='p-10 h-full bg-white'>
                            <div className='flex justify-center'>
                                <img src={client1} alt="" />
                            </div>
                            <div className='py-5 px-3 space-y-4'>
                                <h2 className='text-center text-3xl font-medium'>Alice Johnson</h2>
                                <p className='text-center text-base font-medium'>My stay at your hotel was exceptional. The service, cleanliness, and comfort exceeded my expectations. I will be returning soon!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-10 h-full bg-white'>
                            <div className='flex justify-center'>
                                <img src={client1} alt="" />
                            </div>
                            <div className='py-5 px-3 space-y-4'>
                                <h2 className='text-center text-3xl font-medium'>Alice Johnson</h2>
                                <p className='text-center text-base font-medium'>My stay at your hotel was exceptional. The service, cleanliness, and comfort exceeded my expectations. I will be returning soon!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-10 h-full bg-white'>
                            <div className='flex justify-center'>
                                <img src={client1} alt="" />
                            </div>
                            <div className='py-5 px-3 space-y-4'>
                                <h2 className='text-center text-3xl font-medium'>Alice Johnson</h2>
                                <p className='text-center text-base font-medium'>My stay at your hotel was exceptional. The service, cleanliness, and comfort exceeded my expectations. I will be returning soon!</p>
                            </div>
                        </div>
                    </SwiperSlide>








                </Swiper>
            </div>
        </div>



    );
};

export default Slider;