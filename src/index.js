import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Square from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<Square className="big-square" label="BIG Square" />
		<Square className="less-square" label="A less Square" />
		<Square className="small-square" label="The smallest one" />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
