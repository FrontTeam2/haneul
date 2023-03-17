import { useEffect, useState } from "react";
import styled from "styled-components";
import IssueApi from "../../apis/issueApi";
import { marginAuto } from "../../styles/common";
import IssueCard from "./components/List/Card/card";

function IssueListPage() {
    const [issues, setIssues] = useState([]);
    const issuesList = async () => {
        try {
            const res = await IssueApi.getIssue();
            setIssues(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(issues);

    useEffect(() => {
        issuesList();
    }, []);

    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>List</S.Title>
                <S.Content>
                    {issues &&
                        issues.map((issue) => {
                            return <IssueCard key={issue.id} issue={issue} />;
                        })}
                </S.Content>
            </S.Container>
        </S.Wrapper>
    );
}
export default IssueListPage;

const Wrapper = styled.div`
    width: 100%;
`;
const Container = styled.div`
    width: 50%;
    ${marginAuto}
`;

const Title = styled.div`
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const Content = styled.ul`
    ${marginAuto}
    text-align: center;
`;
const S = {
    Wrapper,
    Container,
    Title,
    Content,
};
