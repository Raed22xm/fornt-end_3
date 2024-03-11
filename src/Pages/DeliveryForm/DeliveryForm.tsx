import React, { useState } from 'react';
import './DeliveryForm.css';
import Navbar from '../../Components/Navbar/Navbar';
const DeliveryForm = () => {
    const [formData, setFormData] = useState({
        country: '',
        zipCode: '',
        city: '',
        addressLine1: '',
        addressLine2: '',
        name: '',
        phoneNumber: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.country != "Denmark") {
            alert("The Country is limited to Denmark Only !")
        }else{
            console.log(formData);
        }
        // Handle form submission logic here
    };

    return (
        <>
            <Navbar />
            <div className="address-form-container">
                <h2>Delivery Address</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            className='inputTag'
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            className='inputTag'
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className='inputTag'
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressLine1">Address Line 1:</label>
                        <input
                            type="text"
                            id="addressLine1"
                            name="addressLine1"
                            className='inputTag'
                            value={formData.addressLine1}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressLine2">Address Line 2:</label>
                        <input
                            type="text"
                            id="addressLine2"
                            name="addressLine2"
                            className='inputTag'
                            value={formData.addressLine2}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className='inputTag'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            className='inputTag'
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            maxLength={8}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className='inputTag'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className='button' >Submit</button>
                </form>
            </div>
        </>
    );
};

export default DeliveryForm;

