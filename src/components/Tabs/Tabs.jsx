import React, { useState } from "react";
import styled from "styled-components";

const Tab = () => {
	const [tabId, setTabId] = useState(1);
	const handleClick = (id) => {
		setTabId(id);
	};
	return <div>Tabs</div>;
};

const Tabs = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
`;

const TabBtn = styled.button`
	border: 0px;
	outline: none;
	background: transparent;
	padding: 5px 10px;
	border-bottom: ${(props) =>
		props.active ? "2px solid #017189" : "2px solid transparent"};
	cursor: pointer;
	&:not(:last-child) {
		margin-right: 10px;
	}

	&:focus {
		outline: none;
	}
`;

export default Tab;
