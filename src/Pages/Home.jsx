
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
            <div className="max-w-screen-xl mx-auto">
                <PageTitle title={'Home page'}></PageTitle>
                <div className="lg:flex pt-24">
                    <div className="flex-1 space-y-5 my-auto">
                        <label>THE ULTIMATE LUXURY EXPERIENCE</label>
                        <h1 className="text-2xl md:text-4xl lg:text-7xl ">

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
                        <button className="mt-80 px-3 py-1 md:px-6 lg:px-10 md:py-2 lg:py-5 border bg-[#BEAD8E] text-white md:text-xl">
                            Learn More
                        </button>
                    </div>
                    <div>
                        <img className="w-full" src={banner} alt="" />
                    </div>
                </div>

                <section className="md:mx-24">
                    <h2 className="text-center text-xl font-medium pt-10">Hotel Location</h2>
                    <div className="lg:flex py-10">
                        <div className="flex-1">

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