import { Navigate } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/login/Login';

export const routes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
];