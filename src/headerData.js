import { RiDashboardFill } from "react-icons/ri";
import { BiWalletAlt } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsCurrencyDollar, BsPeople } from "react-icons/bs";
const contentObj = [
	{
		id: 1,
		path: <RiDashboardFill />,
		word: "Dashboard",
	},
	{
		id: 2,
		path: <BiWalletAlt />,
		word: "Wallet",
	},
	{
		id: 3,
		path: <AiOutlineCreditCard />,
		word: "Cards",
	},
	{
		id: 4,
		path: <BsCurrencyDollar />,
		word: "FX Center",
	},
	{
		id: 5,
		path: <BsPeople />,
		word: "Beneficiaries",
	},
];

const getNavContent = () => {
	return contentObj;
};

export default getNavContent;
