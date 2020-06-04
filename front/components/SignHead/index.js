import React from "react";
import styled from "styled-components";

const SignHeadline = styled.h2`
    padding: 65px 0 42px;
    margin-bottom: 34px;
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    border-bottom: 2px solid #555;
`;

const SignHead = ({ children }) => {
    return <SignHeadline>{children}</SignHeadline>;
};

export default SignHead;
