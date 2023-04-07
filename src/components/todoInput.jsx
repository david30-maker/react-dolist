import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  // ...
  const handleSubmit = (e) => {
    console.log(Boolean(title.trim()))
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };
  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
        <input
        type='text'
        className='input-text'
        placeholder='Add Todo...'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
        <input 
        type='submit'
        className='input-submit' 
        value='Submit' />
      </form>
      <span className='submit-warning'>{message}</span>
    </>
  );
};
export default InputTodo;