import React from 'react'
import Dice from "react-dice-roll";

const DiceRoll1 = ({onChange1}) =>{
    const roll = (val) =>{
        onChange1(val)
    }
    return <Dice onRoll={roll} size={50} />;
}

export default DiceRoll1;

