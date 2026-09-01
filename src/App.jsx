import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';

export default function App() {
  return (
    <>
      <h1>This is a App Component.</h1>
        <Routes>
            <Route path="/" component={<HomePage />} />
            <Route path="/pricing" component={<Pricing />} />
            <Route path="/product" component={<Product />} />
        </Routes>
    </>
  )
}