import React from "react";

import { Card } from "../Card/Card.component.jsx";
import "./CardList.styles.css";

export const CardList = ({ monsterList }) => {
	const monsters = () => {
		return monsterList.map((monster) => {
			return <Card key={monster.id} monster={monster} />;
		});
	};

	return <div className="card-list">{monsters()}</div>;
};
