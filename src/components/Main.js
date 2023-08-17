import "./Main.module.css";

const Main = (props) => {
	return (
		<div>
			<input type="value" placeholder={props.label} />
			<select>
				<option value="eur">EUR</option>
				<option value="usd">USD</option>
				<option value="chf">CHF</option>
			</select>
			<button className="convert-button">convert</button>
			<div className={props.output}>bbb</div>
		</div>
	);
};
export default Main;
