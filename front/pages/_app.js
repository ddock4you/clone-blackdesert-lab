import Head from "next/head";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../modules";
import AppLayout from "../layout/AppLayout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`

    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

const TestApp = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&amp;display=swap"
                    rel="stylesheet"
                /> */}
                <title>bbaaaa</title>
            </Head>
            <Reset />
            <GlobalStyle />
            <AppLayout>
                <Component />
            </AppLayout>
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
