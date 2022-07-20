import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import "./App.css";

import { getData } from "./components/utils/data.utils.data";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonster);
  }, [monsters, searchField]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value);
  };
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="Search monster"
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
