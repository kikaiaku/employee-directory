import React, { useContext } from "react";
import DataBody from "./body";
import "../style/table.css";
import DataAreaContext from "../utils/DataContext";

class table extends React.Component{
  render() {
    const context = useContext(DataAreaContext);
  return (

    <div className="dTable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    // context.handleSort(name.toLowerCase());
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <DataBody />
      </table>
    </div>
  );
}
}

export default table;