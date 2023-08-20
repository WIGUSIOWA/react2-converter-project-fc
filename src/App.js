import "./App.css";

import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Output from "./components/Output";
import Loader from "./components/Loader";

const App = () => {
	const [result, setResult] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	

	const getData = async (curr) => {
		setIsLoading(true);
		try {
			loaderHandler("flex");
			const res = await fetch(
				`https://api.nbp.pl/api/exchangerates/rates/a/${curr}/`
			);
			const data = await res.json();
			loaderHandler("none");
			return data;
		} catch (error) {
			loaderHandler("none");
			alert("An error occurred while fetching the data, please try later.");
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	const handleOnSubmit = async (event) => {
		event.preventDefault();
		console.log(event);

		const currency = event.target.currency.value;
		const amount = event.target.amount.value;
		console.log(currency, amount);

		if (isNaN(amount) || amount.trim() === "" || parseFloat(amount) < 0.01) {
			return alert("Wrong input.");
		}

		const data = await getData(currency);
		const exchange = data?.rates?.[0]?.mid;

		if (!exchange) {
			alert("An error occurred while fetching the data, please try later.");
		} else {
			setResult(`${(amount * exchange).toFixed(2)} PLN`);
		}
	};

	return (
		<div className="container">
			<Header></Header>
			<form onSubmit={handleOnSubmit}>
				<Input></Input>
				<Select></Select>
				<Button></Button>
			</form>
			<Output result={result}></Output>
			<Loader></Loader>
		</div>
	);
};

export default App;
