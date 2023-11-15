import styled from "@emotion/styled";
import ClubItem from "./func/ClubItem";

const GridWrap = styled.div`
  width: 90vw;
  height: 50vh;
  background-color: #ffffff;
  border-radius: 20px;
  border: solid 2px #27374d;
  margin-bottom: 20px;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  gap: 10px;
`;

const ClubGrid = (data) => {
  const clubs = data.data.data;
 
  return (
    <GridWrap>
      {clubs
        ? clubs.map((club) => <ClubItem key={club._id} data={club} />)
        : null}
    </GridWrap>
  );
};

export default ClubGrid;
