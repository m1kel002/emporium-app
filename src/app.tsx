import { RouterProvider } from "react-router-dom";
import "./app.scss";
import HeaderNav from "./shared/components/HeaderNav/HeaderNav";
import { router } from "./app-routing";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

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
