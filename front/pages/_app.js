import Head from "next/head";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { createStore, applyMiddleware } from "redux";
import reducer from "../modules";
import { composeWithDevTools } from "redux-devtools-extension";
import withRedux from "next-redux-wrapper";

const TestApp = ({ Component, store }) => {
    // const store = createStore(reducer, composeWithDevTools());
    // const router = useRouter();

    useEffect(() => {
        // console.dir(router);
    });
    return (
        <Provider store={store}>
            <Head>
                <title>bbaaaa</title>
            </Head>
            <Component />
        </Provider>
    );
};

TestApp.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
};

const configureStore = (init, options) => {
    const middlewares = []; // 미들웨어들을 넣으면 된다.
    const enhancer =
        process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(...middlewares))
            : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(reducer, init, enhancer);
    return store;
};

export default withRedux(configureStore)(TestApp);
