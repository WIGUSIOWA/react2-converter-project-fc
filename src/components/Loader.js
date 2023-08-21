import styles from "./Loader.module.css";

const Loader = ({ isLoading }) => {
	return (
		<div
			className={`${styles["loader-container"]} ${
				isLoading ? styles["active"] : ""
			}`}
		>
			<div className={styles["loader"]}></div>
		</div>
	);
};

export default Loader;
