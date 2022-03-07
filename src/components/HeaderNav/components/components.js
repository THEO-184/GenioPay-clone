import styled from "styled-components";
import device from "../../../mediaQuery/mediaQuery";

export const HeaderNavContainer = styled.div`
	position: absolute;
	width: 70%;
	height: 93px;
	left: 25%;
	top: 0px;
	background: #fcfdfe;
	display: flex;
	padding: 0 1.2rem;
	align-items: center;

	.flex-container {
		display: flex;
		align-items: center;
		img,
		span {
			display: block;
			margin: 0.5rem;
		}
	}
	h3 {
		color: #001b21;
		margin-right: auto;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 100%;
		color: #001b21;
	}

	@media ${device.laptop} {
		h3 {
			font-size: 20px;
		}
	}
	@media ${device.tablet} {
		justify-content: center;
		width: 95.7vw;
		left: 0;

		h3 {
			font-size: 16px;
			margin-right: 10px;
		}

		.flex-container {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding-right: 20px;
		}
	}
	@media ${device.mobileL} {
		.flex-container {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding-right: 20px;

			span {
				display: none;
			}

			.bell,
			.tree {
				display: none;
			}
		}
	}
`;

export const UserProfile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-style: normal;
	width: 178px;
	border-radius: 16px;
	height: 56px;
	/* background: #fff; */

	.verified {
		padding-right: 5px;

		p {
			font-family: inherit;
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			line-height: 16px;

			color: #22c55e;
		}
	}
	& > img {
		display: 8block;
		margin: 1rem 0;
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

	@media ${device.tablet} {
		justify-content: flex-start;
		background: transparent;
	}

	@media ${device.mobileL} {
		& > img {
			display: block;
		}

		p {
			display: block;
		}

		h6 {
			display: none;
		}
	}
`;
