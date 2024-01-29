import React, { ReactElement } from "react";
import Card from "./Card";

export interface Robot {
  id: string;
  name: string;
  email: string;
}

interface CardListProps {
  robots: Robot[];
}

const CardList: React.FC<CardListProps> = ({ robots }) => {
  return (
    <>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </>
  );
};

export default CardList;
