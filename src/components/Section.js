import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description_1,
  description_2,
  backgroundImg,
  leftBtnText,
  rightBtntext,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>
            {description_1} <span>{description_2}</span>
          </p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtntext && <RightButton>{rightBtntext}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  scroll-snap-align: center;

  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 16vh;
  color: #5c5d61;
  h1 {
    font-size: 40px;
    font-weight: 550;
  }
  p {
    opacity: 0.8;
  }
  span {
    border-bottom: 1.5px solid;
    cursor: pointer;

    /* transition: transform 0.5s ease-in-out 0.5s, opacity 0.5s ease-in-out 1s,
      -webkit-transform 0.5s ease-in-out 0.5s; */
    transition: box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75), color 0.33s ease,
      opacity 0.5s ease-in-out 1s;

    &:hover {
      color: #181b21;
      box-shadow: 0px 1px 0 0 #181b21;
      opacity: 1;
    }
  }
`;
const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  color: #393c41;
  opacity: 0.7;
`;

const DownArrow = styled.img`
  margin-top: 5px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
export default Section;
