import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';

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
import UpdatePage from './Component/AllTouristSpotPage/UpdatePage';
import PrivateRoute from './AuthPovider/PrivateRoute';
import TouristsSpots from './Component/AllTouristSpotPage/TouristsSpots';
import Countries from './Component/AllTouristSpotPage/Countries';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/touristsSpot',
        element: <TouristsSpots></TouristsSpots>,
        loader: () => fetch('https://enjoy-freedom-server.vercel.app/addTours')
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: () => fetch('https://enjoy-freedom-server.vercel.app/addTours')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addTours',
        element: <PrivateRoute>
          <AddTourists></AddTourists>
        </PrivateRoute>
      },
      {
        path: '/userPages',
        element: <PrivateRoute>
          <MyListPage></MyListPage>
        </PrivateRoute>,
        loader: () => fetch('https://enjoy-freedom-server.vercel.app/addTours')
      },
      {
        path: '/updatePage/:id',
        element: <PrivateRoute>
          <UpdatePage></UpdatePage>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://enjoy-freedom-server.vercel.app/addTours/${params.id}`)
      },
       {
       path:'/coutries/:countri',
       element: <Countries></Countries>,
       loader:()=> fetch(`https://enjoy-freedom-server.vercel.app/addTours`)
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
