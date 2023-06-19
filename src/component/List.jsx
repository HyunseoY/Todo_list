import TodoCard from './TodoCard';

const List = ({ todos, setTodos }) => {
  const todoUpdateClickBtn = (id) => {
    const updatedTodos = todos.filter((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    localStorage.setItem('todo', JSON.stringify(updatedTodos));
    setTodos(JSON.parse(localStorage.getItem('todo')));
  };

  const todoDeleteClickBtn = (id) => {
    const restTodos = todos.filter((item) => {
      return item.id !== id;
    });
    localStorage.setItem('todo', JSON.stringify(restTodos));
    setTodos(JSON.parse(localStorage.getItem('todo')));
  };

  return (
    <div className="layout">
      <div>
        <h2>🔥Working...</h2>
        <div className="list-wrapper">
          {todos
            .filter((item) => !item.isDone) // 아직 완료되지 않은 항목 필터링
            .map((item) => (
              <TodoCard
                item={item}
                key={item.id}
                todoDeleteClickBtn={todoDeleteClickBtn}
                todoUpdateClickBtn={todoUpdateClickBtn}
              />
            ))}
        </div>
      </div>

      <div>
        <h2>🌈Done!</h2>
        <div className="list-wrapper">
          {todos
            .filter((item) => item.isDone) // 완료된 항목 필터링
            .map((item) => (
              <TodoCard
                item={item}
                key={item.id}
                todoDeleteClickBtn={todoDeleteClickBtn}
                todoUpdateClickBtn={todoUpdateClickBtn}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
