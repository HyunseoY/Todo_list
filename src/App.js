import { useState } from 'react';
import 'App.css';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: '리액트 공부하기',
      contents: '리액트 기초를 공부해 봅시다',
    },
  ]);

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setcontentsHandler = (event) => {
    setContents(event.target.value);
  };

  const todoAddClickBtn = () => {
    const newTodo = {
      id: todo.length + 1,
      title,
      contents,
    };

    setTodo([...todo, newTodo]);
  };

  return (
    <div className="layout">
      <div>
        제목 <input value={title} onChange={setTitleHandler} /> 내용
        <input value={contents} onChange={setcontentsHandler} /> <br />
        <button onClick={todoAddClickBtn}>추가하기</button>
      </div>

      <div>
        <p>🔥Working</p>
        {todo.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.contents}</p>
              <button>삭제하기</button>
              <button>완료</button>
            </div>
          );
        })}
      </div>

      <div>
        <p>🌈Done!</p>
        {todo.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.contents}</p>
              <button>삭제하기</button>
              <button>취소</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
