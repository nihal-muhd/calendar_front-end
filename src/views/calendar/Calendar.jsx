import React, { useState } from "react";
import Days from "../../components/days/Days";
import "./Calendar.scss";
import Dates from "../../components/dates/Dates";
import ChangeMonth from "../../components/change-month/ChangeMonth";
import AddEvent from "../../components/dialog/AddEvent";

const Calendar = () => {
  const [monthOffset, setMonthOffset] = useState(0);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [date, setDate] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handlePrevMonth = () => {
    setMonthOffset((prevOffset) => prevOffset - 1);
  };

  const handleNextMonth = () => {
    setMonthOffset((prevOffset) => prevOffset + 1);
  };

  const currentMonth = () => {
    const now = new Date();
    now.setMonth(now.getMonth() + monthOffset);
    return now.toLocaleString("default", { month: "long" });
  };

  const currentYear = () => {
    const now = new Date();
    now.setMonth(now.getMonth() + monthOffset);
    return now.getFullYear();
  };

  const handleAddEventClick = (date) => {
    setShowAddEvent(true);
    setDate(date);
  };
  const closeDialog = () => {
    setShowAddEvent(false);
  };

  const handleEventAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="calendar-container">
      <ChangeMonth
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        currentMonth={currentMonth()}
        currentYear={currentYear()}
      />
      <Days />
      <Dates
        monthOffset={monthOffset}
        handleAddEventClick={handleAddEventClick}
        refresh={refresh}
      />
      {showAddEvent && (
        <AddEvent
          initialDate={date}
          closeDialog={closeDialog}
          onEventAdded={handleEventAdded}
        />
      )}
    </div>
  );
};

export default Calendar;
