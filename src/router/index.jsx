import { createBrowserRouter } from "react-router-dom";
import Root from "../component/root";
import NotFound from "../component/error/not-found"
import Signup from "../views/Signup";
import Login from "../views/Login";
import Users from "../views/Users";


const router = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup />,
        errorElement: <NotFound />
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <NotFound />
    },
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />, 
        children: [
            {
                path: "/users",
                element: <Users />,
            },
        ]
    }
]);

export default router