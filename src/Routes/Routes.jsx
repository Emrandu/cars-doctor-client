import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      children:[
        {
            path: '/',
            element: <Home />
        },
        {
            path:'login',
            element:<Login />
        },
        {
            path:'signup',
            element:<SignUp />
        }
      ]
    },
  ]);

  export default router;