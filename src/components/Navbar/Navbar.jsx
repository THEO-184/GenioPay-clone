import React, { useState } from "react";
import styled from "styled-components";
import { RiDashboardFill } from "react-icons/ri";
import { BiWalletAlt } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsCurrencyDollar, BsPeople } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import getNavContent from "../../headerData";

const Navbar = () => {
	const navData = getNavContent();
	const [navId, setNavId] = useState(0);

	const handleChangeNavLink = (id) => {
		setNavId(id);
	};
	console.log(navId);

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
							<p>Awarded Points</p>
							<h6>35</h6>
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
			<NavMenu>
				{navData.map((nav) => {
					return (
						<NavLink
							key={nav.id}
							onClick={() => handleChangeNavLink(nav.id)}
							backCol={nav.id === navId ?? "#fff"}
							textCol={nav.id === navId ?? "#017189"}
						>
							{nav.path}
							<h3>{nav.word}</h3>
						</NavLink>
					);
				})}
			</NavMenu>
			<Refer>
				<div>
					<img src="/images/Bell.png" alt="bell" />
					<div>
						<h6>Refer and earn</h6>
						<p>Use the below link to invite customers</p>
					</div>
				</div>
				<button>Invite Friends</button>
			</Refer>
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
		margin: 1rem 0;
	}
`;

const Dashboard = styled(Details)`
	height: 56px;
	background: #ffffff;

	h3 {
		/* font-family: Nunito Sans; */
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 150%;
		color: #017189;
	}
`;

const NavMenu = styled.div`
	width: 246px;
	padding: 1rem 1.5rem;
	display: flex;
	color: #fff;
	flex-direction: column;

	img {
		display: inline-block;
	}
`;

const NavLink = styled.button.attrs((props) => ({
	backColor: props.backCol || "transparent",
	textCol: props.textCol || "#fff",
}))`
	border: 0;
	outline: none;
	display: flex;
	align-items: center;
	background: ${(props) => props.backColor};
	cursor: pointer;
	color: ${(props) => props.textCol};
	&:focus {
		outline: none;
	}
	h3 {
		/* font-family: Nunito Sans; */
		font-style: normal;
		font-weight: 800;
		font-size: 14px;
		margin-left: 1rem;
		line-height: 150%;
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
	width: 100%;
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
	width: 47%;
	height: 40px;
	background: ${(props) => (props.pink ? "#fda4af" : "#FFFF")};
	border-radius: 4px;
`;

const Refer = styled.div`
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

	button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 16px;
		width: 100%;
		height: 56px;
		background: #017189;
		border-radius: 8px;
		border: 0px;
		outline: none;
		margin: 0.5rem 0;
		/* font-family: Nunito Sans; */
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
	}
`;
export default Navbar;
