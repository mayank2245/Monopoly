import React,{useState} from 'react'
import './App.css';
import DiceRoll1 from './component/dice/dice1';
import DiceRoll2 from "./component/dice/dice2";
import Arrow from './arrow.png'
import Jail from './Jail.png'


function App() {

  const [diceOne, setDiceOne] = useState(0)
  const [diceTwo, setDiceTwo] = useState(0);

  const onRoll1 = (val) =>{
    console.log(val,'parent');
    setDiceOne(val)
  }
  const onRoll2 = (val) => {
    console.log(val, "parent");
    setDiceTwo(val)
  };

  const arr = [
		{ id: 1, name: "Central Hills", color: "red" },
		{ id: 2, name: "Hell's Kitchen", color: "red" },
		{ id: 3, name: "Change" },
		{ id: 4, name: "Chelsa", color: "red" },
		{ id: 5, name: "West Village", color: "red" },
		{ id: 6, name: "LA GUARDIA"},
		{ id: 7, name: "GRAMERCY", color: "yellow" },
		{ id: 9, name: "Change" },
		{ id: 8, name: "CHINATOWN", color: "yellow" },
		{ id: 10, name: "GREENWICH VILLAGE", price: "$200", color: "yellow" },
		{ id: 11, name: "Go"},
	];
  const arr1 = [
		{ id: 1, name: "Park Slope", color: "orange" },
		{ id: 2, name: "Clinton Hill", color: "orange" },
		{ id: 3, name: "Mta", color: "purple" },
		{ id: 4, name: "Dumbo", color: "orange" },
		{ id: 5, name: "Newyork" },
		{ id: 6, name: "Astoria", color: "purple" },
		{ id: 7, name: "Rego Park", color: "purple" },
		{ id: 8, name: "Change" },
		{ id: 9, name: "Forest Hills", price: "$200", color: "purple" },
	];
  const arr2 = [
		{ id: 1, image: "jail-bars-36551.png", alt: "Jail" },
		{ id: 2, name: "BushWick", color: "skyblue" },
		{ id: 3, name: "Brownsville", color: "skyblue" },
		{ id: 4, name: "Change" },
		{ id: 5, name: "Canarise", color: "skyblue" },
		{ id: 6, name: "Jfk" },
		{ id: 7, name: "Governors Island", color: "blue" },
		{ id: 8, name: "SheepsHead Bay", color: "purple" },
		{ id: 9, name: "Change" },
		{ id: 10, name: "GraveSend", price: "$200", color: "purple" },
		{ id: 11, name: "Go", color: "red" },
	];
  const arr3 = [
		{ id: 1, name: "Times Square", color: "green" },
		{ id: 2, name: "Change"},
		{ id: 3, name: "MidTown", color: "green" },
		{ id: 4, name: "Colombus Circle", color: "green" },
		{ id: 5, name: "Albany"},
		{ id: 6, name: "Con Edison"},
		{ id: 7, name: "Tribeca", color: "lightblue" },
		{ id: 8, name: "Change" },
		{ id: 9, name: "Wall Street", price: "$200", color: "lightblue" },
	];

  const Total = diceOne && diceTwo >0 ?diceOne+diceTwo:''
  console.log(Total);
  return (
		<div style={{ margin: "1rem" }}>
			<div style={{ display: "flex" }}>
				{arr.map((a, i) => {
					return (
						<div
							key={i}
							className='App'
							style={{
								border: "0.5px solid",
								alignItems: "center",
								width: "7rem",
								height: "auto",
								justifyContent: "center",
								padding: "0.1rem",
								backgroundColor: a.color,
							}}
						>
							<p>{a.name}</p>
						</div>
					);
				})}
			</div>
			<div style={{ position: "absolute", right: "1rem" }}>
				{arr1.map((a, i) => {
					return (
						<div
							key={i}
							className='App'
							style={{
								border: "0.5px solid",
								alignItems: "center",
								width: "7rem",
								height: "3.49rem",
								justifyContent: "center",
								backgroundColor: a.color,
							}}
						>
							<p>{a.name}</p>
						</div>
					);
				})}
			</div>
			<p
				style={{
					position: "absolute",
					justifyContent: "center",
					left: "48%",
					top: "65%",
				}}
			>
				Monopoly
			</p>
			<div style={{ position: "absolute", left: "45%", top: "40%" }}>
				<DiceRoll1 onChange1={onRoll1} />
			</div>
			<div style={{ position: "absolute", left: "55%", top: "40%" }}>
				<DiceRoll2 onChange2={onRoll2} />
			</div>
			<p
				style={{
					position: "absolute",
					justifyContent: "center",
					left: "48%",
					top: "55%",
				}}
			>
				Total: {Total}
			</p>
			<div>
				{arr3.map((a, i) => {
					return (
						<div
							key={i}
							className='App'
							style={{
								border: "0.5px solid",
								alignItems: "center",
								width: "7rem",
								height: "auto",
								justifyContent: "center",
								backgroundColor: a.color,
							}}
						>
							<p>{a.name}</p>
						</div>
					);
				})}
			</div>

			<div style={{ display: "flex" }}>
				{arr2.map((a, i) => {
					return (
						<div
							key={i}
							className='App'
							style={{
								border: "0.5px solid",
								alignItems: "center",
								justifyContent: "center",
								width: "7rem",
								height: "auto",
								padding: "0.1rem",
								backgroundColor: a.color,
							}}
						>
							<img src={a.image} alt={a.alt} />
							<p>{a.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
