import house from '../assets/images/icon/house.png'
import phone from '../assets/images/icon/phone.png'
import message from '../assets/images/icon/message.png'
import PageTitle from '../Components/PageTitle';

const ContactUs = () => {
    return (
        <div className="bg-[#F8F8F8]">

            <PageTitle title={'Contact Us'}></PageTitle>

            <div className="h-[25vh] lg:h-[40vh] w-full bg-center bg-cover contact-image ">
                <div className="pl-56 ">
                    <div className="text-black pt-24">
                        <span className="text-xl font-medium z-50">THE ULTIMATE LUXURY</span>
                        <h2 className="text-8xl font-medium font-lora">Contact Us</h2>
                    </div>
                </div>
            </div>


            <div className='mt-20'>
                <h2 className='text-center text-7xl font-lora'>Our team would love to meet you</h2>
                <p className='w-1/2 mx-auto text-lg text-center mt-5'>Contact us to learn more about what we can do to assist you with your financial goals. We will help take the guesswork out of any financial situation to make sure you have a clear path to success. Reach out with any questions or schedule a no obligation consultation with us now!</p>
            </div>



            <section className='max-w-screen-xl mx-auto'>
                <div className="flex justify-between py-20">
                    <div className="bg-white border p-10">
                        <div className='flex gap-5'>
                            <div>
                                <img className='w-20' src={house} alt="" />
                            </div>
                            <div>
                                <h3 className='text-2xl font-medium font-lora'>Office Address</h3>
                                <p>19/A, Cirikon City hall <br /> Tower New York, NYC</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border p-10">
                        <div className='flex gap-5'>
                            <div>
                                <img className='w-16' src={phone} alt="" />
                            </div>
                            <div>
                                <h3 className='text-2xl font-medium font-lora'>Phone Number</h3>
                                <p>+ 97656 8675 78647 <br />
                                    + 87676 68675 7656</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border p-10">
                        <div className='flex gap-5'>
                            <div>
                                <img className='w-20' src={message} alt="" />
                            </div>
                            <div>
                                <h3 className='text-2xl font-medium font-lora'>Email Address</h3>
                                <p>tohahpro@gmail.com <br /> toha@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='max-w-screen-xl mx-auto py-20'>
                <form>
                    <div className='space-y-4'>
                        <div className='flex gap-8 '>
                            <div className='w-1/2'>
                                <label>First Name</label> <br />
                                <input className='border w-full mt-3 p-3 rounded-lg' type="text" name="first-name" placeholder="First Name" />
                            </div>
                            <div className='w-1/2'>
                                <label>Last Name</label> <br />
                                <input className='border w-full mt-3 p-3 rounded-lg' type="text" name="last-name" placeholder="Last Name" required />
                            </div>
                        </div>


                        <div className='flex gap-8 '>
                            <div className='w-1/2'>
                                <label>Email</label> <br />
                                <input className='border w-full mt-3 p-3 rounded-lg' type="text" name="email" />
                            </div>
                            <div className='w-1/2'>
                                <label>Phone Number</label> <br />
                                <input className='border w-full mt-3 p-3 rounded-lg' type="text" name='price' />
                            </div>
                        </div>

                        <button className='w-full py-3 bg-[#BEAD8E] rounded-lg border text-lg font-semibold text-white'>Send Message</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ContactUs;