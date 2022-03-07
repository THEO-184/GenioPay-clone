import React, { useContext } from "react";
import { AppContext } from "../App";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineClose } from "react-icons/ai";

const CloseBtn = () => {
	return (
		<AiOutlineClose
			color="#000"
			size={"2rem"}
			style={{ cursor: "pointer", zIndex: "20" }}
		/>
	);
};

export const CloseIcon = styled.div`
	width: 30px;
	height: 30px;
	position: fixed;
	background: yellow;
	display: flex;
	align-items: center;
	justify-content: center;
	left: 370px;
	top: 20px;
	z-index: 100;
`;

export default CloseBtn;
