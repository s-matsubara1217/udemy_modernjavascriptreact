export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((incompleteTodo, index) => (
          <li key={incompleteTodo}>
            <div className="list-row">
              <p className="todo-item">{incompleteTodo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
