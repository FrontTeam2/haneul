import { useEffect, useState } from "react";
import styled from "styled-components";
import IssueApi from "../../apis/issueApi";
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

const Wrapper = styled.ul`
    width: 100%;
`;
const Container = styled.div``;

const Title = styled.div``;
const Content = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center;
`;
const S = {
    Wrapper,
    Container,
    Title,
    Content,
};
