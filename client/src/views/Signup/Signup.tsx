import React from 'react';
import { SignupForm } from '../../components/SignupForm/SignupForm';
import { Link } from '../../components/Typography/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { SignupWrapper, SignupImage, SigninLink } from './Signup.styled';
import signupImage from '../../assets/images/undraw_Access_account_re_8spm.png';

export const Signup = () => {
  return (
    <SignupWrapper>
      <SignupImage src={signupImage} alt="undraw_Access_account" />
      <div>
        <SignupForm />
        <SigninLink>
          Do you already have the account? Please{' '}
          <RouterLink to="/login">
            <Link>sign in</Link>
          </RouterLink>
        </SigninLink>
      </div>
    </SignupWrapper>
  );
};
