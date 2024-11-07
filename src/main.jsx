import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LayoutHome from './components/LayoutHome/LayoutHome';
import LayoutOther from './components/LayoutOther/LayoutOther';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Gadgets from './components/Gadgets/Gadgets';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Statistics from './components/Statistics/Statistics';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AboutUs from './components/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome></LayoutHome>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>,
            loader: () => fetch('/products.json'),
          },
          {
            path: "/category/:categoryName",
            element: <Gadgets></Gadgets>,
            loader: () => fetch('/products.json'),
          },
        ]
      }
    ],
  },
  {
    path: "other",
    element: <LayoutOther></LayoutOther>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ]
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "product/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/products.json'),
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} key={location.key} />
  </StrictMode>,
)
