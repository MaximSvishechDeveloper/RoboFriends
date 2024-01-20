import { shallow } from "enzyme";
import CardList from "./CardList"
import React from "react";

it("expect to render cardList", () => {
    const mockRobots = [{
        id:1,
        name:'John Snow',
        username: 'JohnJohn',
        email:'john@gmail.com'
    }]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
