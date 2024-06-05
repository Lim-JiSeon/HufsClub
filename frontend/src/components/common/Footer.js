import styled from "@emotion/styled";
import React from "react";

const FooterDiv = styled.div`
  width: 100%;
  color: #8f8f8f;
  font-size: 12px;
  text-align: center;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return <FooterDiv>© 2024. HUFSClub all rights reserved.</FooterDiv>;
};
