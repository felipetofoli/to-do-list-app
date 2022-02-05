import React, { useState } from "react";

function Todo() {
  const [toDoItem, setToDoItem] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  function handleChange(event) {
    console.log(event.target.value);
    setToDoItem(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    if (toDoItem) {
      setToDoItems([toDoItem, ...toDoItems]);
      setToDoItem("");
    }
  }

  return (
    <div>
      <h1>To do list</h1>
      <form>
        <input
          type="text"
          placeholder="Task to do..."
          onChange={handleChange}
          value={toDoItem}
        />
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </form>
      <div>
        <ul>
          {toDoItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
