import styled from "styled-components";
function IssueCard({ issue }) {
    return (
        <S.Wrapper>
            <S.Card>
                <S.Title>{issue.title}</S.Title>
            </S.Card>
        </S.Wrapper>
    );
}
export default IssueCard;

const Wrapper = styled.li`

    margin: 10px;
`;

const Card = styled.div`
    padding: 20px;
    border: 1px solid;
`;

const Title = styled.div``;

const S = {
    Wrapper,
    Title,
    Card,
};
