import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chat from "./chat";
import Login from "./login";
import Register from "./registration";
import Form from "./bootstrap";


const ReactRouter = () => {


    const router = createBrowserRouter([
      
        {
            path: "/registration",
            element: <Register/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
          path: "/chat",
          element: <Chat/>,
        },
        {
          path: "/",
          element: <Form/>,
        },
      ]);
      

    return <RouterProvider router={router} />
}

export default ReactRouter;