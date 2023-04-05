import { useState } from 'react';
import InputTodo from './InputTodo';
import TodoItem from './TodoItem';
import TodosList from './TodosList';
import { v4 as uuidv4 }from "uuid";

const TodosLogic = () => {
    const [Todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: 'setup development evironment',
            compelted: true,
        },
        {
            id: uuidv4(),
            title: 'develop website and  add content',
            compelted: false,
        },
        {
            id: uuidv4(),
            title: 'deploy to live serve',
            compelted: false,
        },
    ]);
    const handleChange = (id) => {
        setTodos((prevState) =>
        prevState.map((todo) => {
            if (todo.id === id) {
             return  {
                ...todo,
                completed: !todo.compeltedmpleted,
                };
            }
            return todo;
        }) 
        );
    };
    const delTodo = (id) => {
        console.log('deleted, id')
    };
    const addTodoItem = (title) => {
const newTodo = {
    id: uuidv4(),
    title: title,
    completed: false,
};
setTodos([...todos, newTodo]);
    };
    const setUpdate = (updatedTitle, id) => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              todo.title = updatedTitle;
            }
            return todo;
          })
        );
      };
    return (
        <div>
        <InputTodo addTodoItem={addTodoItem}/>
        <TodosList todosProps={todos} handleChange={handleChange} 
        setUpdate={setUpdate}
        />
        delTodo={delTodo}
      </div>
    );
};
export default TodosLogic;