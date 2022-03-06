import React from "react";
import { BiChevronDown } from "react-icons/bi";
import styled from "styled-components";
import SearchBar from "./Searchbar";

const HeaderNav = () => {
	return (
		<HeaderNavContainer>
			<h3>Welcome, Huss Smith</h3>
			<div className="flex-container">
				<SearchBar />
				<img src="/images/tree.png" alt="tree" />
				<span>0 planted</span>
				<img src="/images/notification.png" alt="notification" />
				<UserProfile>
					<img src="/images/User.png" alt="User" />
					<div className="verified">
						<p>Verfied</p>
						<h6>Huss smith</h6>
					</div>
					<BiChevronDown />
				</UserProfile>
			</div>
		</HeaderNavContainer>
	);
};

const HeaderNavContainer = styled.div`
	position: absolute;
	width: 75vw;
	height: 93px;
	left: 23.5vw;
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
		margin-right: 30px;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 100%;
		color: #001b21;
	}
`;

const UserProfile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-style: normal;
	width: 178px;
	border-radius: 16px;
	height: 56px;
	background: #fff;

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
`;
export default HeaderNav;
