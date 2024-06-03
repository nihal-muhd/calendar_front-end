import React from 'react'
import './Days.scss'
import days from '../../constants/week-days'

const Days = () => {
    return (
        <>
            <div className='days-wrap'>
                {days.map((day, i) => {
                    return <div className={`day ${day.weekend ? 'weekend' : ''}`} key={i}>{day.displayName}</div>
                })}
            </div>
        </>
    )
}

export default Days
