import { createBrowserRouter } from "react-router-dom"
import Root from "../component/root"
import Error from "../component/error"
import NotFound from "../component/error/not-found"
import SecureRoot from "../component/secure-route"
import Signup from "../views/Signup"
import Login from "../views/Login"
import Home from "../views/Home"
import Logout from "../views/Logout"


const router = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />
    },
    {
        path: "/logout",
        element: <Logout />,
        errorElement: <Error />
    },
    {
        path: "/user",
        element: <Root />,
        errorElement: <Error />
    },
    {
        path: "/",
        element: <SecureRoot />,
        errorElement: <Error />, 
        children: [
            {
                path: "/home",
                element: <Home />,
            },
        ]
    }
]);

export default router