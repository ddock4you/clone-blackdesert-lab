import AccountLayout from "../../../layout/AccountLayout";
import AccountHead from "../../../components/AccountHead";
import JoinForm from "../../../components/JoinForm";

const Step1 = () => {
    return (
        <AccountLayout>
            <AccountHead>회원가입</AccountHead>
            <JoinForm />
        </AccountLayout>
    );
};

export default Step1;
