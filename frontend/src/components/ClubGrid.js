import styled from "@emotion/styled";
import ClubItem from "../components/area/ClubItem";

const GridWrap = styled.div`
  width: 100%;
  /* display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClubGrid = (data) => {
  const clubs = data.data?.data;

  return (
    <GridWrap>
      {clubs
        ? clubs.map((club) => <ClubItem key={club._id} data={club} />)
        : null}
    </GridWrap>
  );
};

export default ClubGrid;
