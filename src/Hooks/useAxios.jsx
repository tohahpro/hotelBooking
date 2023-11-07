import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const instance = axios.create({
    baseURL: 'http://localhost:4100',
    withCredentials: true
})
const useAxios = () => {

    const { logout } = useAuth()
    const navigate = useNavigate()
    instance.interceptors.response.use(function (response) {

        return response;
    }, function (error) {

        // return Promise.reject(error);
        if (error.response.status === 401 || error.response.status === 403) {
            logout()
            navigate('/login')
        }
    });

    return instance
};

export default useAxios;