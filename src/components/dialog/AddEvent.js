import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddEvent.scss'

const AddEvent = ({ initialDate, closeDialog, onEventAdded }) => {
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        participants: '',
        date: initialDate ? initialDate.toISOString().slice(0, 10) : '',
        time: '',
        notes: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };
    const closeForm = () => {
        closeDialog()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        // Validation
        if (!eventData.title.trim()) {
            newErrors.title = 'Title is required';
        }
        if (!eventData.date.trim()) {
            newErrors.date = 'Date is required';
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(eventData.date)) {
            newErrors.date = 'Invalid date format';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const dateKey = eventData.date.slice(0, 7); // e.g., "2024-06"
            const storedEvents = JSON.parse(localStorage.getItem('events')) || {};
            if (!storedEvents[dateKey]) {
                storedEvents[dateKey] = [];
            }
            storedEvents[dateKey].push(eventData);
            localStorage.setItem('events', JSON.stringify(storedEvents));


            setEventData({
                title: '',
                description: '',
                participants: '',
                date: initialDate ? initialDate.toISOString().slice(0, 10) : '',
                time: '',
                notes: ''
            });
            setErrors({});
            onEventAdded();
            closeForm()
        }
    };

    return (
        <>
            <div className='blur'></div>
            <div className='form-wrap'>
                <form onSubmit={handleSubmit}>
                    <div className='side-title'>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={eventData.title}
                            onChange={handleChange}
                        />
                        {errors.title && <span className="error" style={{ color: 'red', fontSize: '12px' }}>{errors.title}</span>}
                    </div>
                    <div className='side-title'>
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={eventData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='side-title'>
                        <label>Participants:</label>
                        <input
                            type="text"
                            name="participants"
                            value={eventData.participants}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='side-title'>
                        <label>Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={eventData.date}
                            onChange={handleChange}
                        />
                        {errors.date && <span className="error">{errors.date}</span>}
                    </div>
                    <div className='side-title'>
                        <label>Time:</label>
                        <input
                            type="time"
                            name="time"
                            value={eventData.time}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='side-title'>
                        <label>Session Notes:</label>
                        <textarea
                            name="notes"
                            value={eventData.notes}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='btn-wrap'>
                        <button className='submit' type="submit">Submit</button>
                        <button className='close' type="close" onClick={() => closeForm()}>close</button>
                    </div>
                </form>
            </div>
        </>
    );
};

// EventForm.propTypes = {
//     initialDate: PropTypes.instanceOf(Date)
// };

export default AddEvent
