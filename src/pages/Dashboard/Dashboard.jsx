import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import {
	DashboardContainer,
	Container,
	BoxIcon,
	WalletContent,
	TransactionsContainer,
} from "./components/components";
import { BiChevronDown } from "react-icons/bi";
import Wallet from "../../components/Wallets/Wallet";
import {
	getWalletDetails,
	getQuickWallets,
	getTransactionHistory,
} from "../../headerData";

const Dashboard = () => {
	const walletDetails = getWalletDetails();
	const quickLinks = getQuickWallets();
	const transactionHistory = getTransactionHistory();

	return (
		<Container>
			<DashboardContainer>
				<div className="header">
					<h5>Wallet (5)</h5>
					<h6>View all wallets</h6>
				</div>
				<Box>
					<Grid container spacing={2}>
						{walletDetails.map((wallet) => {
							return <Wallet key={wallet.id} walletInfo={wallet} />;
						})}
					</Grid>
				</Box>
				<div className="quick-links">
					<h5>Quick Links</h5>
					<p>Your frequently used actions for Easy Access</p>
				</div>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexWrap: "wrap",
					}}
				>
					{quickLinks.map((links) => {
						return (
							<Paper
								key={links.id}
								elevation={1}
								sx={{
									width: "115px",
									height: "131px",
									display: "flex",
									justifyContent: "space-around",
									flexDirection: "column",
									alignItems: "center",
									height: "100%",
									cursor: "pointer",
									my: 1,
								}}
							>
								<BoxIcon backCol={links.backColor}>
									<img src={links.path} alt="" />
								</BoxIcon>
								<WalletContent>{links.word}</WalletContent>
							</Paper>
						);
					})}
				</Box>
				<div className="header">
					<div>
						<h5>Activity</h5>
						<h6>
							Month
							<BiChevronDown />
						</h6>
					</div>
					<h6>View Transaction History</h6>
				</div>
				<TransactionsContainer>
					{transactionHistory.map((item) => {
						return (
							<div key={item.id} className="transaction">
								<div className="img-container">
									<img src={item.path} alt="image" />
								</div>
								<div>
									<p>{item.word}</p>
									<h6>{item.price}</h6>
								</div>
							</div>
						);
					})}
				</TransactionsContainer>
			</DashboardContainer>
		</Container>
	);
};

export default Dashboard;
