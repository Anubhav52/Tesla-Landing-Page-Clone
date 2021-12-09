import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="/">
              {car}
            </a>
          ))}

        <a href="/">Solar Roof</a>
        <a href="/">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <a className="menu" onClick={() => setBurgerStatus(true)}>
          Menu
        </a>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a key={index} href="/">
                {car}
              </a>
            </li>
          ))}
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-in</a>
        </li>
        <li>
          <a href="/">Cybertruck</a>
        </li>
        <li>
          <a href="/">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  a {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 100px;

  a {
    font-weight: 600;
    padding: 0 13px;
    flex-wrap: nowrap;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      top: -12px;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #393c41;
      border-radius: 30px;
      padding: 20px 5px;
      z-index: -2;
      opacity: 0;
      transition: all 0.5s ease;
    }

    &:hover:before {
      opacity: 0.1;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  a {
    font-weight: 600;
    padding: 0 13px;
    flex-wrap: nowrap;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      top: -12px;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #393c41;
      border-radius: 30px;
      padding: 20px 5px;
      z-index: -2;
      opacity: 0;
      transition: all 0.5s ease;
    }

    &:hover:before {
      opacity: 0.1;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  .menu {
    @media (max-width: 768px) {
      display: block !important;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        top: -12px;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #393c41;
        border-radius: 30px;
        padding: 20px 10px;
        z-index: -2;
        opacity: 0.1;
        transition: all 0.5s ease;
      }
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
export default Header;
