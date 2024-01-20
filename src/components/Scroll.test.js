import { shallow } from "enzyme";
import Scroll from "./Scroll";
import React from "react";

it("renders without crashing", () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
