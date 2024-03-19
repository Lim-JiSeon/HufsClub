import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHandsPraying,
  faFutbol,
  faChild,
  faBroom,
  faHandHoldingHeart,
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
`;

export const FieldGrid = () => {
  return (
    <ButtonGrid>
      <FieldButton to="/area/학술">
        <FontAwesomeIcon icon={faGraduationCap} color="#04B700" size="2x" />
        <ButtonText>학술</ButtonText>
      </FieldButton>

      <FieldButton to="/area/종교">
        <FontAwesomeIcon icon={faHandsPraying} color="#FFAFAF" size="2x" />
        <ButtonText>종교</ButtonText>
      </FieldButton>

      <FieldButton to="/area/스포츠">
        <FontAwesomeIcon icon={faFutbol} color="#FF5E5E" size="2x" />
        <ButtonText>스포츠</ButtonText>
      </FieldButton>

      <FieldButton to="/area/친목">
        <FontAwesomeIcon icon={faChild} color="#FFE927" size="2x" />
        <ButtonText>친목</ButtonText>
      </FieldButton>

      <FieldButton to="/area/문화">
        <FontAwesomeIcon icon={faBroom} color="#173FCE" size="2x" />
        <ButtonText>문화</ButtonText>
      </FieldButton>

      <FieldButton to="/area/봉사">
        <FontAwesomeIcon icon={faHandHoldingHeart} color="#FF5592" size="2x" />
        <ButtonText>봉사</ButtonText>
      </FieldButton>
    </ButtonGrid>
  );
};
