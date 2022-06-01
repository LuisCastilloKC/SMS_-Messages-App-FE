import React, { useState } from 'react'
import { Container, Header, Form, Input, TextArea, Button } from './SmsStyle'

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

    const handleChange = (e) => {
        if(e.target.name == 'number'){
            setNumber(e.target.value)
        }else if(e.target.name === 'sms'){
            setSms(e.target.value)
        }
    }

    return(
        <Container>
            <Header>Send SMS Message!</Header>
            <Form onSubmit={sendSms}>
                
                <Input name='number' onChange={handleChange} placeholder="Mobile Number"></Input>
               
                <TextArea name='sms' onChange={handleChange}></TextArea>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}


export default SmsForm