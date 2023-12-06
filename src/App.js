// import React, { useState } from 'react'
// import './App.css'
// function App() {
//   const [todo, setTodo] = useState('')
//   const [todoList, setTodoList] = useState([])

//   const addTodo = () => {
//     if (todo !== '') {
//       setTodoList([...todoList, todo])
//       setTodo('')
//     }
//   }
//   const deleteTodo = (text) => {
//     console.log('I am in delete', text)
//     const newTodoList = todoList.filter((todo) => {
//       return todo !== text
//     })
//     setTodoList(newTodoList)
//   }
//   return (
//     <div>
//       <h1 className="heading">This is the To doApp in ReactJS</h1>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <input
//           type="text"
//           name="todo"
//           placeholder="Create todo list"
//           value={todo}
//           onChange={(event) => {
//             setTodo(event.target.value)
//           }}
//         />
//         <button className="add-btn" onClick={addTodo}>
//           Add Button
//         </button>
//       </div>
//       {todoList.length > 0 ? (
//         <ul style={{ listStyleType: 'none' }}>
//           {todoList.map((item, index) => (
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <li key={index}>{item}</li>
//               <button
//                 style={{
//                   border: '1px solid black',
//                   borderRadius: '5px',
//                   marginLeft: '10px',
//                 }}
//                 onClick={() => {
//                   deleteTodo(todo)
//                 }}
//               >
//                 Delete todo
//               </button>
//             </div>
//           ))}
//         </ul>
//       ) : (
//         <div>
//           <p style={{ textAlign: 'center' }}>No Task Found</p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App
import { useState } from 'react'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo])
      setTodo('')
    }
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text
    })
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>

      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value)
          }}
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>

      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}> {todo} </li>
              <button
                className="delete-button"
                onClick={() => {
                  deleteTodo(todo)
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </div>
  )
}

export default App
