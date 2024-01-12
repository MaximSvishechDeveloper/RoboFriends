import React, {useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import {fetchAsync} from "../state/robots/robotsSlice"
import Scroll from "../components/Scroll";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.search.value);
  const robots = useSelector((state) => state.robots.robots )

  useEffect(() => {
    dispatch(fetchAsync());
  },[dispatch])

  const filteredRobots = robots.filter((robot) => {
    return robot.name
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });

  if (robots.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox/>
        <Scroll>
            <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
