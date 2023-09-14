import React, { useState, useRef } from 'react';
import "./Contact.css"
import { Button, Icon, Modal } from 'semantic-ui-react'


export const Contact = () => {

    const [showMsg, setShowMsg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [typeOfFeedback, setTypeOfFeedback] = useState('General');
    //const[ all, setAll ] = useState({ Name: '', Email: '', Message: '', TypeOfFeedback: '' });

    const encode = (data) => {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
      };

    const contactForm = useRef(null);

    function onActionClick(e, data) {
        this.setState({
            showMsg: false
        });
    };
    
    const onSubmit = (event) => {
        
        fetch ( "/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({'form-name': "contact", 
            Name: name,
            Email: email,
            Message: message,
            TypeOfFeedback: typeOfFeedback,
            }),
        })
        .then(() => console.log("Form successfully submitted", "Name: ", name, "Email: ", email, "Message: ", message, "TypeOfFeedback: ", typeOfFeedback ))
        .catch((error) => alert(error));

        event.preventDefault();

        contactForm.current.reset();

        setShowMsg(true);
    }

    return (
        <div className='ContactMain-div'>
            <h1 className='text'>Contact Form</h1>
            <div className='generalText'>
                <div>All members have a voice. Please submit any feedback that you have for the club.</div>
                <ul className='contactFormListItems'>
                    <li>This can be changes you want to see</li>
                    <li>Any suggestions you have for the club or windup</li>
                    <li>Complaints against the club or a member</li>
                    <li>Updates you want to see on this website</li>
                </ul>
            </div>
            <div className='formOuter'>
                <form name="contact" method="post" className='form' id="contactForm" ref={contactForm} onSubmit={(e) => onSubmit(e)}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="TypeOfFeedback" className='formLabelText'>Type of feedback</label>
                        </div>
                        <div className='formInputs'>
                            <select name="TypeOfFeedback" defaultValue={"General"} className='formInputFieldType' onChange={(e) => setTypeOfFeedback(e.target.value)}>
                                <option value="General">General</option>
                                <option value="Suggestion">Suggestion</option>
                                <option value="Complaint">Complaint</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="Name" className='formLabelText'>Name*</label>
                        </div>
                        <div className='formInputs'>
                            <input name="Name" placeholder='Name' className='formInputField' onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="Email" className='formLabelText'>Email Address*</label>
                        </div>
                        <div className='formInputs'>
                            <input name="Email" placeholder='Email Address' className='formInputField' onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                    </div>
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="Message" className='formLabelText'>Message*</label>
                        </div>
                        <div className='formInputs'>
                            <textarea name="Message" placeholder='....' className='formInputFieldMessage' onChange={(e) => setMessage(e.target.value)}/>
                        </div>

                    </div>
                    <input type="submit" className='submitButton' />
                </form>
            </div>
            <Modal
                open={showMsg}
                onActionClick={onActionClick}
            >
                <Modal.Header>
                    Form submitted successfully
                </Modal.Header>
                <Modal.Content>
                    Thankyou for your feedback. We will get back to you as soon as possible.
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setShowMsg(false)}>
                        <Icon name='remove' /> Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}