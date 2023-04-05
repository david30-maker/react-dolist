const TodosList = ({ todosProps, handleChange }) => {
  const delTodo = () => {
    setTodos([
      ...todos.filetr((todo) => {
        return todo.id !== id;
      }),
    ]);
  };
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange}  
          delTodo={delTodo}
          />
        ))}
      </ul>
    );
  };
  export default TodosList;
  