import styled from "@emotion/styled";
import ClubItem from "./func/ClubItem";

const GridWrap = styled.div`
  width: 90vw;
  height: 50vh;
  background-color: #ffffff;
  border-radius: 20px;
  border: solid 2px #27374d;
  margin-bottom: 20px;
`;

const ClubGrid = (data) => {
  const clubs = data.data.data;
  console.log(clubs);
  return (
    <GridWrap>
      {clubs && clubs.map((club) => <ClubItem data={club} />)}
    </GridWrap>
  );
};

export default ClubGrid;
