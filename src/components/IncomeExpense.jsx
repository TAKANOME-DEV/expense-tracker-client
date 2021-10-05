import React, { useContext } from "react";
import { Context } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
import styled from "styled-components";

const Container = styled.div`
	background-color: ${({ theme }) => theme.body};
	display: flex;
	justify-content: center;
	margin: 20px 0;
	padding: 20px;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;
const Income = styled.div`
	padding: 15px 35px;
	border-right: 2px solid #dedede;
`;
const Expense = styled.div`
	padding: 15px 35px;
`;
const Title = styled.h3`
	text-transform: uppercase;
	font-size: 20px;
`;
const IncAmount = styled.p`
	color: #2ecc71;
	font-size: 23px;
`;
const ExpAmount = styled.p`
	color: #c0392b;
	font-size: 23px;
`;

const IncomeExpense = () => {
	const { transactions } = useContext(Context);

	const amounts = transactions.map((transaction) => transaction.amount);

	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	const expense = amounts
		.filter((num) => num < 0)
		.reduce((acc, num) => (acc += num), 0)
		.toFixed(2);

	return (
		<Container>
			<Income>
				<Title>Income</Title>
				<IncAmount>${numberWithCommas(income)}</IncAmount>
			</Income>
			<Expense>
				<Title>Expense</Title>
				<ExpAmount>${numberWithCommas(expense)}</ExpAmount>
			</Expense>
		</Container>
	);
};

export default IncomeExpense;
