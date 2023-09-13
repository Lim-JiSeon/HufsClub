import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Image from "../constants/Image.js";
import { useState } from "react";

function MainPage() {
  const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Banner = styled.div`
    display: block;
    font-size: 160px;
    text-align: center;
    color: #526d82;
  `;

  const Line = styled.hr`
    width: 800px;
    border: 0px;
    border-top: 5px solid #526d82;
  `;

  const FieldButton = styled.input`
    background: url(${(props) => props.url}) no-repeat;
    width: 150px;
    height: 250px;
    border-radius: 5px;
    border: none;
    background-size: cover;
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <MainContainer>
      <Header></Header>
      <TitleContainer>
        <Banner>HUFS Club</Banner>
        <Line />
      </TitleContainer>

      <ButtonWrapper>
        <Link
          to={{
            pathname: `/area/학술`,
          }}>
          <FieldButton url={Image.ACADEMIC} type="button" />
        </Link>

        <Link
          to={{
            pathname: `/area/종교`,
          }}>
          <FieldButton url={Image.RELIGION} type="button" />
        </Link>
        <Link
          to={{
            pathname: `/area/스포츠`,
          }}>
          <FieldButton url={Image.SPORTS} type="button" />
        </Link>
        <Link
          to={{
            pathname: `/area/친목`,
          }}>
          <FieldButton url={Image.AMITY} type="button" />
        </Link>
        <Link
          to={{
            pathname: `/area/문화`,
          }}>
          <FieldButton url={Image.CULTURE} type="button" />
        </Link>
        <Link
          to={{
            pathname: `/area/봉사`,
          }}>
          <FieldButton url={Image.VOLUNTEER} type="button" />
        </Link>
      </ButtonWrapper>
    </MainContainer>
  );
}

export default MainPage;
