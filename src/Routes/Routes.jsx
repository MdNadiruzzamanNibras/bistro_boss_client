import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Page/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
            element:<Home/>}
    ]
  },
]);