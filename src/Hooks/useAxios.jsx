import axios from "axios";
import useAuth from "./useAuth";


const instance = axios.create({
    baseURL: 'http://localhost:4100',
    withCredentials: true
})
const useAxios = () => {

    const { logout } = useAuth()

    instance.interceptors.response.use(function (response) {

        return response;
    }, function (error) {

        // return Promise.reject(error);
        if (error.response.status === 401 || error.response.status === 403) {
            logout()
        }
    });

    return instance
};

export default useAxios;