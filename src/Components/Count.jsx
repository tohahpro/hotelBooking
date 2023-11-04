import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {

    const [countOn, setCountOn] = useState(false)


    return (
        <div>
            <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>

                <div className="my-40">
                    {
                        countOn &&

                        <div className="md:flex justify-around">
                            <div className="p-8 bg-black flex items-center gap-4">
                                <p className="text-white">Post</p>
                                <div>
                                    <CountUp className="text-white" delay={0} duration={8} end={100} />
                                </div>
                            </div>
                            <div className="p-8 bg-black flex items-center gap-4">
                                <p className="text-white">Post</p>
                                <div>
                                    <CountUp className="text-white" delay={0} duration={8} end={100} />
                                </div>
                            </div>
                            <div className="p-8 bg-black flex items-center gap-4">
                                <p className="text-white">Post</p>
                                <div>
                                    <CountUp className="text-white" delay={0} duration={8} end={100} />
                                </div>
                            </div>
                            <div className="p-8 bg-black flex items-center gap-4">
                                <p className="text-white">Post</p>
                                <div>
                                    <CountUp className="text-white" delay={0} duration={8} end={100} />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default Count;