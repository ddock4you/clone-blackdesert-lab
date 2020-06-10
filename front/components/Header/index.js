import React, { useState } from "react";
import Link from "next/link";

import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderArea, Bottom, RightNav } from "./style";

const Header = () => {
    const [menuOn, setMenuOn] = useState(false);

    return (
        <HeaderArea>
            <Bottom menuOn={menuOn}>
                <h1>
                    <Link href="/">
                        <a>
                            <img
                                src="./images/header_logo_global.png"
                                alt="로고"
                            />
                        </a>
                    </Link>
                </h1>
                <nav>
                    <ul
                        onMouseEnter={() => setMenuOn(true)}
                        onMouseLeave={() => setMenuOn(false)}
                    >
                        <li>
                            <Link href="/">
                                <a>새소식</a>
                            </Link>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>공지사항</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>업데이트</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>GM노트</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/">
                                <a>모험가 캠프</a>
                            </Link>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>모험가 캠프</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>통합거래소</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>의견 보내기</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <RightNav>
                    <ul>
                        <li>
                            <Link href="/join/step1">
                                <a>
                                    <FontAwesomeIcon icon={faSignInAlt} />{" "}
                                    회원가입
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/login">
                                <a>
                                    <FontAwesomeIcon icon={faUser} /> 로그인
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <button type="button">게임 시작</button>
                </RightNav>
            </Bottom>
        </HeaderArea>
    );
};

export default Header;
