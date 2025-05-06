import { useState } from "react";
import "./App.css";
import IndividualTask from "./Components/IndividualTask";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [userInputTask, setUserInputTask] = useState("");
  const inputFieldHandler = (e) => {
    setUserInputTask(e.target.value);
  };
  const addTaskHandler = () => {
    const copyValue = toDoList.filter((x) => x === userInputTask);
    if (userInputTask.trim()) {
      setToDoList((prevList) => [...prevList, userInputTask.trim()]);
      setUserInputTask("");
    } else {
      alert("Task can't be blank value!");
    }
  };
  const deleteTaskToDoList = (valToBeDeleted, keyIndex) => {
    console.log(valToBeDeleted); // value came from the child which is need to be deleted
    const newToDoArray = [...toDoList];
    newToDoArray.splice(keyIndex, 1);
    setToDoList(newToDoArray);
  };
  const replaceUpdatedValueHandler = (updatedValue, listVal, keyIndex) => {
    console.log(updatedValue);
    console.log(listVal);
    // const updatedArray = toDoList.map((x) => {
    //   if (x === listVal) {
    //     return updatedValue;
    //   } else {
    //     return x;
    //   }
    // });
    const updatedArray = [...toDoList];
    updatedArray.splice(keyIndex, 1, updatedValue);
    console.log(updatedArray);
    setToDoList(updatedArray);
  };
  console.log(toDoList);
  return (
    <div>
      <div className="heading-text-css">TO DO LIST</div>
      <div className="search-block-flex-css">
        <input
          className="task-input-css"
          placeholder="Add you task..."
          value={userInputTask}
          onChange={inputFieldHandler}
        />
        <button className="task-add-btn-css" onClick={addTaskHandler}>
          Add
        </button>
      </div>
      <div className="tasks-block-flex-css">
        {toDoList.map((v, index) => {
          return (
            <IndividualTask
              listVal={v}
              key={index} // key can't be passed as a prop
              keyIndex={index}
              deletedValue={deleteTaskToDoList}
              TaskUpdatedValue={replaceUpdatedValueHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
