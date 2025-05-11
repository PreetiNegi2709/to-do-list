import React, { useState } from "react";
import pop from "../assets/image/popsicle.png";

const IndividualTask = ({
  listVal,
  deletedValue,
  TaskUpdatedValue,
  keyIndex,
}) => {
  //   for the input field editable
  let [inputListValue, setInputListValue] = useState(listVal);
  let [inputFieldEditable, setInputFieldEditable] = useState(false);
  let delectTaskHandler = () => {
    deletedValue(listVal, keyIndex);
  };
  let updateValueHandler = () => {
    setInputFieldEditable(true);
  };
  let saveTaskHandler = () => {
    setInputFieldEditable(false);
    TaskUpdatedValue(inputListValue, listVal, keyIndex);
  };
  const cancelHandler = () => {
    setInputFieldEditable(false);
    setInputListValue(listVal);
  };
  return (
    <div className="flex-css task-block-css">
      <img className="img-css" src={pop} alt="My local image" />
      <div className="flex-css single-task-css">
        {/* following is input field */}
        {/* display task div*/}
        <div>
          {inputFieldEditable ? (
            <div className="input-task-css">
              <input
                className="update-field-css"
                value={inputListValue}
                onChange={(e) => setInputListValue(e.target.value)}
              />
            </div>
          ) : (
            <div>{listVal}</div>
          )}
        </div>
        {/* button div */}
        <div className="flex-css">
          {/* save button */}
          {inputFieldEditable && (
            <button
              className="single-task-btn-css indi-btn-left-margin"
              onClick={saveTaskHandler}
            >
              Save
            </button>
          )}
          {/* cancle button  */}
          {inputFieldEditable && (
            <button
              className="single-task-btn-css indi-btn-left-margin"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          )}
          {/* update button  */}
          {!inputFieldEditable && (
            <button
              className="single-task-btn-css"
              onClick={updateValueHandler}
            >
              Update
            </button>
          )}
          <button
            className="single-task-btn-css del-btn-margin"
            onClick={delectTaskHandler}
          >
            Delete
          </button>
        </div>
      </div>
      {/* end updated structure */}
    </div>
  );
};

export default IndividualTask;
