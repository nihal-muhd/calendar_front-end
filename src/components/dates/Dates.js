import React from 'react';
import './Dates.scss';
import useMonthlyDates from '../../custom-hooks/monthlyDates';
import Events from '../events/Events';

const Dates = ({ monthOffset, handleAddEventClick, refresh }) => {
    const dates = useMonthlyDates(monthOffset);


    const isCurrentDate = (date) => {
        const currentDate = new Date();
        return (
            date.getDate() === currentDate.getDate() &&
            date.getMonth() === currentDate.getMonth() &&
            date.getFullYear() === currentDate.getFullYear()
        );
    };

    const handleAddEvent = (date) => {
        handleAddEventClick(date);
    };

    return (
        <div className='dates-wrap'>
            {dates.map((date, index) => (
                <div key={index} className={`date-item ${isCurrentDate(date) ? 'current-date' : ''}`}>
                    {date.getDate()}
                    <div className='add-event' title='Add Event' onClick={() => handleAddEvent(date)}></div>
                    <Events selectedDate={date.toISOString().slice(0, 10)} refresh={refresh} />
                </div>
            ))}
        </div>
    );
};

export default Dates;
