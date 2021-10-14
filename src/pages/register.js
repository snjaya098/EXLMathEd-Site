import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import {Form, Button, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

function Register() {

  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{alert(" Thank you for your purchase!");}

    setValidated(true);
  };
  
  function refreshPage() {window.location.reload(false);}

  return (
  <>
  <Navbar/>
  <div className='register__section'>
  <h1 className='register__heading'>REGISTER FOR COURSE</h1>
  
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
        <Form.Control.Feedback type="invalid">Please follow requested format.</Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </div>
    </Row>
    
    <Row className="mb-3">
      <div class="control-group">
        <div class="form-group">
          <label for="formService"><b>Course</b></label>
          <select class="form-control" id="formService">
            <option value="short">Choose a Course</option>
            <option value="short">Grade 5 Math</option>
            <option value="short">Grade 6 Math</option>
            <option value="short">Grade 7 Math</option>
            <option value="short">Grade 8 Math</option>
            <option value="short">Grade 9 Academic (MPM1D)</option>
            <option value="short">Grade 9 Applied (MFM1P)</option>
            <option value="short">Grade 10 Academic (MPM2D)</option>
            <option value="short">Grade 10 Applied (MPM2P)</option>
            <option value="short">Grade 11 Functions (MCR3U)</option>
            <option value="short">Grade 11 Functions and Applications (MCF3M)</option>
            <option value="short">Grade 12 Advanced Functions (MHF4U)</option>
            <option value="short">Grade 12 Calculus and Vectors (MCV4U)</option>
            <option value="short">Grade 12 Data Management (MDM4U)</option>
            <option value="short">Grade 12 College Math (MAP4C)</option>
          </select> 
        </div>
      </div>
    </Row>

    <Row className="mb-3">
      <Form>
        <OverlayTrigger delay={{ hide: 300, show: 300 }} overlay={(props) => (
          <Tooltip {...props}>Please choose the packages you want</Tooltip>)}
          placement="right">
          <Form.Label><b><u>Package</u></b></Form.Label>
        </OverlayTrigger> 
        {['checkbox'].map((type) => (
        <div key={`options-${type}`} className="mb-3" >
          <Form.Check label="Starter Pack ($85 for 6 classes)" name="group1" type={type} id={`options-${type}-1`} />
          <Form.Check label="Bundle Pack ($170 for 15 classes)" name="group1" type={type} id={`options-${type}-2`}/>
          <Form.Check label="Asynchronous Pack ($50 a week)" name="group1" type={type} id={`options-${type}-3`}/>
          <Form.Control.Feedback type="invalid">Please select a package</Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </div>))}
      </Form>
    </Row> 

    <Row className="mb-3">
      <div class="form-group">
        <OverlayTrigger delay={{ hide: 300, show: 300 }} overlay={(props) => (
          <Tooltip {...props}>Please enter your credit card information in order to purchase class packages</Tooltip>)}
          placement="right">
          <label for="formCC"><b><u>Credit Card Information </u></b></label>
        </OverlayTrigger>
          <input class="form-control" id="formCC" type="tel" inputmode="numeric" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" autocomplete="cc-number" minlength="13" maxlength="19" placeholder="XXXX XXXX XXXX XXXX" autofocus required/>
          <Form.Control.Feedback type="invalid">Please provide card number as the requested format</Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          {/* Accepted Credit Cards: <i class="fa fa-cc-amex" aria-hidden="true"></i> <i class="fa fa-cc-mastercard" aria-hidden="true"></i> <i class="fa fa-cc-visa" aria-hidden="true"></i> <i class="fa fa-cc-paypal" aria-hidden="true"></i> */}
      </div>
    </Row>

    <Row className="mb-3">
      <Col>
        <div class="form-group">
          <label for="formCCExp"><b>Card Expiry Date</b></label>
          <input type="text" class="form-control" minlength="7" maxlength="7" placeholder="MM/YYYY" pattern="[0-9]{2}/[0-9]{4}" autofocus required/>
          <Form.Control.Feedback type="invalid">Please enter date as reqested format</Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </div>
      </Col>
      <Col>
        <div class="form-group">
        <OverlayTrigger delay={{ hide: 300, show: 300 }} overlay={(props) => (
          <Tooltip {...props}>This is the three-digit code on the back of your credit card</Tooltip>)}
          placement="right">
          <label for="formCVV"><b><u>CVV</u></b></label>
        </OverlayTrigger>
          <input type="text" class="form-control" minlength="3" maxlength="3" placeholder="XXX" autofocus required/>
          <Form.Control.Feedback type="invalid">Please provide CVV number</Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </div> 
      </Col>
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

export default Register;