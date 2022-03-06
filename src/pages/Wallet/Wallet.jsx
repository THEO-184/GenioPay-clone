import { Grid, Paper } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import {
	ContentContainer,
	Container,
	Header,
} from "../Dashboard/components/components";
import { LightGreenBtn } from "../../components/Navbar/NavComponents/components";
import LeftGrid from "./LeftGrid";

const Wallet = () => {
	return (
		<Container>
			<ContentContainer>
				<Header>
					<h5>Your Wallet(s)</h5>
					<LightGreenBtn className="create-wallet">
						<AiOutlinePlus
							color="#fff"
							style={{
								paddingRight: "10px",
								fontWeight: "bold",
							}}
						/>{" "}
						Create New Wallet
					</LightGreenBtn>
				</Header>
				<Grid container spacing={2}>
					<LeftGrid />
					<Grid item xs={12} md={8}>
						<Paper sx={{ p: 1, maxWidth: "100%" }}>2</Paper>
					</Grid>
				</Grid>
			</ContentContainer>
		</Container>
	);
};

export default Wallet;
