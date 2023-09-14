import React, { useState, useRef } from 'react';
import "./Contact.css"
import { useForm } from "react-hook-form";
import { Button, Icon, Modal } from 'semantic-ui-react'


export const Contact = () => {

    const [showMsg, setShowMsg] = useState(false);

    const contactForm = useRef(null);

    function onActionClick(e, data) {
        this.setState({
            showMsg: false
        });
    };

    const { register, formState: { errors } } = useForm();
    const onSubmit = (event) => {
        event.preventDefault();

        console.log("Form Successfully Submitted");

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
                <form name="contact" method="post" className='form' id="contactForm" onSubmit={onSubmit} ref={contactForm}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="TypeOfFeedback" className='formLabelText'>Type of feedback</label>
                        </div>
                        <div className='formInputs'>
                            <select name="TypeOfFeedback" defaultValue={"General"} {...register("TypeOfFeedback")} className='formInputFieldType' >
                                <option value="General">General</option>
                                <option value="Suggestion">Suggestion</option>
                                <option value="Complaint">Complaint</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.TypeOfFeedback && <div className='requiredFeild'>This field is required</div>}
                        </div>
                    </div>
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="Name" className='formLabelText'>Name*</label>
                        </div>
                        <div className='formInputs'>
                            <input name="Name" placeholder='Name'{...register("Name", { required: true })} className='formInputField' />
                        </div>
                        {errors.Name && <div className='requiredFeild'>This field is required</div>}

                    </div>
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="Email" className='formLabelText'>Email Address*</label>
                        </div>
                        <div className='formInputs'>
                            <input name="Email" placeholder='Email Address'{...register("Email", { required: true })} className='formInputField' />
                        </div>
                        {errors.Email && <div className='requiredFeild'>This field is required</div>}

                    </div>
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="Message" className='formLabelText'>Message*</label>
                        </div>
                        <div className='formInputs'>
                            <textarea name="Message" placeholder='....' {...register("Message", { required: true })} className='formInputFieldMessage' />
                        </div>
                        {errors.Email && <div className='requiredFeild'>This field is required</div>}

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