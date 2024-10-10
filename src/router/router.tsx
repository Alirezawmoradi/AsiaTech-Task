import {createBrowserRouter} from "react-router-dom";
import {SearchPage} from "../pages/search-page";
import {DetailPage} from "../pages/detail-page";
import {MainLayout} from "../layouts/main-layout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                element: <SearchPage/>,
                index: true,
            },
            {
                element: <DetailPage/>,
                path: "/details/:query"
            }
        ]
    }
]);

export default Router;