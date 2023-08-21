import React from "react";
import { Dayjs } from "dayjs";
import {
  Box,
  Typography,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import moment from "moment";
import { DAY_DIFFERENCE, prettyNumber } from "./helper";
import locale from "../../shared/locale";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const sxClasses = {
  paper: { p: 2, width: 1 / 3 },
  dateContainer: {
    pt: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const DatePickerView = () => {
  const [startValue, setStartValue] = React.useState<Dayjs | null>(null);
  const [endValue, setEndValue] = React.useState<Dayjs | null>(null);
  const [inProgress, setInProgress] = React.useState<boolean>(false);

  const passedTime = !inProgress
    ? moment.duration(endValue?.diff(startValue))
    : moment.duration(dayjs().diff(startValue));

  const dateHumanizer = (time: moment.Duration) => {
    return (
      <Typography>
        {prettyNumber(time.asDays())} days : {prettyNumber(time.asHours())}{" "}
        hours : {prettyNumber(time.asMinutes())} minutes :{" "}
        {prettyNumber(time.asSeconds())} seconds
      </Typography>
    );
  };

  const handleInProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInProgress(event.target.checked);
  };

  React.useEffect(() => {
    if (startValue && endValue) {
      const dayDifference = endValue.diff(startValue, DAY_DIFFERENCE);
      if (dayDifference < 1) {
        setStartValue(null);
        setEndValue(null);
        if (dayDifference < 0) alert(locale.datePicker.futureEndDate);
        else alert(locale.datePicker.oneDayDifference);
      }
    } else if (startValue && inProgress) {
      const difference = dayjs().diff(startValue);
      if (difference < 0) {
        alert(locale.datePicker.futureStartDate);
        setStartValue(null);
      }
    }
  }, [startValue, endValue, inProgress]);

  return (
    <Paper sx={sxClasses.paper}>
      <Typography>DatePicker</Typography>
      <Box sx={sxClasses.dateContainer}>
        <DateTimePicker
          label={locale.datePicker.startLabel}
          value={startValue}
          onChange={(newValue) => setStartValue(newValue)}
        />
        {!inProgress && (
          <DateTimePicker
            label={locale.datePicker.endLabel}
            value={endValue}
            onChange={(newValue) => setEndValue(newValue)}
          />
        )}
      </Box>
      <FormControlLabel
        control={<Checkbox checked={inProgress} onChange={handleInProgress} />}
        label={locale.datePicker.checkBoxLabel}
      />
      {startValue && (endValue || inProgress) && dateHumanizer(passedTime)}
    </Paper>
  );
};

export default DatePickerView;
