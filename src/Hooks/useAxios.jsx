import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";


const instance = axios.create({
    baseURL: 'https://server-site-sepia.vercel.app',
    withCredentials: true
})
const useAxios = () => {

    // const { logout } = useAuth()
    // const navigate = useNavigate()
    instance.interceptors.response.use(function (response) {

        return response;
    }, function () {

        // return Promise.reject(error);
        // if (error.response.status === 401 || error.response.status === 403) {
        //     // logout()
        //     navigate('/login')
        // }
    });

    return instance
};

export default useAxios;