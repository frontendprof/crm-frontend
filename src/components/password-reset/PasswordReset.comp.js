import React from 'react';
import PropTypes from 'prop-types'; // ES6

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const PasswordReset = ({
  handleChange,
  email,
  handleReset,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Password Reset</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleReset}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Button type="submit">Reset</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" onClick={() => formSwitcher('login')}>
            Login now.
          </a>
        </Col>
      </Row>
    </Container>
  );
};

PasswordReset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
