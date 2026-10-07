import React from 'react'
import './contact.css'
const contact = () => {
  return (
    <div className='Contact'>
        <form action="">
            <input type="text" placeholder='Enter Your name...' name='username' required/>
            <input type="email" placeholder='Email' name='email' required/>
            <textarea name="message" placeholder='message' required></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default contact