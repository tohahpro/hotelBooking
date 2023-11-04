
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';



const SocialLogin = () => {

    const { google } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()


    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                if (res.user) {
                    toast.success('Register successful')
                }
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                return toast.error(error.message)
            })

    }

    return (
        <div>

            <div className="divider text-lg font-semibold">Continue With</div>
            <div className="flex gap-12">
                <div
                    onClick={() => handleSocialLogin(google)}
                    className="py-2 px-8 flex items-center gap-2 border rounded-md hover:cursor-pointer hover:shadow-2xl shadow-gray-300">
                    <FcGoogle className="text-2xl"></FcGoogle> <span className="text-lg font-medium">Google</span>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;