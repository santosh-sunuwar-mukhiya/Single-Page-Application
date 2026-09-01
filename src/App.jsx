import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './pages/AppLayout';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="app" element={<AppLayout />}>
                <Route path="cities" element={<p>List of cities.</p>} />
                <Route path="countries" element={<p>Countries</p>} />
                <Route path="form" element={<p>Form</p>} />
            </Route>
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login  />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}