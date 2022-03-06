import React, { useState } from "react";
import { Grid, Paper, Box } from "@mui/material";
import { BiChevronDown } from "react-icons/bi";
import SearchBar from "../../components/HeaderNav/Searchbar";
import { Header } from "../Dashboard/components/components";
import styled from "styled-components";
import { getWalletDetails, getTabContents } from "../../headerData";

const LeftGrid = () => {
	const walletDetals = getWalletDetails();
	const tabContents = getTabContents();
	const [tabId, setTabId] = useState(1);
	const [activeContent, setActiveContent] = useState(1);
	const handleClick = (id) => {
		setTabId(id);
	};

	return (
		<Grid item xs={12} md={4}>
			<Paper sx={{ maxWidth: "100%", p: 1 }}>
				<Box
					sx={{
						maxWidth: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<SearchBar size={200} />
					<Header>
						<h6 style={{ marginLeft: "15px" }}>
							All
							<BiChevronDown />
						</h6>
					</Header>
				</Box>

				{/* Tabs */}
				<Tabs>
					{tabContents.map((tab) => {
						return (
							<TabBtn
								key={tab.id}
								onClick={() => handleClick(tab.id)}
								active={tabId === tab.id}
							>
								{tab.word}
							</TabBtn>
						);
					})}
				</Tabs>
				{walletDetals.map((wallet) => {
					return (
						<WalletDetails key={wallet.id} active={wallet.id === activeContent}>
							<div>
								<img
									src="/images/flag.png"
									alt="flag"
									style={{
										width: "30px",
										height: "30px",
										marginRight: "10px",
									}}
								/>
								<div>
									<h5>{wallet.account_name}</h5>
									<span>{wallet.currency}</span>
								</div>
							</div>
							<div>
								<h6>{wallet.price}</h6>
							</div>
						</WalletDetails>
					);
				})}
			</Paper>
		</Grid>
	);
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

const WalletDetails = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	background: ${(props) => (props.active ? "#eef7f9" : "transparent")};
	border-radius: 8px;
	padding: 16px;
	& > div:first-child {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		& > div {
			h5 {
				margin: 0;
				padding: 0;
			}
			span {
				margin: 0;
				padding: 0;
			}
		}
	}

	h6 {
		margin: 0;
	}
`;

export default LeftGrid;
