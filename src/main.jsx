import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home';
import Errorpage from './Components/ErrorPage/Errorpage';
import Statistics from './Components/Statistics/Statistics.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/fake-data.json'),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
