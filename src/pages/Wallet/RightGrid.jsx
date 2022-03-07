import React, { useState } from "react";
import { Tabs, TabBtn } from "./LeftGrid/components";
import { Grid, Paper } from "@mui/material";
import { WalletDetails } from "./LeftGrid/components";
import styled from "styled-components";
import {
	getExpensesDetails,
	getPaymentOptions,
	getWalletTabContents,
	getTransactionHistory,
} from "../../headerData";
import { TransactionsContainer } from "../Dashboard/components/components";
import { BsArrowLeftRight } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

import { Header } from "../Dashboard/components/components";
import { LightGreenBtn } from "../../components/Navbar/NavComponents/components";
import device from "../../mediaQuery/mediaQuery";

const RightGrid = () => {
	const expensesDetails = getExpensesDetails();
	const paymentOptions = getPaymentOptions();
	const tabContents = getWalletTabContents();
	const transactionHistory = getTransactionHistory();
	const [tabId, setTabId] = useState(1);

	const handleClick = (id) => {
		setTabId(id);
	};

	return (
		<Grid item xs={12} md={8}>
			<Paper sx={{ p: 1 }}>
				<DefaultWallet>
					<WalletDetails>
						<div>
							<div>
								<h5>
									<p>
										<span></span>
										Active
									</p>
									Euro Wallet
								</h5>
								<span>Eur</span>
							</div>
						</div>
						<div>
							<h6>$200,000.50</h6>
						</div>
					</WalletDetails>
				</DefaultWallet>
				<div className="expenses-details">
					{expensesDetails.map((expense) => {
						return (
							<div key={expense.id}>
								<span>{expense.word}</span>
								<span>${expense.total.toFixed(2)}</span>
							</div>
						);
					})}
				</div>
				<PaymentOptionsContainer>
					{paymentOptions.map((item) => {
						return (
							<PaymentOptions key={item.id}>
								<img src={item.path} alt="img" />
								<h6>{item.word}</h6>
							</PaymentOptions>
						);
					})}
					<PaymentOptions>
						<BsArrowLeftRight style={{ marginRight: "10px" }} />
						<h6>Exchange</h6>
					</PaymentOptions>
				</PaymentOptionsContainer>
				<GridContent>
					<Header>
						<h6 style={{ marginLeft: "1.3rem" }}>
							More Options
							<BiChevronDown />
						</h6>
					</Header>

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
					<Header>
						<h6 style={{ marginLeft: "1.3rem" }}>
							Month
							<BiChevronDown />
						</h6>
					</Header>
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
				</GridContent>
			</Paper>
		</Grid>
	);
};

const DefaultWallet = styled.div`
	width: 90%;
	margin: auto;
	border: 1px solid #f3f4f6;
	box-sizing: border-box;
	border-radius: 16px;

	@media ${device.tablet} {
		width: 80vw;
	}

	${WalletDetails} {
		align-items: center;
		& span {
			font-weight: bold;
			font-size: 16px;

			color: #0a6375;
		}

		& h5 {
			color: #001b21;
			p {
				margin: 0;
				font-size: 12px;
				line-height: 16px;
				color: #22c55e;

				& span {
					display: inline-block;
					line-height: 10px;
					width: 6px;
					height: 6px;
					border-radius: 50px;
					margin-right: 2px;
					background: #22c55e;
				}
			}
		}

		& h6 {
			font-weight: 800;
			font-size: 40px;
			color: #001b21;

			@media ${device.tablet} {
				font-size: 20px;
			}
		}
	}

	& + div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 100%;
		flex-wrap: wrap;
		margin-top: 1rem;
		width: 90%;
		margin: 1rem auto;

		@media ${device.tablet} {
			width: 80vw;
		}

		& > div {
			padding: 10px 0;

			& span {
				padding-right: 10px;
				font-size: 16px;

				@media ${device.tablet} {
					font-size: 12px;
				}

				color: #001b21;
			}

			& span:first-child {
				font-weight: normal;
				font-size: 14px;
				color: #2b4146;
			}
		}
	}
`;

const PaymentOptionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin: auto;

	@media ${device.tablet} {
		width: 80vw;
	}
`;

const PaymentOptions = styled(LightGreenBtn)`
	border: 1px solid #017189;
	flex-basis: 31%;
	background: transparent;
	background: none;
	color: #017189;

	h6 {
		font-size: 16px;
	}

	img {
		display: inline-block;
		margin-right: 10px;
	}

	&:hover {
		background: transparent;
	}
`;

const GridContent = styled.article`
	width: 90%;
	margin: auto;

	@media ${device.tablet} {
		${Header} {
			display: none;
		}
	}

	${Header} {
		justify-content: flex-end;
	}

	${Tabs} {
		max-width: 300px;
	}

	${TransactionsContainer} {
		/* margin: 3rem 0; */
		justify-content: flex-start;

		& > div:first-child {
			margin-left: 0;
		}

		& > div {
			& > div:last-child {
				p {
					font-size: 12px;
				}
			}
		}
	}
`;

export default RightGrid;
