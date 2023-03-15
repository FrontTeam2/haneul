import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import IssueDetailPage from "../pages/Detail";
import HomePage from "../pages/Home";
import IssueListPage from "../pages/List";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "list",
                element: <IssueListPage />,
            },
            {
                path: "detail",
                element: <IssueDetailPage />,
            },
        ],
    },
]);

export default router;
