import { Grid, Paper } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import {
	ContentContainer,
	Container,
	Header,
} from "../Dashboard/components/components";
import { LightGreenBtn } from "../../components/Navbar/NavComponents/components";
import LeftGrid from "./LeftGrid/LeftGrid";
import RightGrid from "./RightGrid";

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
					<RightGrid />
				</Grid>
			</ContentContainer>
		</Container>
	);
};

export default Wallet;
