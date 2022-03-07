import React from "react";

import { Paper, Grid, Box, Typography } from "@mui/material";
import { styled as MatStyled } from "@mui/material/styles";

const Item = MatStyled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	border: "1px solid #F1F5F9",
	borderRadius: "16px",
}));

const Wallet = ({ walletInfo }) => {
	const { account_name, currency, price, backCol } = walletInfo;
	return (
		<Grid item xs={12} md={6} lg={4} sx={{ height: "auto", p: 1.5 }}>
			<Item elevation={0} sx={{ height: "140px", p: 1.5, background: backCol }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-around",
						flexDirection: "column",
						alignItems: "start",
						height: "100%",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							width: "100%",
						}}
					>
						<div>
							<Typography variant="h6" sx={{ fontSize: "16px" }}>
								{account_name}
							</Typography>
							<Typography variant="body1">{currency}</Typography>
						</div>
						<img src="/images/flag.png" alt="flag" />
					</Box>
					<Typography variant="h6" sx={{ fontWeight: "bold" }}>
						{price}
					</Typography>
				</Box>
			</Item>
		</Grid>
	);
};

export default Wallet;
