import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerView from "./views/DatePicker/DatePicker";
import { Box } from "@mui/material";
import InfiniteScroll from "./views/InfiniteScroll/InfiniteScroll";
import NavigationBar from "./shared/components/NavigationBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";

const sxClasses = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter basename="/">
        <NavigationBar />
        <Box sx={sxClasses.wrapper}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/datePicker" Component={DatePickerView} />
            <Route path="/infiniteScroll" Component={InfiniteScroll} />
          </Routes>
        </Box>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
