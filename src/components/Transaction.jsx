import React, { useContext } from "react";
import { Context } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
import styled from "styled-components";

const Amount = styled.span`
	display: flex;
	justify-content: flex-end;
	margin-top: -25px;
`;
const Button = styled.button`
	margin-left: -30px;
	margin-top: -25px;
	position: absolute;
	padding: 2px 5px;
	font-size: 20px;
	border: none;
	background-color: #e74c3c;
	color: #fff;
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.5s ease;
`;
const List = styled.li`
	list-style-type: none;
	background-color: ${({ theme }) => theme.body};
	margin: 10px 0;
	font-size: 20px;
	padding: 10px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	position: relative;
	&:hover {
		Button {
			opacity: 1;
		}
	}
`;

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(Context);

	const sign = transaction.amount < 0 ? "-" : "+";

	return (
		<List className={transaction.amount < 0 ? "minus" : "plus"}>
			{transaction.name}
			<Amount>
				{sign}${numberWithCommas(Math.abs(transaction.amount))}
			</Amount>
			<Button onClick={() => deleteTransaction(transaction.id)}>x</Button>
		</List>
	);
};

export default Transaction;
