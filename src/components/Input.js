import styles from "./Input.module.css";

const Input = (props) => {
	return (
		<input
			className={styles.container}
			type="value"
			placeholder={props.label}
		/>
	);
};
export default Input;
