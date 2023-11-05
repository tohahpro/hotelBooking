
import FeaturedRoom from "../Components/FeaturedRoom";
import GoogleMap from "../Components/GoogleMap";
import PageTitle from "../Components/PageTitle";
import Slider from "../Components/Slider";
import Subscribe from "../Components/Subscribe";
import banner from '../assets/images/Cover1.jpeg'





const Home = () => {
    return (
        <div className="bg-[#F8F8F8] lg:px-56">
            <PageTitle title={'Home page'}></PageTitle>
            <div className="flex pt-24">
                <div className="flex-1 space-y-5 mt-10">
                    <label>THE ULTIMATE LUXURY EXPERIENCE</label>
                    <h1 className="text-9xl ">
                        The Perfect
                        Base For You
                    </h1>
                    <button className="mt-80 px-10 py-5 border bg-[#BEAD8E] text-white text-xl">
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
                    <button className="px-6 py-4 border my-10 bg-[#BEAD8E]">VIEW ALL</button>
                </div>
            </section>

            <section>
                <Subscribe></Subscribe>
            </section>
        </div >
    );
};

export default Home;