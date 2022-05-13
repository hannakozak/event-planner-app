import React from 'react';
import homeImage from '../../assets/images/undraw_Events_re_98ue.png';
import { HomeImage, HomeWrapper, HomeText } from './Home.styled';
export const Home = () => {
  return (
    <HomeWrapper>
      <HomeImage src={homeImage} alt="undraw_Events" />
      <HomeText>
        <h1>Manage Your plans easily </h1>
        <h2> with</h2>
        <h2>Event Planner App </h2>
        <button>Log in</button>
        <p> Do not have an account yet? Please sign up</p>
      </HomeText>
    </HomeWrapper>
  );
};
