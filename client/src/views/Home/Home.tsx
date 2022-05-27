import React from 'react';
import homeImage from '../../assets/images/undraw_Events_re_98ue.png';
import { HomeImage, HomeWrapper, HomeText } from './Home.styled';
import { Button } from '../../components/Button/Button';
import { Heading, Text, Link } from '../../components/Typography/Typography';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('login');
  };
  return (
    <HomeWrapper>
      <HomeImage src={homeImage} alt="undraw_Events" />
      <HomeText>
        <Heading level={1} color={'#00ADB5'}>
          Manage Your plans easily with <br /> Event Planner App
        </Heading>
        <Button variant="primary" onClick={handleLogin}>
          Log in
        </Button>
        <Text>
          Do not have an account yet? Please{' '}
          <RouterLink to="signup">
            <Link>sign up</Link>
          </RouterLink>
        </Text>
      </HomeText>
    </HomeWrapper>
  );
};
