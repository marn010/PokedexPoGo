import { useContext } from "react";
import GlobalState from "../../globalState";

import "./SearchBar.css";

const SearchBar = () => {
  const { state: globalState } = useContext(GlobalState);
  const { updateSearchValue } = useContext(GlobalState);
  const searchAnyElse = (e) => {
    e.preventDefault();
    console.log(globalState.searchValue);
    /* setSearchValue(globalState.searchValue); */
    /* updateSearchValue(searchValue.toLowerCase()); */
  };
  return (
    <div className="SearchBar">
      <form inline onSubmit={searchAnyElse}>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => updateSearchValue(e.target.value.toLowerCase())}
          placeholder="Search..."
          className=""
        />
      </form>
    </div>
  );
};
export default SearchBar;
