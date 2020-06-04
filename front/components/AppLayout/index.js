import React from "react";
import styled from "styled-components";
import Header from "../Header";

const Wrap = styled.div`
    padding-top: 80px;
`;

const AppLayout = ({ children }) => {
    return (
        <Wrap>
            <Header />
            {children}
        </Wrap>
    );
};

export default AppLayout;
