import React from "react";
import styled from "styled-components";

import { mediumScreen, largeScreen } from "../utils/responsive";

import { footerNav } from "../utils/data";

import { LinkedIn, Facebook, Instagram, Twitter } from "@material-ui/icons";

export default function Footer() {
  return (
    <FooterSection>
      <NavContainer>
        <div className="nav_item-wrapper">
          {footerNav.map((navItem) => (
            <div key={navItem.id} className="nav_item">
              <h3>{navItem.title}</h3>
              {navItem.navList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          ))}
        </div>

        <div className="copyright">
          <h2>bitly</h2>
          <p>
            The Project is a clone of{" "}
            <a
              href="https://bitly.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bitly Website
            </a>{" "}
            created by Muneeb Ali to Practice Reactjs skills.
          </p>

          <div className="media_links">
            <ul>
              <li>
                <Twitter className="icon" />
              </li>
              <li>
                <Instagram className="icon" />
              </li>
              <li>
                <LinkedIn className="icon" />
              </li>
              <li>
                <Facebook className="icon" />
              </li>
            </ul>
          </div>
        </div>
      </NavContainer>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  background-color: #0b1736;
  padding: 6rem 0;
`;

const NavContainer = styled.div`
  font-size: 1.5rem;
  width: 112rem;
  max-width: 95%;
  margin: 0 auto;

  ${largeScreen({
    display: `flex`,
  })}

  .nav_item-wrapper {
    ${mediumScreen({
      display: `flex`,
      flexWrap: `wrap`,
    })}
  }

  .nav_item {
    width: 25rem;
    padding: 1rem 0;

    h3 {
      color: #fff;
      margin-bottom: 1rem;
    }

    li {
      list-style-type: none;
      font-size: 1.5rem;
      color: #ffffffd7;
      padding: 3px 0;
    }
  }

  .copyright {
    width: 30rem;

    ${largeScreen({
      width: `40%`,
    })}

    h2 {
      color: orange;
      font-size: 5rem;
      font-family: "Lobster", cursive;
    }

    p {
      font-size: 1.5rem;
      color: #fff;
      margin: 1rem 0;

      a {
        color: #2d65f3;
      }
    }

    .media_links {
      margin-top: 1.4rem;

      ul {
        list-style-type: none;
        display: flex;

        li {
          margin-right: 1rem;

          .icon {
            font-size: 2.5rem;
            color: #ffffffd7;
          }
        }
      }
    }
  }
`;
