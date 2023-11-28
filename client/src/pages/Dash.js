import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/Geography";
import Overview from "scenes/overview";


const Dash = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return <div className="dash">
    {/* <BrowserRouter> */}
      <ThemeProvider theme = {theme}>
        <CssBaseline />
        <Layout/>
        <Dashboard/>
        <Transactions/>
        <Products/>
        <Customers/>
        <Geography/>
        <Overview/>
        </ThemeProvider>
      {/* </BrowserRouter> */}
  </div>;
}

export default Dash;
