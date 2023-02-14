import React, { useState } from 'react';

import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from '../../components/login/Login.comp';
import { PasswordReset } from '../../components/password-reset/PasswordReset.comp';

import './entry.style.css';

export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoad, setFromLoad] = useState('reset');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert('Please fill in all input of form.');
    }
    console.log(email, password);
  };

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      return alert('Please enter your email.');
    }
    console.log(email);
  };

  const formSwitcher = (formType) => {
    setFromLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === 'login' && (
          <LoginForm
            handleChange={handleChange}
            email={email}
            pass={password}
            handleSubmit={handleSubmit}
            formSwitcher={formSwitcher}
          />
        )}
        {formLoad === 'reset' && (
          <PasswordReset
            handleChange={handleChange}
            email={email}
            handleReset={handleReset}
            formSwitcher={formSwitcher}
          />
        )}
      </Jumbotron>
    </div>
  );
};
