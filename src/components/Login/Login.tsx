import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import LoginService from '../../services/Login/login.service';
import './LoginStyles.scss';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (): Promise<void> => {
    try {
      const data = await LoginService.sendLoginRequest();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleLoginSubmit();
  }, []);

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  };

  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <form className="form">
          <TextField id="username-field" label="Username" onChange={updateUsername} />
          <br />
          <TextField id="password-field" label="Password" type="password" onChange={updatePassword} />
          <Button className="loginBtn" variant="contained" color="primary" onClick={handleLoginSubmit}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
