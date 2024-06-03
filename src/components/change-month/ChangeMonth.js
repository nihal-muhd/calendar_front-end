import React, { useEffect } from 'react';
import './ChangeMonth.scss';

const ChangeMonth = ({ handlePrevMonth, handleNextMonth, currentMonth, currentYear }) => {
    return (
        <div className="calendar-controls">
            <div onClick={handlePrevMonth} className='btn prev'></div>
            <div className='current-month'>{currentMonth} {currentYear}</div>
            <div onClick={handleNextMonth} className='btn next'></div>
        </div>
    );
};

export default ChangeMonth;
