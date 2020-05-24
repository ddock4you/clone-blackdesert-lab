import Head from "next/head";
import PropTypes from "prop-types";

const BlackDesert = ({ Component }) => {
    return (
        <>
            <Head>
                <title>bbaaaa</title>
            </Head>
            <Component />
        </>
    );
};

BlackDesert.propTypes = {
    Component: PropTypes.elementType,
};

export default BlackDesert;
