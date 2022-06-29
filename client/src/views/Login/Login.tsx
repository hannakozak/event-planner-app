import React from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Link } from '../../components/Typography/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { LoginWrapper, LoginImage, SignupLink } from './Login.styled';
import loginImage from '../../assets/images/undraw_Mobile_login_re_9ntv.png';

export const Login = () => {
  return (
    <LoginWrapper>
      <LoginImage src={loginImage} alt="undraw_Mobile_login" />
      <div>
        <LoginForm />
        <SignupLink>
          Do not have an account yet? Please{' '}
          <RouterLink to="/signup">
            <Link>sign up</Link>
          </RouterLink>
        </SignupLink>
      </div>
    </LoginWrapper>
  );
};
