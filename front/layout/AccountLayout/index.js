import React from "react";
import styled from "styled-components";

const Account = styled.section`
    width: 880px;
    min-height: 600px;
    margin: 0 auto 60px;
`;

const AccountLayout = ({ children }) => {
    return <Account>{children}</Account>;
};

export default AccountLayout;
