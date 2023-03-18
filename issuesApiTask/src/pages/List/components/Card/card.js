import styled from 'styled-components'
function IssueCard({ issue }) {
	return (
		<S.Wrapper>
			<S.Card>
				<S.Title>{issue.title}</S.Title>
			</S.Card>
		</S.Wrapper>
	)
}
export default IssueCard

const Wrapper = styled.li`
	margin: 10px 0;
`

const Card = styled.div`
	padding: 20px;
	background-color: ${({ theme }) => theme.PALETTE.gray[100]};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	border-radius: 10px;
`

const Title = styled.div``

const S = {
	Wrapper,
	Title,
	Card,
}
