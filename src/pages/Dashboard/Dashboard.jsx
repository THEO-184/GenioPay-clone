import React from "react";
import styled from "styled-components";
import { Box, Grid, Paper } from "@mui/material";
import Wallet from "../../components/Wallets/Wallet";
import { getWalletDetails, getQuickWallets } from "../../headerData";

const Dashboard = () => {
	const walletDetails = getWalletDetails();
	const quickLinks = getQuickWallets();

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
			</DashboardContainer>
		</Container>
	);
};

const Container = styled.main`
	position: absolute;
	width: 73vw;
	left: 23.5vw;
	top: 93px;
	background: #fcfdfe;

	.header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-style: normal;
		font-weight: bold;

		h6 {
			font-size: 16px;
			line-height: 150%;
			color: #017189;
		}

		h5 {
			font-size: 21px;
			line-height: 150%;
		}
	}
`;

const DashboardContainer = styled.section`
	background: #fff;
	width: 90%;
	margin: 1rem auto;
	height: 1065px;
	border-radius: 16px;
	padding: 0 1.2rem;
	padding-right: 2rem;
	font-style: normal;

	.quick-links {
		margin-top: 5rem;
		margin-bottom: 2rem;

		h5 {
			font-weight: bold;
			font-size: 21px;
			color: #001b21;
			margin: 0;
		}

		p {
			font-size: 16px;
			color: #94a3b8;
		}
	}
`;

const BoxIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	margin-top: 0.5rem;
	width: 25px;
	height: 25px;
	border-radius: 200px;
	background: ${(props) => props.backCol};
`;

const WalletContent = styled.h5`
	width: 81px;
	height: 42px;
	font-size: 14px;
	text-align: center;
`;
export default Dashboard;
