import AccountLayout from "../../layout/AccountLayout";
import LoginForm from "../../components/LoginForm";
import AccountHead from "../../components/AccountHead";

const Login = () => {
    return (
        <AccountLayout>
            <AccountHead>로그인</AccountHead>
            <LoginForm />
        </AccountLayout>
    );
};

export default Login;
