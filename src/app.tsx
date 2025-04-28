import { RouterProvider } from "react-router-dom";
import "./app.scss";
import HeaderNav from "./shared/components/HeaderNav/HeaderNav";
import { router } from "./app-routing";
import {ThemeProvider } from "@mui/material";
import theme from "./theme"


export function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HeaderNav></HeaderNav>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}
