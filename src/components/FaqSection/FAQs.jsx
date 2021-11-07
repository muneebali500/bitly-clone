import React from "react";
import styled from "styled-components";

import { useAuthContext } from "../../store/Context";

import FAQ from "./FAQ";

export default function FAQs() {
  const { newFaqs } = useAuthContext();

  return (
    <Section>
      <SectionTitle>Frequently asked questions</SectionTitle>

      <QuestionContainer>
        {newFaqs.map((faq) => (
          <FAQ {...faq} key={faq.id} />
        ))}
      </QuestionContainer>
    </Section>
  );
}

const Section = styled.section`
  padding: 6rem 0;
`;
const SectionTitle = styled.h2`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 5rem;
  color: rgba(0, 0, 0, 0.8);
`;
const QuestionContainer = styled.div`
  width: 112rem;
  max-width: 95%;
  margin: 0 auto;
  overflow: hidden;

  div:last-child {
    border-bottom: none;
  }
`;
