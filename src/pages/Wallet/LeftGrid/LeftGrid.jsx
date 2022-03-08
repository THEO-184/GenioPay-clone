import React, { useState } from "react";
import { Tabs, TabBtn, WalletDetails } from "./components";
import { Grid, Paper, Box, Avatar } from "@mui/material";
import { BiChevronDown } from "react-icons/bi";
import SearchBar from "../../../components/HeaderNav/Searchbar";
import { Header } from "../../Dashboard/components/components";
import { getWalletDetails, getTabContents } from "../../../headerData";

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
					<SearchBar size={15} />
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
								<Avatar
									src={wallet.path}
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

export default LeftGrid;
