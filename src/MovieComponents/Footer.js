import React from "react";
import { useDispatch } from "react-redux";

import { nextPage } from "../Redux/Action/Action";
import { previousPage } from "../Redux/Action/Action";
import { FooterContaier, PrevButton, NextButton } from "./StyledComponent";

const Footer = ({ page }) => {
  const dispatch = useDispatch();

  return (
    <FooterContaier>
      <PrevButton disabled={page <= 1} onClick={() => dispatch(previousPage())}>
        Previous
      </PrevButton>
      <NextButton onClick={() => dispatch(nextPage())}>Next</NextButton>
    </FooterContaier>
  );
};

export default Footer;
