import React from "react";
import styled from "@emotion/styled";
import { Header } from "../components/common/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const MainContainer = styled.div`
  padding: 160px 20px 160px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 14px;
  padding: 5px 0;
`;

const NotPage = () => {
  return (
    <>
      <Header text="Not Page" />
      <MainContainer>
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          size="4x"
          color="#FED313"
        />
        <Text>잘못된 접근입니다</Text>
      </MainContainer>
    </>
  );
};

export default NotPage;
