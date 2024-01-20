import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import SearchBox from "./SearchBox";
import searchReducer, { search } from "../state/search/searchSlice";

describe("SearchBox Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        search: searchReducer,
      },
    });

    component = mount(
      <Provider store={store}>
        <SearchBox />
      </Provider>
    );
  });

  it("renders the search box correctly", () => {
    const searchInput = component.find('input[type="search"]');
    expect(searchInput).toHaveLength(1);
  });

  it("dispatches the search action on input change", () => {
    const searchInput = component.find('input[type="search"]');
    searchInput.simulate("change", { target: { value: "test" } });

    const dispatchedActions = store.getState().search;

    expect(dispatchedActions).toEqual({ value: "test" });
  });

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
