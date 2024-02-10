import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calendar = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
