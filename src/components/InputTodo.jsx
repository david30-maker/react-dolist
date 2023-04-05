const InputTodo = ({addTodoItem}) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
        addTodoItem(title);
        setTitle('');
        setMessage('')
        }else {
            setMessage('Please add item');
        }
    };
    return (
        <>
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text" className="input-text" placeholder="Add Todo..." 
            value={title}
            onChange={handleChange}
            />
            <button className="inptu-submit">Submit</button>
            </form>
            <span classNmae="submikt-message">{message}</span>
            </>
    );
};
export default InputTodo;