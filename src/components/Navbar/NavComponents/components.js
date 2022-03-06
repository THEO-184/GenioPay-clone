import styled from "styled-components";

export const NavContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem 1.5rem;
	position: absolute;
	width: 20vw;
	left: -1px;
	top: 0px;
	height: 2727px;
	background: #017189;
`;

export const Img = styled.img`
	height: 42px;
	width: 188px;
	left: 64px;
	top: 32px;
	border-radius: 0px;
	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 1.5rem 0px;
`;

export const Details = styled.div`
	width: 246px;
	height: 202px;
	background: #2b899d;
	border-radius: 8px;
	padding: 1rem 1.5rem;

	hr {
		width: 100%;
		height: 0px;
		border: 0.5px solid #eafbff;
		margin: 1rem 0;
	}
`;

export const Dashboard = styled(Details)`
	height: 56px;
	background: #ffffff;

	h3 {
		font-family: inherit;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 150%;
		color: #017189;
	}
`;

export const NavMenu = styled.div`
	width: 246px;
	padding: 1rem 1.5rem;
	display: flex;
	color: #fff;
	flex-direction: column;

	img {
		display: inline-block;
	}
`;

export const NavLink = styled.button.attrs((props) => ({
	backColor: props.backCol || "transparent",
	textCol: props.textCol || "#fff",
}))`
	border: 0;
	outline: none;
	display: flex;
	align-items: center;
	border-radius: 8px;
	background: ${(props) => props.backColor};
	cursor: pointer;
	color: ${(props) => props.textCol};
	&:focus {
		outline: none;
	}
	h3 {
		font-family: inherit;
		font-style: normal;
		font-weight: 800;
		font-size: 14px;
		margin-left: 1rem;
		line-height: 150%;
	}
`;

export const Vector = styled.div`
	width: 32px;
	height: 32px;
	background: #ffffff;
	border-radius: 8px;
	display: flex;
	align-items: center;
	margin-right: 1rem;
	justify-content: center;
`;

export const WalletContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > div:first-child {
		font-family: inherit;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 21px;
		letter-spacing: 0em;
		text-align: left;
		color: #ffffff;

		p {
			line-height: 21px;

			margin: 0px 0px;
		}

		h6 {
			width: 85px;
			font-weight: bold;
			font-size: 16px;
			line-height: 150%;
			color: #ffffff;
			margin: 0;
		}
	}

	& > div:last-child {
		background: transparent;
		transform: rotate(-180deg);
		width: 16px;
		height: 16px;
	}
`;

export const ButtonContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	line-height: 22px;
	color: ${(props) => (props.white ? "#fff" : "#2B899D")};
	width: 47%;
	height: 40px;
	background: ${(props) => (props.pink ? "#fda4af" : "#FFFF")};
	border-radius: 4px;
`;

export const Refer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 24px 16px 24px 21px;
	width: 246px;
	height: 186px;
	background: #fff5e9;
	border-radius: 8px;

	& > div {
		display: flex;
		align-items: center;
		justify-content: center;
		font-style: normal;

		img {
			display: inline-block;
			margin-right: 1rem;
		}

		h6 {
			height: 24px;
			font-weight: bold;
			font-size: 16px;
			line-height: 150%;
			margin: 0px;
		}
		p {
			font-size: 14px;
			line-height: 150%;
			color: #2b4146;
			margin: 0;
		}
	}
`;

export const LightGreenBtn = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 16px;
	width: 100%;
	height: 56px;
	background: #017189;
	border-radius: 8px;
	border: none;
	outline: none;
	margin: 0.5rem 0;
	cursor: pointer;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 150%;

	/* button/text */

	color: #ffffff;

	&:focus {
		outline: none;
	}

	&:hover {
		background: #017189;
		opacity: 0.95;
	}
`;
