import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{backgroundImage: `url(${PizzaLeft})`}}></div>
            <div className='rightSide'>
                <h1>Contact Us</h1>
                <form id='contact-form' method='POST'>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name='name' placeholder='Enter full name...'/>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name='email' placeholder='Enter email...'/>
                    <label htmlFor="message">Your Message</label>
                    <textarea rows="6" placeholder='Enter message...'/>
                </form>
            </div>
        </div>
    )
}

export default Contact