import React, { useContext } from "react";
import {
	HeaderNavContainer,
	UserProfile,
	Menu,
	NavContainer,
} from "./components/components";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { AppContext } from "../../App";

import SearchBar from "./Searchbar";

const HeaderNav = () => {
	const { title } = useContext(AppContext);

	return (
		<HeaderNavContainer>
			<h3>{title}</h3>
			<div className="flex-container">
				<SearchBar size={25} />
				<img src="/images/tree.png" alt="tree" className="tree" />
				<span>0 planted</span>
				<img
					src="/images/notification.png"
					alt="notification"
					className="bell"
				/>
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

export default HeaderNav;
