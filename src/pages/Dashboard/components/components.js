import styled from "styled-components";
export const Container = styled.main`
	position: absolute;
	width: 73vw;
	left: 23.5vw;
	top: 93px;
	background: #fcfdfe;
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-style: normal;
	font-weight: bold;

	.create-wallet {
		width: 207px;
	}

	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
		h5 {
			margin-right: 1rem;
		}
	}

	h6 {
		font-size: 16px;
		line-height: 150%;
		color: #017189;
	}

	& > h5 {
		font-size: 21px;
		line-height: 150%;
	}
`;

export const ContentContainer = styled.section`
	background: #fff;
	width: 90%;
	margin: 1rem auto;
	height: 1065px;
	border-radius: 16px;
	padding: 0 1.2rem;
	padding-right: 2rem;
	font-style: normal;

	.quick-links {
		margin-top: 5rem;
		margin-bottom: 2rem;

		h5 {
			font-weight: bold;
			font-size: 21px;
			color: #001b21;
			margin: 0;
		}

		p {
			font-size: 16px;
			color: #94a3b8;
		}
	}
`;

export const BoxIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	margin-top: 0.5rem;
	width: 25px;
	height: 25px;
	border-radius: 200px;
	background: ${(props) => props.backCol};
`;

export const WalletContent = styled.h5`
	width: 81px;
	height: 42px;
	font-size: 14px;
	text-align: center;
`;

export const TransactionsContainer = styled.div`
	margin: 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	.transaction {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 3rem;

		.img-container {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			padding: 10px;
			margin-right: 10px;

			width: 36px;
			height: 36px;

			/* Genio/gray/50 */

			background: #f9fafb;
			border-radius: 8px;
		}

		& > div:last-child {
			font-style: normal;
			p {
				margin: 0;
				font-weight: normal;
				/* font-size: 14px; */
				color: #2b4146;
			}
			h6 {
				margin: 0;
				font-weight: bold;
				/* font-size: 16px; */
				color: #001b21;
			}
		}
	}
`;