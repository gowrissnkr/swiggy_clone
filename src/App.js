import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import appStore from "./features/appStore";
import "./App.css"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestruantDetails from "./component/RestruantDetails";
import CartPage from "./pages/CartPage";


const App = () => {
    return (
        <Provider store={appStore}>
            <div className="relative pt-[80px] min-h-[100%] flex flex-col min-w-[1240px]">
                <Header />
                <Outlet />
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/restruants/:name/:areaName/:id",
                element: <RestruantDetails />,
            },
            {
                path: "/cart",
                element: <CartPage/>,
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
