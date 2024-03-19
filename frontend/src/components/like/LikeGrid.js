import styled from "@emotion/styled";
import ClubItem from "../common/ClubItem";

const GridWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
