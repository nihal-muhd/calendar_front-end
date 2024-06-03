import React, { useEffect, useState } from 'react'
import './Events.scss'

const Events = ({ selectedDate, refresh }) => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('events')) || {};

        const dateKey = selectedDate.slice(0, 7); // e.g., "2024-06"
        const eventsForMonth = storedEvents[dateKey] || [];
        const filteredEvents = eventsForMonth.filter(event => event.date === selectedDate);

        setEvents(filteredEvents);
    }, [selectedDate, refresh]);

    return (
        events.length > 0 && (
            <div className='events-wrap'>
                {events.map((event, index) => (
                    <div className='event-name' key={index}>{event.title}</div>
                ))}
            </div>
        )
    );
}

export default Events
