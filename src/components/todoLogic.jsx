import { useState } from 'react';
import TodoInput from './todoInput';
import TodoList from './todoList';
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
  const [todosProps, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    console.log('deleted', id);
    setTodos([
      ...todosProps.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
  setTodos([...todosProps, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todosProps.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <TodoInput addTodoItem={addTodoItem} />
      <TodoList 
        todosProps={todosProps} 
        handleChange={handleChange} 
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </>
  );
};

export default TodosLogic;