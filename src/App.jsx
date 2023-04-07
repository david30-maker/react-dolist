// import './styles/app.scss'
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Login from './routes/Login.jsx';
import Profile from './routes/Profile.jsx';
import NotMatch from './routes/NotMatch.jsx';

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotMatch />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};
export default TodoApp;