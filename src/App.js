// import "./App.css";
import Header from "./components/Header";
import styles from "./components/Container.module.css";

const App = () => {
	return (
		<div className={styles.container}>
			<h2>Project React2 zaliczeniowy FC converter</h2>
			<Header></Header>

			<button>Kliknij</button>
		</div>
	);
};

export default App;
