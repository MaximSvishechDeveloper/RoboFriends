import React, { useEffect, useMemo } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../state/robots/robotsSlice";
import Scroll from "../components/Scroll";
import "./App.css";
import Header from "../components/Header";
import { AppDispatch, RootState } from "../store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const searchField = useSelector((state: RootState) => state.search.value);
  const robots = useSelector((state: RootState) => state.robots.robots);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchAsync());
      } catch (error) {
        console.error("Error dispatching fetchAsync:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  const filteredRobots = useMemo(() => {
    return robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
  }, [robots, searchField]);

  if (robots.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="tc">
        <Header />
        <SearchBox />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
