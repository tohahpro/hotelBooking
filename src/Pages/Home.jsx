
import { TypeAnimation } from "react-type-animation";
import FeaturedRoom from "../Components/FeaturedRoom";
import GoogleMap from "../Components/GoogleMap";
import PageTitle from "../Components/PageTitle";
import Slider from "../Components/Slider";
import Subscribe from "../Components/Subscribe";
import banner from '../assets/images/Cover1.jpeg'
import { Link } from "react-router-dom";





const Home = () => {
    return (
        <div className="bg-[#F8F8F8] ">
            <div className="max-w-screen-xl mx-auto md:px-10">
                <PageTitle title={'Home page'}></PageTitle>
                <div className="lg:flex pt-24">
                    <div className="flex-1 space-y-5 mt-20 mb-16">
                        <p className="text-center lg:text-start">THE ULTIMATE LUXURY EXPERIENCE</p>
                        <h1 className="text-2xl text-center lg:text-start md:text-4xl lg:text-7xl ">

                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'The Best',
                                    5000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'The Real',
                                    5000,
                                    'The Perfect',
                                    5000

                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em' }}
                                repeat={Infinity}
                            />
                            <br />
                            Base For You
                        </h1>
                        <button className="px-3 py-1 md:px-6 lg:px-10 md:py-2 lg:py-5 border bg-[#BEAD8E] text-white md:text-xl flex mx-auto lg:mx-0">
                            Learn More
                        </button>
                    </div>
                    <div>
                        <img className="w-full" src={banner} alt="" />
                    </div>
                </div>

                <section className="">
                    <h2 className="text-center text-4xl md:text-7xl font-medium pt-10">Hotel Location</h2>
                    <div className="lg:flex lg:justify-between py-10 px-7 md:px-0">
                        <div className="flex-1 flex justify-center py-10">
                            <div>
                                <h2 className="text-3xl md:text-5xl lg:text-7xl text-center lg:text-start">Welcome to <br /> Hotel Hub</h2>
                                <p className="md:w-3/4 mx-auto lg:mx-0 text-center lg:text-start md:text-xl mt-10">Situated at House-06 Lake Dr Rd, Dhaka 1230, our hotel offers a perfect blend of comfort, convenience, and hospitality. Nestled in a serene neighborhood, we provide a peaceful escape from the bustling city life.</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <GoogleMap></GoogleMap>
                        </div>
                    </div>
                </section>

                <section>
                    <Slider></Slider>
                </section>
                <section>

                    <FeaturedRoom></FeaturedRoom>
                    <div className="flex justify-center">
                        <Link to='/rooms' className="px-7 rounded-lg text-white font-medium py-3 border my-10 bg-[#BEAD8E]">VIEW ALL</Link>
                    </div>
                </section>

                <section>
                    <Subscribe></Subscribe>
                </section>
            </div >
        </div>
    );
};

export default Home;