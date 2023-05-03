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
  AuthLayoutPage,
  AdminDashboard,
  AdminBannerListPage,
  AdminBrandModule,
  AdminCategoryModulePage,
  AdminUserModulePage,
  AdminProductModulePage,
  AdminOrderModulePage,
  AdminOfferServicesPage,
  AdminReviewServicesPage,
  AdminPaymentServicesPage,
  AdminBannerCreatePage,
} from './Pages/index';

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
          <Route path="banner" element={<AdminBannerListPage />} />
          <Route path="banner/create" element={<AdminBannerCreatePage />} />
          <Route path="brand" element={<AdminBrandModule />} />
          <Route path="category" element={<AdminCategoryModulePage />} />
          <Route path="user" element={<AdminUserModulePage />} />
          <Route path="product" element={<AdminProductModulePage />} />
          <Route path="order" element={<AdminOrderModulePage />} />
          <Route path="offer" element={<AdminOfferServicesPage />} />
          <Route path="review" element={<AdminReviewServicesPage />} />
          <Route path="payment" element={<AdminPaymentServicesPage />} />
        </Route>

        {/* seller Route */}
        <Route
          path="/seller"
          element={
            <PrivateRoutes toCheck="seller">
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
