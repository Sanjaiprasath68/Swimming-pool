import React from 'react'
import './BookNow.css'
import { Element } from 'react-scroll'
const BookNow = () => {

   const submit = ()=>{
    alert('Welcome to Our SAS SWIMMING POOL')
   }

    return (
        <Element name='booknow'>
            <h1 className='joinnow'>JOIN <span>NOW</span></h1>
            <div className='book_container'>
                <form onSubmit={submit}>
                    <div>
                        <input type='text' placeholder='Your Name' />
                        <input type='email' placeholder='Your Email' className='email' />
                    </div>
                    <div>
                        <select>
                            <option>Service</option>
                            <option>Children</option>
                            <option>Adult</option>
                        </select>
                    </div>
                    <div>
                        <textarea>Message</textarea>
                    </div>
                    <button>SEND MESSAGE</button>
                </form>
            </div>
        </Element>
    )
}

export default BookNow
