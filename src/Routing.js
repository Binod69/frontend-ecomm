import { Routes, Route } from 'react-router-dom';
import './App.scss';
import {
  Home,
  Login,
  SignUp,
  Error,
  CategoryList,
  AdminLayout,
  HomePageLayout,
} from './Pages/index';
import AuthLayoutPage from './Pages/home/auth.layout';
import AdminDashboard from './Pages/admin/dashboard/Admin.Dashboard';
import PrivateRoutes from './routes/Private.Routes';
import { ToastContainer } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

function Routing() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<Home />} />

          <Route path="category/:catSlug" element={<CategoryList />} />
          <Route
            path="category/:catSlug/:childCat"
            element={<CategoryList />}
          />
          {/* 404 routes */}
          <Route path="*" element={<Error />} />
        </Route>

        {/* AUTH LAYOUT */}
        <Route path="/" element={<AuthLayoutPage />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* PRIVATE ROUTE/ADMIN */}
        <Route
          path="/admin"
          element={
            <PrivateRoutes toCheck="admin">
              <AdminLayout />
            </PrivateRoutes>
          }
        >
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Routing;
