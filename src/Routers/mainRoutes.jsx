import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Kitchen from "../pages/Kitchen";
import Generate from "../pages/Generate";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "generate",
        element: (
          <PrivateRoute>
            <Generate></Generate>
          </PrivateRoute>
        ),
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
    ],
  },
]);

export default mainRoutes;
