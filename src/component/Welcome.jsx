// /* eslint-disable */
// // import "./styles.css";
import { useState, useRef, useEffect } from "react";

const generateId = (() => {
  let count = 0;

  return () => {
    return ++count;
  };
})();

// /**
//  * This is a todo app with multiple bugs and badly written lines.
//  * Can you fix these bugs and make code follow good practices?
//  * В этом коде есть несколько багов и гавнокода, ты можешь это исправить?
//  * Можно воспользоватся кодсандбоксом для исправления кода: https://codesandbox.io/s/new?file=/src/App.js:0-1806
//  */

export default function App() {
  const [todos, changeTodos] = useState([]);
  const [value, changeValue] = useState("");
  const inputRef = useRef('foo');
  const addTodo = () => changeTodos([...todos, {text: value, id: generateId()}])

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    changeTodos(newTodos);
  };

  const handleComplete = (id) => {
    const item = todos.find((item) => item.id === id)
    const idx = todos.findIndex((item) => item.id === id)
    let prevTodos = todos.slice(0, idx)
    let nextTodos = todos.slice(idx + 1)
    item.complete = true
    changeTodos([...prevTodos, item, ...nextTodos])
  }

  useEffect(() => {
    // inputRef.current.focus();

    return () => changeValue("");
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        ref={inputRef}
        value={value}
        onChange={(ev) => changeValue(ev.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {todos.map((todo, index) => (
        <li key={todo.id}>
          {todo.complete ?
            <strike>{todo.text}</strike>
          :
            todo.text
          }
          <button onClick={() => handleComplete(todo.id, index)}>complete</button>
          <button onClick={() => handleDelete(todo.id)}>delete</button>
        </li>
      ))}
    </div>
  );
}



