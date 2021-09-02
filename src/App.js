import React from "react";

import { CardList } from "./components/CardList/CardList.component";
import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	monsterList() {
		return this.state.monsters.map((monster) => {
			return <h4 key={monster.name}>{monster.name}</h4>;
		});
	}

	render() {
		return (
			<div className="App">
				<CardList monsterList={this.state.monsters} />
				{/* {this.state.monsters.map((monster) => (
					<h4 key={monster.name}>{monster.name}</h4>
				))} */}
			</div>
		);
	}
}

export default App;
