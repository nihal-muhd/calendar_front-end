import { useState, useEffect } from 'react';

const useMonthlyCalendar = (monthOffset) => {
    const [calendarDates, setCalendarDates] = useState([]);

    useEffect(() => {
        const now = new Date();
        console.log(now);
        const currentMonth = now.getMonth() + monthOffset;
        console.log(currentMonth);
        const currentYear = now.getFullYear();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

        const startingDate = new Date(firstDayOfMonth);
        const endingDate = new Date(lastDayOfMonth);

        const numDaysToDisplay = 42;

        const numDaysToPrepend = startingDate.getDay();

        const numDaysToAppend = numDaysToDisplay - (lastDayOfMonth.getDate() + numDaysToPrepend);

        startingDate.setDate(startingDate.getDate() - numDaysToPrepend);

        endingDate.setDate(endingDate.getDate() + numDaysToAppend);

        const calendarDatesArray = [];
        let currentDate = new Date(startingDate);
        while (currentDate <= endingDate) {
            calendarDatesArray.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        setCalendarDates(calendarDatesArray);
    }, [monthOffset]);

    return calendarDates;
};

export default useMonthlyCalendar;
