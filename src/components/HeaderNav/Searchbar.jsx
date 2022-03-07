import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { FiSearch } from "react-icons/fi";

const Search = styled("div")((props) => ({
	position: "relative",
	borderRadius: "16px",
	border: "1px solid #AAC0C5",
	backgroundColor: "#F8FCFC",
	"&:hover": {
		backgroundColor: "#F8FCFC",
	},
	marginLeft: 0,
	width: `${props.size}vw`,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",

		[theme.breakpoints.down("sm")]: {
			width: "18ch",
			// "&:focus": {
			// 	width: "20ch",
			// },
		},
	},
}));

const SearchBar = () => {
	return (
		<div>
			<Search>
				<SearchIconWrapper>
					<FiSearch />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder="Search…"
					inputProps={{ "aria-label": "search" }}
				/>
			</Search>
		</div>
	);
};

export default SearchBar;
