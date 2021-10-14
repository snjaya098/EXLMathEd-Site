import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './appointment.css';
import {Form, Button, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

function Appointment() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{alert(" Thank you for booking your appointment!");}

    setValidated(true);
  };

  function refreshPage() {
      window.location.reload(false);
    }
  return (
  <>
  <Navbar/>
  <div className='appoint__section'>
  <h1 className='appoint__heading'>BOOK AN APPOINTMENT</h1>
  
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
      <Form.Group controlId="validationCustom01">
        <Form.Label><b>Your Name</b></Form.Label>
        <Form.Control required type="text" placeholder="Your Name"/>
        <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group controlId="validationCustom01">
        <Form.Label><b>Student Name</b></Form.Label>
        <Form.Control required type="text" placeholder="Student Name"/>
        <Form.Control.Feedback type="invalid">Please provide the students name.</Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <div class="form-group">
        <OverlayTrigger delay={{ hide: 300, show: 300 }} overlay={(props) => (
          <Tooltip {...props}>Phone Number format should be 123-456-7890</Tooltip>)}
          placement="right">
          <label for="formPhone"><b><u>Phone</u></b></label>
        </OverlayTrigger>
        <input class="form-control" id="formPhone" type="tel" placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" autofocus required/>
        <Form.Control.Feedback type="invalid">Please follow requested format</Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </div>
    </Row>
    
    <Row className="mb-3">
      <div class="control-group">
        <div class="form-group">
          <label for="formService"><b>Grade of Student</b></label>
          <select class="form-control" id="formService">
            <option value="short">Choose a Grade</option>
            <option value="short">Grade 5</option>
            <option value="short">Grade 6</option>
            <option value="short">Grade 7</option>
            <option value="short">Grade 8</option>
            <option value="short">Grade 9</option>
            <option value="short">Grade 10</option>
            <option value="short">Grade 11</option>
            <option value="short">Grade 12</option>
          </select> 
        </div>
      </div>
    </Row>

    <Row className="mb-3">
      <Form> 
      <OverlayTrigger delay={{ hide: 300, show: 300 }} overlay={(props) => (
          <Tooltip {...props}>Please select the teacher you want to meet</Tooltip>)}
          placement="right">
          <Form.Label><b><u>Teacher</u></b></Form.Label>
        </OverlayTrigger> 
        {['radio'].map((type) => (
        <div key={`options-${type}`} className="mb-3">
          <Form.Check label="Alice Persons (Head Teacher/Founder)" name="group1" type={type} id={`options-${type}-1`} required/>
          <Form.Check label="Jenna Marison (Middle School Teacher)" name="group1" type={type} id={`options-${type}-2`} required/>
          <Form.Check label="Alex Jones (Highschool Teacher)" name="group1" type={type} id={`options-${type}-3`} required/>
        </div>))}
      </Form>
    </Row>
    
    <Row className="mb-3">
      <div class="form-group">
        <label for="formDate"><b>Appointment Date</b></label>
        <input class="form-control" type="date" autofocus required/>
        <Form.Control.Feedback type="invalid">Please pick a date for your appointment</Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </div>
    </Row>
    
    <Row className="mb-3">
      <div class="form-group">
        <label for="formTime"><b>Appointment Time</b></label>
        <input class="form-control" id="formTime" type="time" autofocus required/>
        <Form.Control.Feedback type="invalid">Please pick a time for your appointment</Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </div>
    </Row>

    <Row className="mb-3">
      <Form.Group controlId="validationCustom01">
      <OverlayTrigger delay={{ hide: 300, show: 300 }} overlay={(props) => (
          <Tooltip {...props}>Tell us a little bit about your reason for the appointemnt</Tooltip>)}
          placement="right">
          <Form.Label><b><u>Appointment Reason</u></b></Form.Label>
        </OverlayTrigger>
        <Form.Control required type="text"/>
        <Form.Control.Feedback type="invalid">Please provide a reason.</Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Row>

    <Row xs="auto">
      <Col>
        <Button type="submit" variant="success" >Submit Form</Button>
      </Col>
      <Col>
        <div>
          <button type="button" class="btn btn-danger" onClick={refreshPage}>Cancel Form</button>
        </div>
      </Col>
    </Row>
  </Form>
  </div>
  <Footer/>
  </>
  );
}

export default Appointment;