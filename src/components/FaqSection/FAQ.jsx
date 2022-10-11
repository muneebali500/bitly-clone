import React from "react";
import { useAuthContext } from "../../store/Context";

import styled from "styled-components";
import { smallScreen } from "../../utils/responsive";

export default function FAQ({ id, question, answer, answerVisible }) {
  const { toggleFaqAnswer } = useAuthContext();

  return (
    <Question>
      <h3
        style={{
          backgroundColor: answerVisible ? `rgba(0,0,0,0.1)` : `#fff`,
        }}
      >
        {question}
        <button
          style={{
            transform: answerVisible ? `rotate(45deg)` : `rotate(0deg)`,
          }}
          id={id}
          onClick={(e) => toggleFaqAnswer(e.target.id)}
        >
          &#x0002B;
        </button>{" "}
      </h3>
      {answer.map((para, index) => (
        <p
          key={index}
          style={{
            display: answerVisible ? `block` : `none`,
          }}
        >
          {para}
        </p>
      ))}
    </Question>
  );
}

const Question = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.7rem;
    color: rgba(0, 0, 0, 0.7);
    padding: 1rem 2.5rem;

    ${smallScreen({
      fontSize: `2rem`,
    })}

    button {
      font-size: 2rem;
      color: rgba(0, 0, 0, 0.5);
      border: none;
      outline: none;
      cursor: pointer;
      background-color: transparent;
      transition: 0.3s ease;

      ${smallScreen({
        fontSize: `4rem`,
      })}
    }
  }

  p {
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.7);
    padding: 1rem 2.5rem;
    transition: 0.3s ease;
  }

  .show {
    height: auto;
    font-size: 1.6rem;
  }
`;
