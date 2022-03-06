import React from "react";
import { HeaderNavContainer, UserProfile } from "./components/components";
import { BiChevronDown } from "react-icons/bi";

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

export default HeaderNav;
