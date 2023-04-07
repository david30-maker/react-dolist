import Navbar from '../components/navbar'
import TodoHeader from '../components/todoHeader.jsx'
import TodoLogic from '../components/todoLogic.jsx'
import Modal from '../components/modal'


const Home = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Modal />
      <div className="todos">
        <TodoHeader />
        <TodoLogic />
      </div>
    </div>
    
  )
};

export default Home;