import 'App.css';
import { useState } from 'react';
import Header from 'component/Header';
import Form from 'component/Form.jsx';
import List from 'component/List';

function App() {
  const todoList = JSON.parse(localStorage.getItem('todo')) ?? [];
  const [todos, setTodos] = useState(todoList);
  return (
    <div className="layout">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
