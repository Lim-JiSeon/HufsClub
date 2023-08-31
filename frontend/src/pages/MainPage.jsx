import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Image from "../components/func/Image";

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
        <FieldButton
          url="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_640.jpg"
          type="button"
          onClick={console.log("check")}
        />
        <FieldButton
          url="https://cdn.pixabay.com/photo/2014/10/22/18/16/church-498525_640.jpg"
          type="button"
          onClick={console.log("check")}
        />
        <FieldButton
          url="https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_640.jpg"
          type="button"
          onClick={console.log("check")}
        />
        <FieldButton
          url="https://cdn.pixabay.com/photo/2019/10/01/12/24/nature-4518094_640.jpg"
          type="button"
          onClick={console.log("check")}
        />
        <FieldButton
          url="https://cdn.pixabay.com/photo/2018/05/12/19/20/mosaic-3394375_640.jpg"
          type="button"
          onClick={console.log("check")}
        />
        <FieldButton
          url="https://cdn.pixabay.com/photo/2016/11/14/04/10/grandmother-1822564_640.jpg"
          type="button"
          onClick={console.log("check")}
        />
      </ButtonWrapper>
    </MainContainer>
  );
}

export default MainPage;
