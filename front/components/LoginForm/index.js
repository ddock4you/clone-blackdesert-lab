import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Form = styled.form`
    width: 600px;
    margin: 0 auto;
    padding-bottom: 60px;
    border-bottom: 1px solid #ccc;
`;

const Input = styled.div`
    position: relative;
    margin-bottom: 15px;
    label {
        position: absolute;
        left: 27px;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 17px;
        color: #323232;
        transition: all 0.5s;
    }
    input {
        width: 100%;
        height: 58px;
        padding: 0 25px;
        font-size: 17px;
        color: #323232;
        box-sizing: border-box;
        border: 1px solid #b3b3b3;
        outline: 0;
        &:focus {
            box-shadow: 0 0 0 1px #2b305a;
        }
        &:focus + label {
            left: 18px;
            top: -8px;
            padding: 0 9px;
            font-size: 13px;
            color: #2b305a;
            transform: translate(0, 0);
            background: #fff;
        }
    }
`;

const AccountNav = styled.nav`
    text-align: center;
    ul {
        li {
            display: inline-block;
            position: relative;
            padding: 0 15px;
            &::before {
                content: "|";
                position: absolute;
                top: 0;
                right: 0;
            }
            &:last-child {
                &::before {
                    display: none;
                }
            }
            a {
                color: #000;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    height: 60px;
    margin-bottom: 15px;
    line-height: 60px;
    font-size: 19px;
    background-color: #2b305a;
    color: #fff;
`;

const AgreeCheck = styled.div`
    position: relative;
    margin-bottom: 35px;
    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"] + label {
        position: relative;
        display: inline-block;
        padding-left: 42px;
        vertical-align: middle;
        font-size: 16px;
        letter-spacing: -0.25px;
        color: #000;
        line-height: 1.3;
        cursor: pointer;
        &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            width: 28px;
            height: 28px;
            background-color: #d5d5d5;
            border: 1px solid #d5d5d5;
            transition: all 0.25s;
            box-sizing: border-box;
            transform: translate(0, -50%);
        }
        &::after {
            content: "";
            display: block;
            position: absolute;
            left: 9px;
            top: 0;
            width: 7px;
            height: 12px;
            border-left: 2px solid #fff;
            border-top: 2px solid #fff;
            transform: rotate(-135deg);
            transition: all 0.25s;
            z-index: 10;
        }
    }
    input[type="checkbox"]:checked + label {
        &::before {
            background-color: #2b2f5a;
            border: 1px solid #2b2f5a;
        }
        /* &::after {
            border-left-color: #000;
            border-top-color: #000;
        } */
    }
`;

const LoginForm = () => {
    return (
        <Form>
            <Input>
                <input type="text" />
                <label>이메일</label>
            </Input>
            <Input>
                <input type="password" />
                <label>비밀번호</label>
            </Input>
            <SubmitButton type="submit">로그인</SubmitButton>
            <AgreeCheck>
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">로그인 정보 기억하기</label>
            </AgreeCheck>
            <AccountNav>
                <ul>
                    <li>
                        <Link href="/login">
                            <a>계정찾기</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a>비밀번호찾기</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/join/step1">
                            <a>회원가입</a>
                        </Link>
                    </li>
                </ul>
            </AccountNav>
        </Form>
    );
};

export default LoginForm;
