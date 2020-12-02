import React, { useState } from "react";
import "./todo.css";
// import { connect } from "react-redux";

const Todo = ({ addItem, showItem }) => {
  const [input, setInput] = useState([]);
  const [item_add, setItem] = useState("");
  const [Todoarr, setTodoArr] = useState([]);
  const [isFocus, Focussed] = useState("");

  const setFocus = (text) => {
    Focussed(text);
  };
  const setBlur = () => {
    Focussed("");
  };
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const deleteItem = (nd) => {
    let newArr = Todoarr.filter((elem, n) => nd !== n);
    let newArr1 = input.filter((elem, n) => nd !== n);
    setTodoArr(newArr);
    setInput(newArr1);
  };
  const editItem = (name, index) => {
    console.log(name, index, "done");
    let newArr = Todoarr.map((elem, n) => {
      if (n === index) {
        elem.name = name;
      }
      return elem;
    });
    setTodoArr(newArr);
    setBlur();
  };
  const handleItemChange = (e, index) => {
    setInput(
      input.map((obj, n) => {
        if (index === n) {
          obj.name = e.target.value;
          return obj;
        } else {
          return obj;
        }
      })
    );
  };
  return (
    <div className="todo_pane">
      <div className="todo_add">
        <form
          method="POST"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            setInput([{ name: item_add }, ...input]);
            setTodoArr([{ name: item_add }, ...Todoarr]);
            setItem("");
          }}
        >
          <input
            type="text"
            name="item"
            value={item_add}
            onChange={handleChange}
          />
          <div
            onClick={(e) => {
              e.preventDefault();
              setInput([{ name: item_add }, ...input]);
              setTodoArr([{ name: item_add }, ...Todoarr]);
              setItem("");
            }}
          >
            Add
          </div>
          <input
            type="submit"
            value="Login"
            className="todo_submit"
            onSubmit={() => {
              setInput([{ name: item_add }, ...input]);
              setTodoArr([{ name: item_add }, ...Todoarr]);
              setItem("");
            }}
          />
        </form>
      </div>
      {Todoarr.map((elem, index) => (
        <div className="todo_wrapper" key={index}>
          <div
            className={`todo_dir ${
              isFocus !== `todo-item-${index}` && "hidden"
            }`}
          >
            Press Enter to Confirm Edit
          </div>
          <div className="todo_top">
            <div className="todo_name">{elem.name}</div>
            <div className="todo_button">
              <label htmlFor={`todo-item-${index}`} className="btn1">
                Edit
              </label>
              <div className="btn2" onClick={() => deleteItem(index)}>
                Delete
              </div>
            </div>
          </div>
          <div
            className={`todo_input ${
              isFocus === `todo-item-${index}` && "active"
            }`}
          >
            <form
              method="POST"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                editItem(input[index].name, index);
              }}
            >
              <input
                type="text"
                className="todo_input_field"
                id={`todo-item-${index}`}
                value={input[index].name}
                onFocus={() => setFocus(`todo-item-${index}`)}
                onBlur={() => setBlur()}
                onChange={(e) => handleItemChange(e, index)}
                placeholder="Enter New Name"
              />
              <input
                type="submit"
                value="Login"
                className="todo_submit"
                onSubmit={(e) => {
                  e.preventDefault();
                  editItem(input[index].name, index);
                }}
              />
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   //   Todoarr: state,
// });

// const mapDispatchToProps = {};

export default Todo;
