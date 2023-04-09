import React from "react";
import DropDown from "./DropDown";

const DisplayContent = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="displayContent">
          <div className="alignment-class">
            <div>Marketing Performance</div>
            <DropDown />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="displayContent">
        <div className="alignment-class">
            <div>History PO</div>
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayContent;
