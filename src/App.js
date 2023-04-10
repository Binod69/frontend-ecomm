import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from './Components/home-components/Nav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Components/home-components/ClassComp';
import ErrorPage from './Pages/ErrorPage';
import CategoryList from './Pages/CategoryList';

function Router() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/category/:catslug" element={<CategoryList />} />

        {/* 404 routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Router;
