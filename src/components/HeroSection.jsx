import React from "react";
import styled from "styled-components";
import {
  largeScreen,
  extraLargeScreen,
  mediumScreen,
  smallScreen,
} from "../utils/responsive";

import { Menu } from "@material-ui/icons";

import { useAuthContext } from "../store/Context";

/*-------------------------------------------- Start of Main Component --------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
export default function HeroSection() {
  const { setIsNavBarOpen } = useAuthContext();

  return (
    <Container>
      <Top>
        <h2>bitly</h2>
        <button onClick={() => setIsNavBarOpen(true)}>
          <Menu className="icon" />
        </button>
      </Top>
      <Center>
        <figure>
          <img
            src="https://docrdsfx76ssb.cloudfront.net/static/1665157317/pages/wp-content/uploads/2022/08/home-hero-mobile-v2.png"
            alt="Illustration disaplys computers and other tools"
          />
        </figure>
        <div className="text">
          <h1>
            We’ve expanded! <br /> Shorten URLs. Generate QR Codes. <br /> And
            now, create Link-in-bios.
          </h1>
          <button>Get Started for Free</button>
        </div>
      </Center>
    </Container>
  );
}

const Container = styled.section`
  padding: 1rem 3%;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 4rem;
    color: orange;
    font-family: "Lobster", cursive;
    background-color: #fff;
  }

  button {
    position: absolute;
    top: 1.5rem;
    right: 5%;
    color: orange;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 100;

    .icon {
      font-size: 4rem;
    }
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-3.4rem);

  ${largeScreen({
    flexDirection: `row`,
    overflow: `hidden`,
    transform: `translateY(0)`,
  })}

  ${extraLargeScreen({
    marginLeft: `6%`,
  })}

  figure {
    position: relative;
    width: 100%;

    ${mediumScreen({
      width: `80%`,
    })}

    ${largeScreen({
      order: 2,
      transform: `translateX(5rem)`,
      width: `100%`,
    })}

    ${extraLargeScreen({
      height: `30vw`,
      transform: `translateX(-5.5rem)`,
    })}

    img {
      height: 100%;
      width: 100%;
    }
  }

  div.text {
    text-align: center;

    ${largeScreen({
      marginTop: 0,
      width: `110%`,
      textAlign: `left`,
    })}

    h1 {
      font-size: 2rem;
      color: #252628;
      font-weight: 800;
      margin-bottom: 1.8rem;
      line-height: 1.4;

      ${smallScreen({
        fontSize: `3.6rem`,
      })}
    }

    p {
      font-size: 2rem;
      margin: 1rem 0;
      color: rgba(0, 0, 0, 0.8);

      ${largeScreen({
        fontSize: `2.5rem`,
      })}
    }

    button {
      color: #fff;
      padding: 1.8rem 6rem;
      text-align: center;
      font-size: 1.6rem;
      border-radius: 5px;
      background-color: #0236b9;
      margin-top: 1rem;
      border: none;
      outline: none;
      cursor: pointer;

      ${smallScreen({
        fontSize: `2rem`,
      })}
    }
  }
`;
