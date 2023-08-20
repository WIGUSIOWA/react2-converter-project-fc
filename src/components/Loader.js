import styles from "./Loader.module.css";
const Loader = document.querySelector(".loader-container");
const loaderHandler = (val) => {
	Loader.style.display = val;
};
export default Loader;
