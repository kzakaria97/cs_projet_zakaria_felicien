import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'

export default function Contact() {
  return (
    <section className='Contact'>
        <Navigation />      
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
        <Footer />
    </section>
  )
}
