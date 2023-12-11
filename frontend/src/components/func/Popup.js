import styled from "@emotion/styled";
import React from "react";

const PopupBackground = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
`;

const PopupWrap = styled.div`
  width: 400px;
  height: 300px;
  background-color: #ffffff;
  border: 2px solid #27374d;
  border-radius: 10px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TitleText = styled.div`
  width: 100%;
  font-size: 22px;
  padding: 80px 0 80px 0;
  color: #27374d;
  text-align: center;
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  border-top: 2px solid #27374d;
`;

const ButtonContent = styled.button`
  width: 100%;
  height: auto;
  border: none;
  background-color: transparent;
  color: #27374d;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #dde6ed;
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
              borderRight: "2px solid #27374d",
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
