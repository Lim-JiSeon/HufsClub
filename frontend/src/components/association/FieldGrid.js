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
import { Link, useLocation } from "react-router-dom";

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
  const belong = decodeURI(useLocation().pathname).split("/")[1];
  const type = decodeURI(useLocation().pathname).split("/")[2];

  return (
    <ButtonGrid>
      <FieldButton to={`/${belong}/${type}/학술응용분과`}>
        <FontAwesomeIcon icon={faGraduationCap} color="#04B700" size="2x" />
        <ButtonText>학술응용분과</ButtonText>
      </FieldButton>

      <FieldButton to={`/${belong}/${type}/종교봉사분과`}>
        <FontAwesomeIcon icon={faHandsPraying} color="#FFAFAF" size="2x" />
        <ButtonText>종교봉사분과</ButtonText>
      </FieldButton>

      <FieldButton to={`/${belong}/${type}/개인스포츠레저분과`}>
        <FontAwesomeIcon icon={faFutbol} color="#FF5E5E" size="2x" />
        <ButtonText>개인스포츠레저분과</ButtonText>
      </FieldButton>

      <FieldButton to={`/${belong}/${type}/팀스포츠레저분과`}>
        <FontAwesomeIcon icon={faChild} color="#FFE927" size="2x" />
        <ButtonText>팀스포츠레저분과</ButtonText>
      </FieldButton>

      <FieldButton to={`/${belong}/${type}/공연예술분과`}>
        <FontAwesomeIcon icon={faBroom} color="#173FCE" size="2x" />
        <ButtonText>공연예술분과</ButtonText>
      </FieldButton>

      <FieldButton to={`/${belong}/${type}/창작예술분과`}>
        <FontAwesomeIcon icon={faHandHoldingHeart} color="#FF5592" size="2x" />
        <ButtonText>창작예술분과</ButtonText>
      </FieldButton>
    </ButtonGrid>
  );
};
