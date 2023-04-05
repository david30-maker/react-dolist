import styles from './styles/Header.module.css'
const HeaderTodo = () => {
    const HeaderStyle = {
        padding: '20px 0',
        lineHeight: '1.5em',
        color: 'red',
        textAlign: 'center',
      }
    return (
      <header style={HeaderStyle} classNmae={styles.header}>
        todos
      </header>
    );
  };
  export default HeaderTodo;