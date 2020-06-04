import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "../modules/user";
import MainVisual from "../components/MainVisual";
import MainSlide from "../components/MainSlide";
import AdventureStart from "../components/AdventureStart";

const Home = () => {
    const commonValue = (inputValue = null) => {
        const [value, setValue] = useState(inputValue);
        const handle = (e) => {
            setValue(e.target.value);
        };
        return [value, handle];
    };

    // const [testValue, setTestValue] = commonValue("");

    const dispatch = useDispatch();
    const { isLogin } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch({
            type: LOG_IN,
            data: "하이염",
        });

        console.log(isLogin);
    }, []);

    return (
        <main>
            <MainVisual />
            <MainSlide />
            <AdventureStart />
        </main>
    );
};

export default Home;
