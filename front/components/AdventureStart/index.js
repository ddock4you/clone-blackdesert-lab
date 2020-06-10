import React from "react";
import styled from "styled-components";
import { inner } from "../../mixins";
import Link from "next/link";

const Adventure = styled.section`
    height: 460px;
    background: url("./images/img_adventure.jpg") no-repeat center center;
`;

const Inner = styled.div`
    position: relative;
    ${inner};
    height: 100%;
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 640px;
    transform: translateY(-50%);
    h2 {
        margin-bottom: 20px;
        font-size: 55px;
        font-weight: bold;
        color: #241b14;
    }
    p {
        margin-bottom: 30px;
        text-align: center;
        letter-spacing: 1px;
        font-size: 15px;
        color: #48423b;
    }
`;

const ButtonBox = styled.div`
    width: 510px;
    margin: 0 auto;
    a {
        display: inline-block;
        box-sizing: border-box;
        width: 49%;
        height: 70px;
        margin-right: 2%;
        line-height: 70px;
        background: #30343f;
        border-radius: 4px;
        text-decoration: none;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        transition: transform 0.3s, filter 0.3s;
        &:hover {
            background: #262b38;
        }
        &:last-child {
            margin-right: 0;
            background: #725945;
            &:hover {
                background: #69503d;
            }
        }
    }
`;

const AdventureStart = () => {
    return (
        <Adventure>
            <Inner>
                <Content>
                    <h2>당신만의 모험을 시작하세요</h2>
                    <p>검은사막의 광활한 세계로 당신을 초대합니다</p>
                    <ButtonBox>
                        <Link href="/join/step1">
                            <a>회원가입</a>
                        </Link>
                        <Link href="/">
                            <a>다운로드</a>
                        </Link>
                    </ButtonBox>
                </Content>
            </Inner>
        </Adventure>
    );
};

export default AdventureStart;
