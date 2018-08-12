import React from "react";
import Header from "components/Header.js";

export default props => {
	return (
		<div>
			<Header />
			{props.children}
		</div>
	);
};
