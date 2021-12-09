import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description_1="Order Online for"
        description_2="Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtntext="Existing inventory"
      />
      <Section
        title="Model Y"
        description_1="Order Online for"
        description_2="Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtntext="Existing inventory"
      />
      <Section
        title="Model 3"
        description_1="Order Online for"
        description_2="Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtntext="Existing inventory"
      />
      <Section
        title="Model X"
        description_1="Order Online for"
        description_2="Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtntext="Existing inventory"
      />
      <Section
        title="Solar Panels"
        description_1="Lowest Cost Solar Panels in America"
        description_2=""
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtntext="Learn more"
      />
      <Section
        title="Solar Roof"
        description_1="Produce Clean Energy From Your Roof"
        description_2=""
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtntext="Learn more"
      />
      <Section
        title="Accessories"
        description_1=""
        description_2=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
`;
export default Home;
