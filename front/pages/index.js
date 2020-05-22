import { useState } from "react";
import Link from "next/link";

const Home = () => {
    const commonValue = (inputValue = null) => {
        const [value, setValue] = useState(inputValue);
        const handle = (e) => {
            setValue(e.target.value);
        };
        return [value, handle];
    };

    const [testValue, setTestValue] = commonValue("");

    console.log(testValue);
    return (
        <>
            <Link href="/about/create">
                <a>about</a>
            </Link>
            <div>
                <input
                    type="text"
                    value={testValue}
                    placeholder="입력"
                    onChange={setTestValue}
                />
            </div>
            ;
        </>
    );
};

export default Home;
