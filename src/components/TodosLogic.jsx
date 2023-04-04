import { useState } from 'react';
//other imported components here
const TodosLogic = () => {
    const [Todos, setTodos] = useState([
        {
            id: 1,
            title: 'setup development evironment',
            compelted: true,
        },
        {
            id: 2,
            title: 'develop website and  add content',
            compelted: false,
        },
        {
            id: 3,
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
    id: 4,
    title: title,
    completed: false,
};
setTodos([...todos, newTodo]);
    };
    return (
        <div>
        <InputTodo addTodoItem={addTodoItem}/>
        <TodosList todosProps={todos} handleChange={handleChange} />
        delTodo={delTodo}
      </div>
    );
};
export default TodosLogic;