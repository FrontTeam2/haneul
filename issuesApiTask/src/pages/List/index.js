import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import IssueApi from "../../apis/issueApi";
import { getIssue } from "../../stores/issue";
import { searchIssue } from "../../stores/search";
import { marginAuto } from "../../styles/common";
import IssueCard from "./components/Card/card";
import PerPageBox from "./components/Select/perPage";
import SortBox from "./components/Select/sort";

function IssueListPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const issues = useSelector((store) => store.issue.issues);
    const getIssueState = useSelector((store) => store.issue.getIssueState);
    const { owner, repository, page, sort, per_page } = useParams();
    console.log(owner, repository, page);

    useEffect(() => {
        dispatch(
            searchIssue.editSearchText(
                `https://github.com/${owner}/${repository}`
            )
        );
    }, []);

    const getData = useCallback(async () => {
        dispatch(
            getIssue({ owner, repository, params: { page, sort, per_page } })
        );
    }, [owner, repository, page, sort, per_page]);

    useEffect(() => {
        getData();
    }, [getData]);

    console.log(issues);

    return (
        <>
            {getIssueState.loading ? (
                <div>div</div>
            ) : (
                <>
                    <S.Wrapper>
                        <S.Container>
                            <S.Title>List</S.Title>
                            <SortBox></SortBox>
                            <PerPageBox></PerPageBox>
                            <S.Content>
                                {issues &&
                                    issues.map((issue) => {
                                        return (
                                            <IssueCard
                                                key={issue.id}
                                                issue={issue}
                                            />
                                        );
                                    })}
                            </S.Content>
                        </S.Container>
                    </S.Wrapper>
                </>
            )}
        </>
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
