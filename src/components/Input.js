import styles from "./Input.module.css";

const Input = (props) => {
	return (
		<input
			className={styles.container}
			// className={styles.input}
			type="number"
			placeholder={props.label}
			name="amount"
		/>
	);
};
export default Input;
