import React from 'react';
import { faAngleDown, faArrowRight, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BookingReview = ({ hotelDetail }) => {
    const guestDetail = JSON.parse(sessionStorage.getItem('formData'));
    // const hotelInfo = JSON.parse(sessionStorage.getItem('hotel'));

    function dateDiffInDays(date1, date2) {
        // round to the nearest whole number
        return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
    }
    let dayCount = dateDiffInDays(new Date(guestDetail.checkIn), new Date(guestDetail.checkOut));

    let cleaningFee = 10;
    let serviceFee = 21;
    let count = 1;
    const totalCount = count * hotelDetail.rate * dayCount;
    const grandTotal = cleaningFee + serviceFee + totalCount;

    const formStyle = {
        border: '1px solid lightgray', 
        height: "40px", 
        borderRadius: "5px", 
        padding: "5px 15px", 
        display: "flex", 
        width: "100%", 
        justifyContent: "space-between"
    }

    return (
        <div style={{  padding: '30px', borderRadius: "10px", boxShadow: "0 8px 10px -6px black" }}>
            <div>
                <div className="row">

                    <div className="col-md-6">
                        <h6>{hotelDetail.description}</h6>
                        <div className='mt-5 d-none d-md-block'>
                            <h6>${hotelDetail.rate}/Night</h6>
                            <p><FontAwesomeIcon style={{ color: "#2BDE8C" }} icon={faStar} />{hotelDetail.review}(20 review)</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img style={{ width: '100%', borderRadius: "10px" }} src={hotelDetail.image} alt="" />
                    </div>
                </div>

                <p className='text-secondary fw-bold'>Dates</p>
                <div style={formStyle}>
                    <p>{new Date(guestDetail.checkIn).toLocaleString('en-us', { day: 'numeric', year: 'numeric', month: 'numeric' })} </p>
                    <p><FontAwesomeIcon icon={faArrowRight} /></p>
                    <p>{new Date(guestDetail.checkOut).toLocaleString('en-us', { day: 'numeric', year: 'numeric', month: 'numeric' })}</p>
                </div>
                <p className='text-secondary fw-bold mt-3'>Guests</p>
                <div style={formStyle}>
                    <p>{guestDetail.adult + guestDetail.children + guestDetail.babies} guests</p>
                    <p><FontAwesomeIcon icon={faAngleDown} /></p>
                </div>
                <div style={formStyle}>
                    <p>${hotelDetail.rate} <FontAwesomeIcon icon={faTimes} /> {dayCount} nights</p>
                    <p>${totalCount}</p>
                </div>
                <div style={formStyle}>
                    <p>Cleaning Fee</p>
                    <p>${cleaningFee}</p>
                </div>
                <div style={formStyle}>
                    <p>Service Fee</p>
                    <p>{serviceFee}</p>
                </div>
                <div style={formStyle}>
                    <p className='fw-bold'>Total</p>
                    <p className='fw-bold'>{grandTotal}</p>
                </div>
            </div>
        </div>
    );
};

export default BookingReview;