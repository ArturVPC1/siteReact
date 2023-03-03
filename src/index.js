import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Crud from './pages/Crud';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "crud",
    element: <Crud/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);