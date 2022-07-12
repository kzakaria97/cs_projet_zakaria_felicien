import React from 'react'

export default function Contact() {
  return (
    <section className='Contact'>
        <h1>Contact</h1>
        <div className="contactForm">
            <div className="map"></div>
            <div className="formInput">
                <h2>Send us your message</h2>
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='Phone Number' />
                <input type="text" placeholder='Email Adress' />
                <input type="text" placeholder='Message' />
                <button type='submit'>SEND</button>
            </div>
        </div>
    </section>
  )
}
