import styles from "../styles/Header.module.scss"

function TodoHeader() {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  return (
    <div 
    style={headerStyle}
    className="styles.header">
      todos
    </div>
  )
}

export default TodoHeader;