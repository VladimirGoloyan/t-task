import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerView from "./views/DatePicker/DatePicker";


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        Application
        <DatePickerView />
      </div>
    </LocalizationProvider>
  );
}

export default App;
