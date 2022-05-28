import React, { useState } from 'react'

const SmsForm = () => {
    const [ sms, setSms] = useState('')
    const [number, setNumber]= useState('')

    return(
        <div className='container'>
            <h3>Send SMS Message!</h3>
            <form>
                <label>Mobile Number:</label>
                <input name='number'></input>
                <label>Message:</label>
                <textarea name='sms'></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default SmsForm