import React, { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";

import './_count.css'

function Count( ) {
  const {notes} =useContext(DataContext)
  return (
    <div className="count">
      <h4>{notes.length === 0 ? "" : `${notes.length} Notes in Database`}</h4>
    </div>
  );
}

export default Count;
