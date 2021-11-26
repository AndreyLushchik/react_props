import logo from "./logo.svg";
import "./App.css";

function Square({ label, className }) {
	return <div class={`${className}`}>{label}</div>;
}

export default Square;
