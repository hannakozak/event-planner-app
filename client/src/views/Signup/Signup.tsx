import React from 'react';
import { SignupForm } from '../../components/SignupForm/SignupForm';
import { SignupWrapper, SignupImage } from './Signup.styled';
import signupImage from '../../assets/images/undraw_Access_account_re_8spm.png';
import { Heading } from '../../components/Typography/Typography';

export const Signup = () => {
  return (
    <SignupWrapper>
      <SignupImage src={signupImage} alt="undraw_Access_account" />
      <div>
        <SignupForm />;
      </div>
    </SignupWrapper>
  );
};
