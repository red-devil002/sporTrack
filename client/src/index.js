import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "state/api";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "Form";
import Alogin from "pages/Alogin";
import Dash from "pages/Dash";
import Blogin from "pages/BuildersSection/Blogin";
import Builder from "pages/BuildersSection/Builder";
import SAdd from "pages/BuildersSection/CURD/SAdd";
import Organization from "pages/BuildersSection/Organization";
import { Provider } from "react-redux";
import Geography from "scenes/Geography";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Achive from "pages/BuildersSection/Achive";
import Products from "scenes/products";
import Customers from "scenes/customers";
import AAdd from "pages/BuildersSection/CURD/AAdd";
import Stake from "pages/BuildersSection/Stake";
import Site from "pages/BuildersSection/Site";
import SIAdd from "pages/BuildersSection/CURD/SIAdd";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Form />
  },
  {
    path: "alogin",
    element: <Alogin />,
  },
  {
    path: "https://github.com/red-devil002",
  },
  {
    path: "alogin/Dash",
    element: <Dash />,
  },
  {
    path: "blogin",
    element: <Blogin />,
  },
  {
    path: "blogin/Builder",
    element: <Builder />
  },
  {
    path: "blogin/Builder/stake",
    element: <Stake />
  },
  {
    path: "blogin/Builder/organization",
    element: <Organization />
  },
  {
    path: "/blogin/Builder/achive",
    element: <Achive />
  },
  {
    path: "blogin/Builder/site",
    element: <Site />
  },
  {
    path: "/SIAdd",
    element: <SIAdd />
  },
  {
    path: "/AAdd",
    element: <AAdd />
  },
  {
    path: "/Sadd",
    element: <SAdd />
  },
  {
    path: "/blogin/Builder/dashboard",
    element: <Dash />
  },
  {
    path: "/layout",
    element: <Layout />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/product",
    element: <Products />
  },
  {
    path: "/customer",
    element: <Customers />
  },
  {
    path: "/geography",
    element: <Geography/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

    <RouterProvider router={Router} />
  </Provider>
);