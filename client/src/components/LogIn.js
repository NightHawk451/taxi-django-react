// client/src/components/LogIn.js

import React, { useState } from 'react'; // changed
import { Formik } from 'formik';
import {
  Breadcrumb, Button, Card, Col, Form, Row
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'; // changed

// changed
function LogIn (props) {
  // new
  const [isSubmitted, setSubmitted] = useState(false);

  // new
  const onSubmit = (values, actions) => setSubmitted(true);

  // new
  if (isSubmitted) {
    return <Redirect to='/' />;
  }

  return (
    <Row>
      <Col lg={12}>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Log in</Breadcrumb.Item>
        </Breadcrumb>
        <Card>
          <Card.Header>Log in</Card.Header>
          <Card.Body>
            <Formik
              initialValues={{
                username: '',
                password: ''
              }}
              onSubmit={onSubmit}
              >
                {({
                  handleChange,
                  handleSubmit,
                  values
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId='username'>
                      <Form.Label>Username:</Form.Label>
                      <Form.Control
                        name='username'
                        onChange={handleChange}
                        value={values.username}
                      />
                    </Form.Group>
                    <Form.Group controlId='password'>
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        name='password'
                        onChange={handleChange}
                        type='password'
                        value={values.password}
                      />
                    </Form.Group>
                    <Button block type='submit' variant='primary'>Log in</Button>
                  </Form>
                )}
            </Formik>
          </Card.Body>
          <p className='mt-3 text-center'>
            Don't have an account? <Link to='/sign-up'>Sign up!</Link>
          </p>
        </Card>
      </Col>
    </Row>
  );
}

export default LogIn;