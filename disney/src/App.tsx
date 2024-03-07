import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/common/Layout";
import NotFound from "./pages/common/NotFound";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "character/:id",
                element: <Detail />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
