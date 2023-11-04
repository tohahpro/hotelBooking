import { Link } from 'react-router-dom';
import error from '../assets/images/404_page.png';

const ErrorPage = () => {
    return (
        <div className='py-52'>
            <div className='flex justify-center items-center '>
                <img src={error} alt="" />

            </div>
            <div className='flex justify-center items-center'>
                <Link className='px-6 py-3 text-black font-macondo bg-[#90D6CC] rounded-2xl text-lg font-medium' to='/'>Go Back Home </Link>
            </div>
        </div>
    );
};

export default ErrorPage;