import React from 'react';
import homeImage from '../../assets/images/undraw_Events_re_98ue.png';
import { HomeImage, HomeWrapper, HomeText } from './Home.styled';
import { Button } from '../../components/Button/Button';
import { Heading, Text, Link } from '../../components/Typography/Typography';

export const Home = () => {
  return (
    <HomeWrapper>
      <HomeImage src={homeImage} alt="undraw_Events" />
      <HomeText>
        <Heading level={1} color={'#00ADB5'}>
          Manage Your plans easily <br />
          with <br /> Event Planner App
        </Heading>
        <Button variant="primary">Log in</Button>
        <Text>
          Do not have an account yet? Please <Link>sign up</Link>
        </Text>
      </HomeText>
    </HomeWrapper>
  );
};
