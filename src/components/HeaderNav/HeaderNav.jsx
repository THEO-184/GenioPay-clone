import React, { useContext } from "react";
import { HeaderNavContainer, UserProfile } from "./components/components";
import { BiChevronDown } from "react-icons/bi";
import { AppContext } from "../../App";

import SearchBar from "./Searchbar";

const HeaderNav = () => {
	const { title, setTitle } = useContext(AppContext);
	return (
		<HeaderNavContainer>
			<h3>{title}</h3>
			<div className="flex-container">
				<SearchBar size={304} />
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
