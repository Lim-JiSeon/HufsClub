import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faCalendarAlt,
  faPrint,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Main = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: white;
`;

const Container = styled.div`
  padding: 16px;
`;

const Info = styled.div`
  display: flex;
  padding: 16px;
`;

const Text = styled.div`
  color: black;
  font-size: 12px;
  padding: 0 10px;
`;

const LinkText = styled.a`
  color: black;
  font-size: 12px;
  margin: 0 10px;
  text-decoration: none;
  border-bottom: 1px solid black;
`;

const ClubInfo = ({ data }) => {
  const { room, recruit } = data.data;

  const isLink = recruit.applyUrl.includes("http");

  return (
    <>
      <Main>
        <Container>
          <Info>
            <FontAwesomeIcon icon={faHome} color="#fed313" />
            <Text>{room}</Text>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faUsers} color="#fed313" />
            <Text>{recruit.num}</Text>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendarAlt} color="#fed313" />
            <Text>{recruit.period}</Text>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faPrint} color="#fed313" />
            <Text>{recruit.way}</Text>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faLink} color="#fed313" />
            {!isLink && <Text>{recruit.applyUrl}</Text>}
            {isLink && <LinkText href={recruit.applyUrl}>접속하기</LinkText>}
          </Info>
        </Container>
      </Main>
    </>
  );
};

export default ClubInfo;
