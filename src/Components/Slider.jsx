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


import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Slider = () => {



    return (


        <div className='py-20'>
            <h3 className='text-center text-7xl font-bold'>Client Feedback</h3>
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
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className='p-10'>
                            <h2 className='text-center text-xl font-medium'>Alice Johnson</h2>
                            <p className='text-center text-base font-medium'>My stay at your hotel was exceptional. The service, cleanliness, and comfort exceeded my expectations. I will be returning soon!</p>
                            <div className='flex text-lg justify-center py-3'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='p-10'>
                            <h2 className='text-center text-xl font-medium'>John Smith</h2>
                            <p className='text-center text-base font-medium'>I had a wonderful experience at your hotel. The staff was friendly, the room was immaculate, and the food was delicious.</p>
                            <div className='flex text-lg justify-center py-3'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-10'>
                            <h2 className='text-center text-xl font-medium'>Eva Martinez</h2>
                            <p className='text-center text-base font-medium'>My stay was memorable. The hotels attention to detail and beautiful decor made me feel at home. I will recommend it to others.</p>
                            <div className='flex text-lg justify-center py-3'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-10'>
                            <h2 className='text-center text-xl font-medium'>Michael Brown</h2>
                            <p className='text-center text-base font-medium'>Your hotel is a hidden gem. The amenities, location, and overall atmosphere made my trip truly enjoyable. Thank you!</p>
                            <div className='flex text-lg justify-center py-3'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div>
                        </div>
                    </SwiperSlide>








                </Swiper>
            </div>
        </div>



    );
};

export default Slider;