import { TextField } from "@mui/material";
import "./SearchBar.scss";
import { useContext } from "react";
import { AppContext } from "../../store/AppContext";

const SearchBar = () => {
  let { searchText, setSearchText } = useContext(AppContext);

  const onChange = (event: any) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={onChange}
      ></TextField>
    </>
  );
};

export default SearchBar;
