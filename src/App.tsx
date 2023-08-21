import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerView from "./views/DatePicker/DatePicker";
import { Box } from "@mui/material";
import InfiniteScroll from "./views/InfiniteScroll/InfiniteScroll";

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
      <Box sx={sxClasses.wrapper}>
        <DatePickerView />
        <InfiniteScroll />
      </Box>
    </LocalizationProvider>
  );
}

export default App;
