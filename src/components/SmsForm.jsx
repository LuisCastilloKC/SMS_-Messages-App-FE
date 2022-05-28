import React, { useState } from 'react'

const SmsForm = () => {
    const [ sms, setSms] = useState('')
    const [number, setNumber]= useState('')

    const sendSms = (e) => {
       e.preventDefault();

       let smsData = {
           mobile_number: '1'+ number,
           message: sms
       }
       fetch('http://localhost:3000/sms_messages',{
       method: 'POST',
       headers: {
           'content-type': 'application/json',
           'accepts': 'application/json'
            },
            body: JSON.stringify(smsData)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    const handleChange = () => {
        
    }

    return(
        <div className='container'>
            <h3>Send SMS Message!</h3>
            <form onSubmit={sendSms}>
                <label>Mobile Number:</label>
                <input name='number' onChange={handleChange}></input>
                <label>Message:</label>
                <textarea name='sms' onChange={handleChange}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default SmsForm