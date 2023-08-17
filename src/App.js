// import "./App.css";
import Header from "./components/Header";
import styles from "./components/Container.module.css";
import Main from "./components/Main";
// import styles from "./components/Main.module.css";
const App = () => {
	return (
		<div className={styles.container}>
			<Header></Header>
			<Main label="enter value"></Main>
		</div>
	);
};

export default App;
