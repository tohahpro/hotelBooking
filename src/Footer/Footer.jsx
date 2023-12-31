import logo from '../assets/images/hotel-hub.png'

const Footer = () => {
    return (
        <div className="px-28 lg:px-64">
            <footer className="py-10 md:flex justify-between  md:gap-0 flex-wrap mx-auto space-y-6">

                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="flex flex-wrap flex-col">
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className="flex flex-wrap flex-col">
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>

                <div className="flex flex-wrap flex-col">
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;