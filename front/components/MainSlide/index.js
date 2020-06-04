import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import { skipText } from "../../mixins";
const array = new Array(10).fill({
    label: "GM노트",
    image: "./images/img_content1.jpg",
    title: "타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀",
    desc: "ㅁㅁㅁ ㅁㅁㅁㅁ ㅁㅁㅁㅁ ㅁㅁㅁㅁ ㅁㅁㅁㅁ",
    date: "2020-06-02",
});

const SlideArea = styled.div`
    padding: 60px 0;
    overflow: hidden;
`;

const SlideShow = styled.div`
    .slick-track {
        padding: 30px 0;
        .slick-slide {
            transition: all 0.3s;
            .itemArea {
                box-sizing: border-box;
                padding: 0 15px;
                .item {
                    position: relative;
                    height: 420px;
                    background: #f2f2f2;
                    .label {
                        position: absolute;
                        top: 0;
                        left: 0;
                        box-sizing: border-box;
                        width: 100px;
                        height: 30px;
                        background: rgba(83, 93, 142, 0.65);
                        line-height: 30px;
                        text-align: center;
                        font-size: 15px;
                        color: rgba(255, 255, 255, 0.8);
                        z-index: 1;
                    }
                    .image {
                        position: relative;
                        height: 250px;
                        overflow: hidden;
                        img {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            margin: auto;
                            max-height: 100%;
                        }
                    }
                    .content {
                        padding: 30px 20px 65px;
                        box-sizing: border-box;
                        text-align: center;
                        dl {
                            margin-bottom: 25px;
                            dt {
                                margin-bottom: 10px;
                                line-height: 1.22;
                                font-size: 20px;
                                ${skipText}
                            }
                            dd {
                                box-sizing: border-box;
                                height: 32px;
                                overflow: hidden;
                                font-size: 15px;
                            }
                        }
                        .date {
                            font-size: 17px;
                            color: #a4a4a4;
                        }
                    }
                }
            }
        }
        .slick-center {
            transform: translateY(-20px);
            .itemArea {
                .item {
                    background: #fff;
                    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
                }
            }
        }
    }
    .slick-arrow {
        position: absolute;
        top: 40%;
        display: inline-block;
        width: 80px;
        height: 80px;
        transition: 0.35s;
        border: 1px solid #000;
        background-color: rgba(242, 242, 242, 0.6);
        z-index: 1;
        &::before {
            content: "";
            position: absolute;
            top: 50%;
            overflow: hidden;
            width: 26px;
            height: 26px;
            background-color: transparent;
        }
        &:hover {
            background: #e9e6e1;
        }
        &.slick-prev {
            &:before {
                border-left: 1px solid #000;
                border-top: 1px solid #000;
                transform: translate(-50%, -50%) rotate(-40deg) skew(10deg);
                left: 60%;
            }
            left: 13%;
        }
        &.slick-next {
            &:before {
                border-left: 1px solid #000;
                border-top: 1px solid #000;
                transform: translate(-50%, -50%) rotate(140deg) skew(10deg);
                left: 40%;
            }
            right: 13%;
        }
    }
    .slick-dots {
        li {
            margin: 0 2px;
            button {
                &::before {
                    content: "";
                    display: block;
                    position: static;
                    width: 8px;
                    height: 8px;
                    background: #000;
                }
            }
        }
    }
`;

const MainSlide = () => {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "250px",
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        dots: true,
    };

    return (
        <SlideArea>
            <SlideShow>
                <Slider {...settings}>
                    {array.map((v, i) => (
                        <div key="i" className="itemArea">
                            <div className="item">
                                <p className="label">{v.label}</p>
                                <p className="image">
                                    <img
                                        src={v.image}
                                        alt={`${v.title} 이미지`}
                                    />
                                </p>
                                <div className="content">
                                    <dl>
                                        <dt>{v.title}</dt>
                                        <dd>{v.desc}</dd>
                                    </dl>
                                    <p className="date">{v.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </SlideShow>
        </SlideArea>
    );
};

export default MainSlide;
