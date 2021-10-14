import React from 'react';
import {ContactContainer, ContactWrapper, ContactRow, ContactColumn1, ContactColumn2, ContactTextWrapper, ContactTopLine, FormWrap, FormContent, Form, FormLabel, FormInput, FormButton, ContactHeading, ContactSubtitle} from './ContactElem';

const Contact = () => {
  return (
    <>
      <ContactContainer id='contact'>
        <ContactWrapper>
          <ContactRow>
            <ContactColumn1>
              <ContactTextWrapper>
                <ContactTopLine>Have Questions?</ContactTopLine>
                <ContactHeading>CONTACT US</ContactHeading>
                <ContactSubtitle><strong>Email: </strong>mathskills@exlmath.ca</ContactSubtitle>
                <ContactSubtitle><strong>Phone: </strong> 416-398-MATH (6284) </ContactSubtitle>
                <ContactSubtitle><strong>Hours of Operation:</strong> Monday - Saturday 10:00AM to 9:00PM</ContactSubtitle>
              </ContactTextWrapper>
            </ContactColumn1>
            <ContactColumn2>
              <FormWrap>
                <FormContent>
                  <Form action='#'>
                    <ContactTopLine>Leave us a message</ContactTopLine>
                    <FormLabel htmlFor='for'>Name</FormLabel>
                    <FormInput type='text' required />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Your Message</FormLabel>
                    <FormInput type='text' required />
                    <FormButton type='submit'>Submit</FormButton>
                  </Form>
                </FormContent>
              </FormWrap>
            </ContactColumn2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
