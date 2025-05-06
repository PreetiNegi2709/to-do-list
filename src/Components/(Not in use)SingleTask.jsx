import { useState } from "react";
import React from "react";
const SingleTask = ({ toDoListData, deletedValue }) => {
  const [saveBtn, setSaveBtn] = useState(false);
  const deleteTaskHandler = (valueDelete) => {
    // console.log(valueDelete);
    deletedValue(valueDelete);
  };
  const updateBtnHandler = () => {
    setSaveBtn(true);
  };
  const saveBtnHandler = () => {
    setSaveBtn(false);
  };
  return (
    <div>
      {toDoListData.map((val, index) => {
        //   return <div key={index}>{val}</div>;
        return (
          <div key={index} className="taskCss">
            <input value={val} />
            <button onClick={() => deleteTaskHandler(val)}>delete</button>
            {saveBtn ? (
              <button onClick={saveBtnHandler}>Save</button>
            ) : (
              <button onClick={updateBtnHandler}>Update</button>
            )}
          </div>
        );
      })}
    </div>
    // <div>
    //   <input value={toDoListData} />
    //   <button onClick={() => deleteTaskHandler(toDoListData)}>delete</button>
    //   {saveBtn ? (
    //     <button onClick={saveBtnHandler}>Save</button>
    //   ) : (
    //     <button onClick={updateBtnHandler}>Update</button>
    //   )}
    // </div>
  );
};

export default SingleTask;
