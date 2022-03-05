import React from "react";
import styled from "styled-components";

const Navbar = () => {
	return (
		<NavContainer>
			<Img src="/images/logo.png" alt="logo" />
			<Details>
				<div>
					<div>
						<p>Wallet balance</p>
						<h6>$1500.00</h6>
					</div>
				</div>
			</Details>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px;

	position: absolute;
	width: 316px;
	height: 100vh;
	left: -1px;
	top: 0px;

	background: #017189;
`;

const Img = styled.img`
	height: 42px;
	width: 188px;
	left: 64px;
	top: 32px;
	border-radius: 0px;
	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 10px 0px;
`;

const Details = styled.div`
	width: 246px;
	height: 202px;
	background: #2b899d;
	border-radius: 8px;

	& > div:first-child {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > div {
			//styleName: Genio/text/caption/regular;
			/* font-family: Nunito Sans; */
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 21px;
			letter-spacing: 0em;
			text-align: left;
			color: #ffffff;

			p {
				position: static;
				width: 97px;
				height: 21px;
				left: 0px;
				top: 0px;
				line-height: 21px;
				flex: none;
				order: 0;
				flex-grow: 0;
				margin: 0px 0px;
			}

			h6 {
				position: static;
				width: 85px;
				height: 24px;
				left: 0px;
				top: 21px;

				font-weight: bold;
				font-size: 16px;
				line-height: 150%;
				color: #ffffff;
				flex: none;
				order: 1;
				flex-grow: 0;
				margin: 0;
			}
		}
	}
`;
export default Navbar;
