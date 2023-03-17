import styled from "styled-components";
import { flexAlignCenter } from "../../../styles/common";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

function Header() {
    const [inputText, setInputText] = useState();

    const onChangeSearch = (e) => {
        setInputText(e.target.value);
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Logo src={process.env.PUBLIC_URL + "/logo.png"}></S.Logo>
                <S.Text>Github Issue</S.Text>
                <S.InputBox
                    placeholder="깃허브 레포지토리 주소를 복붙해주세요📃"
                    onChange={onChangeSearch}
                ></S.InputBox>
                <S.Icon>
                    <AiOutlineSearch size={35} />
                </S.Icon>
            </S.Container>
        </S.Wrapper>
    );
}
export default Header;

const Wrapper = styled.div`
    padding: 16px;
    border-bottom: 2px solid ${({ theme }) => theme.PALETTE.gray[200]}; ;
`;

const Container = styled.div`
    width: 80%;
    ${flexAlignCenter}
    justify-content: center;
    margin: 0 auto;
`;

const Logo = styled.img`
    width: 54px;
    height: 54px;
`;

const Text = styled.div`
    margin-left: 10px;
    font-size: 20px;
`;

const InputBox = styled.input`
    border-radius: 30px;
    :focus {
        outline: none;
    }
    width: 60%;
    font-size: 20px;
    margin-left: 5%;
    border: none;
    padding: 12px;
    padding-left: 35px;
`;

const Icon = styled.div``;

const S = {
    Wrapper,
    Container,
    Logo,
    Text,
    InputBox,
    Icon,
};
