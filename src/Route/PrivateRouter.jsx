import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        <div className="flex justify-center items-center h-[90vh]">
            <span className="loading loading-spinner text-warning"></span>
        </div>
    }

    if (!loading && !user?.email) {
        return <Navigate state={location.pathname} to="/login" replace></Navigate>

    }
    return children;
};

PrivateRouter.propTypes = {
    children: PropTypes.node
};

export default PrivateRouter;