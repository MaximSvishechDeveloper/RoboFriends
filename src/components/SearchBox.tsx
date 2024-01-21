import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../state/search/searchSlice";
import { RootState } from "../store";

const SearchBox: React.FC = () => {
  const searchField = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(search(newValue));
  };

  return (
    <div className="pa2">
      <input
        value={searchField}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBox;
