import styles from "./Output.module.css";
// import { useState } from "react";

const Output = (props) => {
	// const [value, setValue] = useState("");

	return <output>{props.result}</output>;
};
export default Output;
