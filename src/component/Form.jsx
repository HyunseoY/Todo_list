import { useState } from 'react';

const INIT_VALUE = { title: '', content: '', id: 1, isDone: false };

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState(INIT_VALUE);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const todoID = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

  const todoAddClickBtn = (e) => {
    e.preventDefault();
    if (todo.title === '' || todo.content === '') return;

    setTodos([...todos, { ...todo, id: todoID }]);
    setTodo(INIT_VALUE);
  };

  return (
    <form className="submit-container">
      <div className="input-box">
        제목
        <input
          className="submit-input"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        내용
        <input
          className="submit-input"
          name="content"
          value={todo.content}
          onChange={onChangeHandler}
        />
        <br />
      </div>
      <button className="submit-btn" onClick={todoAddClickBtn}>
        추가하기
      </button>
    </form>
  );
};

export default Form;
