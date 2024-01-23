export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((completeTodo, index) => (
          <li key={completeTodo}>
            <div className="list-row">
              <p className="todo-item">{completeTodo}</p>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
