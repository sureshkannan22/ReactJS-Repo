import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../components/AppContextProvider';
import { fetchAPI } from '../utils/fakeApi';

const BookingForm = () => {
    const { availableTimes, dispatchAvailableTimes } = useAppContext();
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [ocassion, setOcassion] = useState('');
    const [loading, setLoading] = useState(false);

    const handleDateChange = (e) => setDate(e.target.value);
    const handleTimeChange = (e) => setTime(e.target.value);
    const handleGuestsChange = (e) => setGuests(e.target.value);
    const handleOcassionChange = (e) => setOcassion(e.target.value);

    const onSubmitBookingForm = (e) => {
        e.preventDefault();
        navigate('/confirmedBooking', { replace: true });
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            const reservationTimes = await fetchAPI(new Date());
            dispatchAvailableTimes({reservationTimes});
            setLoading(false);
        })(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
        <h4>Book Now</h4>
            {!loading &&
                <form className="booking-form" onSubmit={onSubmitBookingForm}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={handleDateChange} required/>

                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={time} onChange={handleTimeChange} required>
                        {availableTimes.map((time, index) => <option key={`available-time-${index}`} >{time}</option>)} 
                    </select>

                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} required/>

                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={ocassion} onChange={handleOcassionChange} required>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>

                    <input type="submit" value="Make Your reservation" />
                </form>
            }
        </>
    );
};

export default BookingForm;