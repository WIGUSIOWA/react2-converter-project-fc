import "./App.css";

// import { useState } from "react";
// import Container from "./components/Container";
import Header from "./components/Header";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Output from "./components/Output";

const App = () => {
	return (
		<div className="container">
			<Header></Header>
			<Input label="enter value"></Input>
			<Select></Select>
			<Button></Button>
			<Output></Output>
		</div>
	);
};

export default App;
