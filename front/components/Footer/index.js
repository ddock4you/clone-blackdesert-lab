import React from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterArea = styled.footer`
    padding: 60px 0 80px;
    background: #1e2129;
`;

const Nav = styled.nav`
    margin-bottom: 40px;
    ul {
        margin: 0 auto;
        text-align: center;
        li {
            display: inline-block;
            position: relative;
            padding: 0 20px;
            color: #d5d4d4;
            &::before {
                content: "|";
                position: absolute;
                top: 2px;
                right: 0;
                font-size: 12px;
            }
            &:last-child {
                &::before {
                    display: none;
                }
            }
            a {
                padding: 0 5px;
                text-decoration: none;
                font-size: 14px;
                color: #d5d4d4;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

const Info = styled.div`
    margin-bottom: 40px;
    text-align: center;
    p {
        display: inline-block;
        position: relative;
        padding-left: 45px;
        line-height: 1.3;
        text-align: left;
        font-size: 13px;
        color: #7f7e7e;
        img {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
`;

const LangSelect = styled.nav`
    margin-bottom: 40px;
    text-align: center;
    > div {
        display: inline-block;
        position: relative;
        width: 210px;
        height: 45px;
        &::before {
            content: "";
            display: block;
            overflow: hidden;
            width: 8px;
            height: 8px;
            border-left: 2px solid #4f4f4f;
            border-top: 2px solid #4f4f4f;
            background-color: transparent;
            transform: translate(0, -50%) rotate(225deg);
            position: absolute;
            right: 20px;
            top: 45%;
        }
        &:hover select {
            transition: 0.3s;
            color: #aaa;
            border-bottom-color: #aaa;
        }
        &:hover::before {
            transition: border-color 0.3s;
            border-color: #aaa;
        }
    }
    select {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 0 45px 0 25px;
        font-size: 14px;
        color: #7f7e7e;
        border: none;
        border-bottom: 1px solid #7f7f7f;
        background-color: transparent;
        appearance: none;
    }
`;

const Copyright = styled.nav`
    text-align: center;
    vertical-align: middle;
    font-size: 13px;
    color: #7f7e7e;
    a {
        display: inline-block;
        position: relative;
        width: 144px;
        height: 26px;
        margin-right: 15px;
        vertical-align: middle;
        font-size: 0;
        &::before {
            display: block;
            content: "";
            width: 100%;
            height: 100%;
            background: url("./images/sprite_ui_group.png") -190px -767px
                no-repeat;
        }
    }
`;

const Footer = () => {
    return (
        <FooterArea>
            <Nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>서비스 이용약관</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>개인정보처리방침</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>운영정책</a>
                        </Link>
                    </li>
                </ul>
            </Nav>
            <Info>
                <p>
                    <img
                        src="./images/footer_age_15.gif"
                        alt="15세 미만 이용 불가"
                    />
                    본 게임의 정서는 성, 폭력, 공포와 연관되어 있습니다. 사용
                    시간에 주의해주시고 게임 중독을 피해주세요.
                    <br />본 게임의 일부 내용 혹은 서비스는 추가로 기타 비용을
                    지불해야합니다.
                </p>
            </Info>
            <LangSelect>
                <div>
                    <select>
                        <option>한국어</option>
                        <option>English</option>
                        <option>繁體中文</option>
                    </select>
                </div>
            </LangSelect>
            <Copyright>
                <Link href="/">
                    <a> </a>
                </Link>
                <span>Copyright ⓒ Pearl Abyss Corp. All Rights Reserved</span>
            </Copyright>
        </FooterArea>
    );
};

export default Footer;
