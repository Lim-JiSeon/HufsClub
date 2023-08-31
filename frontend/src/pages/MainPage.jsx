import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";

function MainPage() {
  const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Banner = styled.div`
    display: block;
    font-size: 160px;
    text-align: center;
    color: #526d82;
  `;

  const Line = styled.hr`
    width: 800px;
    border : 0px;
	  border-top: 5px solid #526d82;
  `;

  return (
    <MainContainer>
      <Header></Header>
      <Banner>HUFS Club</Banner>
      <Line />
    </MainContainer>
  );
}

export default MainPage;
