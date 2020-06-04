import styled from "styled-components";

export const HeaderArea = styled.header`
    background-color: #ccc;
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    z-index: 10;
`;

export const Bottom = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: ${(props) => (props.menuOn ? "220px" : "80px")};
    overflow: hidden;
    background: rgba(0, 0, 0, 0.9);
    transition: height 0.2s;

    &:before {
        content: "";
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.1);
    }
    h1 {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        width: 215px;
        height: 80px;
        a {
            position: relative;
            display: block;
            height: 100%;
            text-align: center;
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
    nav {
        padding-left: 215px;
        > ul {
            > li {
                float: left;
                width: 150px;
                > a {
                    display: block;
                    width: 100%;
                    height: 80px;
                    line-height: 80px;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 17px;
                    text-decoration: none;
                }
                > ul {
                    padding: 10px 0;

                    > li {
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        > a {
                            display: inline-block;
                            padding: 0 5px;
                            font-size: 14px;
                            color: rgba(255, 255, 255, 0.6);
                            text-decoration: none;
                            &:hover {
                                color: #ae8d67;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const RightNav = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    ul {
        display: inline-block;
        li {
            display: inline-block;
            position: relative;
            height: 80px;
            padding: 0 30px;
            line-height: 80px;
            &:before {
                content: "|";
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                font-size: 12px;
                color: #aaa;
            }
            &:last-child::before {
                content: "";
            }
            a {
                display: inline-block;
                color: #fff;
                text-decoration: none;

                &:hover {
                    color: #ae8d67;
                }
            }
        }
    }
    button {
        width: 200px;
        padding: 0;
        border: none;
        background-image: url("./images/header_btn_acoin.png");
        background-size: 100% 100%;
        line-height: 80px;
        text-align: center;
        font-size: 21px;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
        &:hover {
            background-image: url("./images/header_btn_acoin_hover.png");
        }
    }
`;
