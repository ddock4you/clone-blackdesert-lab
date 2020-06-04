import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Visual = styled.div`
    position: relative;
    height: 700px;
    background: url("./images/img_main_visual.jpg") no-repeat center center;
`;

const Inner = styled.div`
    position: relative;
    width: 1400px;
    height: 100%;
    margin: 0 auto;
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    line-height: 1.6;
    color: #fff;
    h2 {
        margin-bottom: 20px;
        letter-spacing: -1px;
        font-size: 60px;
    }
    > p {
        font-size: 18px;
        line-height: 1.7;
        margin-bottom: 20px;
    }
`;

const ButtonBox = styled.div`
    width: 500px;
    > div {
        a {
            width: 49%;
            background: linear-gradient(to bottom, #ededed, #bdbdbd);
            border-color: #acacac;
            color: #000;
            margin-right: 2%;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                transform: translateY(-4px);
            }
        }
    }
    a {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        margin-top: 8px;
        line-height: 70px;
        background: linear-gradient(to bottom, #6985cf, #465385);
        border: 1px solid #5a70ac;
        border-radius: 4px;
        text-decoration: none;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        transition: transform 0.3s, filter 0.3s;
        &:hover {
            filter: brightness(1.1);
        }
    }
`;

const MainVisual = () => {
    return (
        <Visual>
            <Inner>
                <Content>
                    <h2>
                        전세계 모험가가 함께하는
                        <br /> 검은사막 연구소
                    </h2>
                    <p>
                        검은사막의 최신 업데이트를
                        <br /> 검은사막 연구소에서 먼저 만나세요!
                    </p>
                    <ButtonBox>
                        <div>
                            <Link href="/">
                                <a>검은사막 연구소 다운로드</a>
                            </Link>
                            <Link href="/">
                                <a>의견 보내기</a>
                            </Link>
                        </div>
                        <Link href="/">
                            <a>연구소 권한 신청 방법</a>
                        </Link>
                    </ButtonBox>
                </Content>
            </Inner>
        </Visual>
    );
};

export default MainVisual;
