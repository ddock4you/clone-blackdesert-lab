import React from "react";
import styled from "styled-components";

const AccountHeadline = styled.h2`
    padding: 65px 0 42px;
    margin-bottom: 34px;
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    border-bottom: 2px solid #555;
`;

const AccountHead = ({ children }) => {
    return <AccountHeadline>{children}</AccountHeadline>;
};

export default AccountHead;
