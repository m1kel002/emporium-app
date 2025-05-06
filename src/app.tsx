import { RouterProvider } from "react-router-dom";
import "./app.scss";
import HeaderNav from "./shared/components/HeaderNav/HeaderNav";
import { router } from "./app-routing";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { useState } from "preact/hooks";
import { AppContext } from "./shared/store/AppContext";

export function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChanges = (value: string) => {
    setSearchText(value);
  };

  const searchCtx = {
    searchText: searchText,
    setSearchText: handleSearchTextChanges,
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={searchCtx}>
          <HeaderNav></HeaderNav>
          <RouterProvider router={router} />
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
}
