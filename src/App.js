import { useState } from 'react';
import 'App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '리액트 공부하기',
      contents: '리액트 기초를 공부해봅시다.',
      isDone: false,
    },
    {
      id: 2,
      title: '리액트 공부하기',
      contents: '리액트 기초를 공부했습니다.',
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  // 인풋 입력 창
  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setcontentsHandler = (event) => {
    setContents(event.target.value);
  };

  // 투두 등록 버튼 함수
  const todoAddClickBtn = (e) => {
    e.preventDefault();
    if (title === '' || contents === '') return;

    const newTodos = {
      id: todos.length + 1,
      title,
      contents,
    };

    setTodos([...todos, newTodos]);

    setTitle('');
    setContents('');
  };

  // 투두 삭제 버튼 함수
  const todoDeleteClickBtn = (id) => {
    const restTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(restTodos);
  };

  //투두 완료&취소 버튼 함수
  const todoUpdateClickBtn = (id) => {
    // isDone 값을 변경 해준다면!?
    const updatedTodos = todos.filter((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  return (
    // 제출란
    <div className="layout">
      <header>
        <div>My Todo List</div>
        <div>React</div>
      </header>
      <form className="submit-container">
        <div className="input-box">
          제목
          <input
            className="submit-input"
            value={title}
            onChange={setTitleHandler}
          />
          내용
          <input
            className="submit-input"
            value={contents}
            onChange={setcontentsHandler}
          />
          <br />
        </div>
        <button className="submit-btn" onClick={todoAddClickBtn}>
          추가하기
        </button>
      </form>

      {/* 리스트들 */}
      <div>
        <h2>🔥Working</h2>
        <div className="list-wrapper">
          {todos.map((item) => {
            if (!item.isDone) {
              return (
                <div className="todo-container" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.contents}</p>
                  <button
                    className="delete-btn"
                    onClick={() => todoDeleteClickBtn(item.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="update-btn"
                    onClick={() => todoUpdateClickBtn(item.id)}
                  >
                    완료
                  </button>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div>
        <h2>🌈Done!</h2>
        <div className="list-wrapper">
          {todos.map((item) => {
            if (item.isDone) {
              return (
                <div className="todo-container" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.contents}</p>
                  <button
                    className="delete-btn"
                    onClick={() => todoDeleteClickBtn(item.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="update-btn"
                    onClick={() => todoUpdateClickBtn(item.id)}
                  >
                    취소
                  </button>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
