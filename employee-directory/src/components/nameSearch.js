
import React, { useContext } from "react";
import "../style/nameSearch.css";
import DataContext from "../utils/DataContext";

class nameSearch extends React.Component {
  render() {
    const context = useContext(DataContext);
    return (
      <div className="searchBox">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search
            </span>
          </div>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="name"
            aria-label="Search"
            onChange={e => context.handleSearchChange(e)}
          />
        </div>
      </div>
    );
  }
}
export default nameSearch;