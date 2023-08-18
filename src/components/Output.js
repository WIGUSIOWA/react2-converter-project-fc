import styles from "./Output.module.css";

const Output = (props) => {
	return <output className={styles.output}>{props.result}</output>;
};
export default Output;
