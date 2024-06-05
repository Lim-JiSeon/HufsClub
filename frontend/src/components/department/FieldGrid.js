import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faComments,
  faEarthEurope,
  faMapLocation,
  faChartLine,
  faFlaskVial,
  faRobot,
  faUsers,
  faIcons,
  faBrain,
  faHeartPulse,
  faStreetView,
  faCloudShowersWater,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const ButtonGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 42px;
`;

const FieldButton = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const ButtonText = styled.div`
  padding: 5px 0;
  font-size: 12px;
  text-align: center;
`;

export const FieldGrid = () => {
  return (
    <ButtonGrid>
      <FieldButton to="/area/인문대학">
        <FontAwesomeIcon icon={faUserGraduate} color="#FF8000" size="2x" />
        <ButtonText>인문대학</ButtonText>
      </FieldButton>

      <FieldButton to="/area/통번역대학">
        <FontAwesomeIcon icon={faComments} color="#01DF74" size="2x" />
        <ButtonText>통번역대학</ButtonText>
      </FieldButton>

      <FieldButton to="/area/동유럽학대학">
        <FontAwesomeIcon icon={faEarthEurope} color="#B404AE" size="2x" />
        <ButtonText>동유럽학대학</ButtonText>
      </FieldButton>

      <FieldButton to="/area/국제지역대학">
        <FontAwesomeIcon icon={faMapLocation} color="#5FB404" size="2x" />
        <ButtonText>국제지역대학</ButtonText>
      </FieldButton>

      <FieldButton to="/area/경상대학">
        <FontAwesomeIcon icon={faChartLine} color="#0080FF" size="2x" />
        <ButtonText>경상대학</ButtonText>
      </FieldButton>

      <FieldButton to="/area/자연과학대학">
        <FontAwesomeIcon icon={faFlaskVial} color="#8000FF" size="2x" />
        <ButtonText>자연과학대학</ButtonText>
      </FieldButton>

      <FieldButton to="/area/공과대학">
        <FontAwesomeIcon icon={faRobot} color="#DF013A" size="2x" />
        <ButtonText>공과대학</ButtonText>
      </FieldButton>

      <FieldButton to="/area/융합인재대학">
        <FontAwesomeIcon icon={faUsers} color="#FACC2E" size="2x" />
        <ButtonText>융합인재대학</ButtonText>
      </FieldButton>

      <FieldButton to="/area/Culture & Technology 융합대학">
        <FontAwesomeIcon icon={faIcons} color="#0101DF" size="2x" />
        <ButtonText>Culture & Technology 융합대학</ButtonText>
      </FieldButton>

      <FieldButton to="/area/AI융합대학">
        <FontAwesomeIcon icon={faBrain} color="#FF0000" size="2x" />
        <ButtonText>AI융합대학</ButtonText>
      </FieldButton>

      <FieldButton to="/area/바이오메디컬공학부">
        <FontAwesomeIcon icon={faHeartPulse} color="#7401DF" size="2x" />
        <ButtonText>바이오메디컬공학부</ButtonText>
      </FieldButton>

      <FieldButton to="/area/글로벌자유전공학부">
        <FontAwesomeIcon icon={faStreetView} color="#01DF01" size="2x" />
        <ButtonText>글로벌자유전공학부</ButtonText>
      </FieldButton>

      <FieldButton to="/area/기후변화융합학부">
        <FontAwesomeIcon icon={faCloudShowersWater} color="#D7DF01" size="2x" />
        <ButtonText>기후변화융합학부</ButtonText>
      </FieldButton>
    </ButtonGrid>
  );
};
