import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Components/ClassComp';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
