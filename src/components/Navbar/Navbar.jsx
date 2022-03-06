import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import {
	NavContainer,
	Img,
	Details,
	Dashboard,
	NavMenu,
	NavLink,
	Vector,
	WalletContainer,
	ButtonContainer,
	Button,
	Refer,
} from "./NavComponents/components";
import getNavContent from "../../headerData";

const Navbar = () => {
	const navData = getNavContent();
	const [navId, setNavId] = useState(1);

	const handleChangeNavLink = (id) => {
		setNavId(id);
	};

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
					<div>
						<AiOutlineEye color="#fff" />
					</div>
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
					<div>
						<AiOutlineEye color="#fff" />
					</div>
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

export default Navbar;
