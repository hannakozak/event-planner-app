import React from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { LoginWrapper, LoginImage } from './Login.styled';
import loginImage from '../../assets/images/undraw_Mobile_login_re_9ntv.png';
import { Heading } from '../../components/Typography/Typography';

export const Login = () => {
  return (
    <LoginWrapper>
      <LoginImage src={loginImage} alt="undraw_Mobile_login" />
      <div>
        <LoginForm />;
      </div>
    </LoginWrapper>
  );
};
