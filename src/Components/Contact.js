import React from 'react';
import "./Contact.css"
import { useForm } from "react-hook-form";

export const Contact = () => {

    const postmark = require("postmark");

    var client = new postmark.ServerClient("40fa4696-54bc-47e1-809e-dbda1a1e082d");

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const recipient = data.Email;
        //const date = new Date();
        const sender = data.Name;
        const subject = "New contact form has been submitted - "+data.TypeOfFeedback+ " - " + sender;
        const message = data.Message;


        client.sendEmail({
            "From": "brenton.turnor@insight.com",
            "To": "brenton.turnor@insight.com",
            "Subject": subject,
            "HtmlBody": "New message received from - "+recipient, message,
            "TextBody": "Text Body - " + message,
            "MessageStream": "he-man-woman-haters-investment"
          });

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
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="TypeOfFeedback" className='formLabelText'>Type of feedback</label>
                        </div>
                        <div className='formInputs'>
                            <select defaultValue={"General"} {...register("TypeOfFeedback")} className='formInputFieldType' >
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
                            <input placeholder='Name'{...register("Name", { required: true })} className='formInputField' />
                        </div>
                        {errors.Name && <div className='requiredFeild'>This field is required</div>}

                    </div>
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="Email" className='formLabelText'>Email Address*</label>
                        </div>
                        <div className='formInputs'>
                            <input placeholder='Email Address'{...register("Email", { required: true })} className='formInputField' />
                        </div>
                        {errors.Email && <div className='requiredFeild'>This field is required</div>}

                    </div>
                    <div>
                        <div className='formLabels'>
                            <label htmlFor="Message" className='formLabelText'>Message*</label>
                        </div>
                        <div className='formInputs'>
                            <textarea placeholder='....' {...register("Message", { required: true })} className='formInputFieldMessage' />
                        </div>
                        {errors.Email && <div className='requiredFeild'>This field is required</div>}

                    </div>
                    <input type="submit" className='submitButton' />
                </form>
            </div>
        </div>
    )
}