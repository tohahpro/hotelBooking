import GoogleMap from "../Components/GoogleMap";
import Slider from "../Components/Slider";
import banner from '../assets/images/banner.jpg'




const Home = () => {
    return (
        <div className="pt-20">
            <img className="w-full" src={banner} alt="" />

            <section className="md:mx-24 lg:mx-56">
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
        </div>
    );
};

export default Home;