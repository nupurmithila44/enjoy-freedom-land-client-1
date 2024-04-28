import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer} from 'react-toastify';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Component/ErrorPage';
import Home from './Component/Pages/Home';
import Register from './Component/Pages/Register';
import Login from './Component/Pages/Login/Login';
import AuthProvider from './AuthPovider/AuthProvider';
import AddTourists from './Component/AllTouristSpotPage/AddTourists';
import ContactUs from './Component/Pages/ContactUs';
import Gellary from './Component/Pages/Gellary';
import ViewDetails from './Component/AllTouristSpotPage/ViewDetails';
import MyListPage from './Component/AllTouristSpotPage/MyListPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/addTours')
      },
      {
        path:'/viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ()=> fetch('http://localhost:5000/addTours')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path:'/addTours',
        element: <AddTourists></AddTourists>
      },
      {
        path: '/userPages',
        element: <MyListPage></MyListPage>,
        loader: ()=> fetch('http://localhost:5000/addTours')
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/gellary',
        element: <Gellary></Gellary>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer></ToastContainer>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
