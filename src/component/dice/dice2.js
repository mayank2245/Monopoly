import React from "react";
import Dice from "react-dice-roll";

const DiceRoll2 = ({ onChange2 }) => {
	const roll = (val) => {
		onChange2(val);
	};
	return <Dice onRoll={roll} size={50} />;
};

export default DiceRoll2;
