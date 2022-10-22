import React, { useState, useContext, useEffect, createContext } from "react";

import { faqs } from "../utils/data";

/////////////// creating context
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newFaqs, setNewFaqs] = useState(faqs);

  function toggleFaqAnswer(id) {
    setNewFaqs(
      newFaqs.map((faq) =>
        faq.id === Number(id)
          ? { ...faq, answerVisible: !faq.answerVisible }
          : { ...faq, answerVisible: false }
      )
    );
  }

  useEffect(() => {
    setIsLoading(true);
    window.innerWidth > 1024 ? setIsNavBarOpen(true) : setIsNavBarOpen(false);
  }, []);

  useEffect(() => {
    function windowResize() {
      window.innerWidth > 1024 ? setIsNavBarOpen(true) : setIsNavBarOpen(false);
    }

    window.addEventListener(`resize`, windowResize);

    return () => {
      window.removeEventListener(`resize`, windowResize);
    };
  });

  return (
    <AuthContext.Provider
      value={{
        isNavBarOpen,
        setIsNavBarOpen,
        newFaqs,
        toggleFaqAnswer,
      }}
    >
      {isLoading && children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
