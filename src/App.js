import React from "react";

import { CardList } from "./components/CardList/CardList.component";
import { SearchBox } from "./components/SearchBox/SearchBox.component.jsx";
import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder="Search monster"
					handleChange={this.handleChange}
				/>
				<CardList monsterList={filteredMonsters} />
			</div>
		);
	}
}

export default App;
