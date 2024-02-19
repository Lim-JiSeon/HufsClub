import styled from "@emotion/styled";
import ClubItem from "./func/ClubItem";

const GridWrap = styled.div`
  width: 70vw;
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

const LikeGrid = (data) => {
  const clubs = data.data?.likes;

  return (
    <GridWrap>
      {clubs
        ? clubs.map((club) => {
            return club.map((element) => (
              <ClubItem key={element._id} data={element} />
            ));
          })
        : null}
    </GridWrap>
  );
};

export default LikeGrid;
