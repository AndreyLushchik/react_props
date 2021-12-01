import logo from "./logo.svg";
import "./App.css";

function Square({ label, className }) {
	return <div className={className}>{label}</div>;
}

export default Square;
