import styles from "./Header.module.css";
import wolfImage from "../assets/wolf250.jpg";

const Header = () => {
	return (
		<div>
			<div>
				<img src={wolfImage} alt="brand logo" className={styles.logo} />
			</div>
			<h3 className={styles.heading}>currency converter</h3>
		</div>
	);
};

export default Header;
