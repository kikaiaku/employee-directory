import React, { useContext } from "react";

import DataContext from "../utils/DataContext";

const DobSearch = () => {
  const context = useContext(DataContext);

  return (
    <div className="searchBox">
       <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="">
          DOB
          </span>
      </div>
      <input type="date" className="form-control"   onChange={e => context.handleSearchChange(e)}/>
      <input type="date" className="form-control"   onChange={e => context.handleSearchChange(e)}/>
      </div>
    </div>
  );
};
export default DobSearch;