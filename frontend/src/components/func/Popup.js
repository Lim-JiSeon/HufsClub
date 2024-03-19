import styled from "@emotion/styled";
import React from "react";

const PopupBackground = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupWrap = styled.div`
  width: 300px;
  height: 150px;
  background-color: #ffffff;
  border: 2px solid #fed313;
  border-radius: 10px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TitleText = styled.div`
  width: 100%;
  font-size: 16px;
  padding: 30px 0;
  color: black;
  text-align: center;
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border-top: 2px solid #fed313;
`;

const ButtonContent = styled.button`
  width: 100%;
  height: auto;
  border: none;
  background-color: transparent;
  color: black;
  font-weight: bold;
  font-size: 16px;
  padding: 20px 0;

  cursor: pointer;
  &:hover {
    background-color: #ffefa9;
  }
`;

const Popup = (PopupProps) => {
  const { title, leftBtn, leftBtnText, rightBtn, rightBtnText } =
    PopupProps.PopupProps;

  return (
    <PopupBackground>
      <PopupWrap>
        <TitleText>{title}</TitleText>
        <ButtonWrap>
          <ButtonContent
            style={{
              borderRight: "2px solid #fed313",
              borderEndStartRadius: "10px",
            }}
            onClick={leftBtn}>
            {leftBtnText}
          </ButtonContent>
          <ButtonContent
            style={{
              borderEndEndRadius: "10px",
            }}
            onClick={rightBtn}>
            {rightBtnText}
          </ButtonContent>
        </ButtonWrap>
      </PopupWrap>
    </PopupBackground>
  );
};

export default Popup;
