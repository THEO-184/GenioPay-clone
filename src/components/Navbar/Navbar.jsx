import React from "react";
import styled from "styled-components";

const Navbar = () => {
	return (
		<NavContainer>
			<Img src="/images/logo.png" alt="logo" />
			<Details>
				<WalletContainer>
					<div>
						<Vector>
							<img src="/images/Vector.png" alt="vector" />
						</Vector>
						<div>
							<p>Wallet balance</p>
							<h6>$1500.00</h6>
						</div>
					</div>
					<div>1</div>
				</WalletContainer>
				<hr />
				<WalletContainer>
					<div>
						<Vector>
							<img src="/images/star.png" alt="star" />
						</Vector>
						<div>
							<p>Wallet balance</p>
							<h6>$1500.00</h6>
						</div>
					</div>
					<div>1</div>
				</WalletContainer>
				<hr />
				<ButtonContainer>
					<Button white pink>
						Pay-In
					</Button>
					<Button green>Pay-Out</Button>
				</ButtonContainer>
			</Details>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem 1.5rem;

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
	margin: 1.5rem 0px;
`;

const Details = styled.div`
	width: 246px;
	height: 202px;
	background: #2b899d;
	border-radius: 8px;
	padding: 1rem 1.5rem;

	hr {
		width: 100%;
		height: 0px;
		border: 0.5px solid #eafbff;
	}
`;

const Vector = styled.div`
	width: 32px;
	height: 32px;
	background: #ffffff;
	border-radius: 8px;
	display: flex;
	align-items: center;
	margin-right: 1rem;
	justify-content: center;
`;

const WalletContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > div:first-child {
		//styleName: Genio/text/caption/regular;
		/* font-family: Nunito Sans; */
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
		background: #ffffff;
		transform: rotate(-180deg);
		width: 16px;
		height: 16px;
	}
`;

const ButtonContainer = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	line-height: 22px;
	color: ${(props) => (props.white ? "#fff" : "#2B899D")};
	width: 40%;
	height: 40px;
	background: ${(props) => (props.pink ? "#fda4af" : "#FFFF")};
	border-radius: 4px;
`;
export default Navbar;
