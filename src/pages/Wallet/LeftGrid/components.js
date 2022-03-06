import styled from "styled-components";

export const Tabs = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
`;

export const TabBtn = styled.button`
	border: 0px;
	outline: none;
	background: transparent;
	padding: 5px 10px;
	border-bottom: ${(props) =>
		props.active ? "2px solid #017189" : "2px solid transparent"};
	cursor: pointer;
	&:not(:last-child) {
		margin-right: 10px;
	}

	&:focus {
		outline: none;
	}
`;

export const WalletDetails = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	background: ${(props) => (props.active ? "#eef7f9" : "transparent")};
	border-radius: 8px;
	padding: 16px;
	& > div:first-child {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		& > div {
			h5 {
				margin: 0;
				padding: 0;
			}
			span {
				margin: 0;
				padding: 0;
			}
		}
	}

	h6 {
		margin: 0;
	}
`;
