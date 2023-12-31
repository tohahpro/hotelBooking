import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";


const PageTitle = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.node
};

export default PageTitle;