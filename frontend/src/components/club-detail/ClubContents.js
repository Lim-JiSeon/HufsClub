import styled from "@emotion/styled";
import ClubIntro from "./ClubIntro";
import { ClubMember } from "./ClubMember";
import ClubActivity from "./ClubActivity";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ClubContents = ({ data }) => {
  return (
    <>
      {data && (
        <ContentWrap>
          <ClubIntro data={data} />
          <ClubMember data={data} />
          <ClubActivity data={data} />
        </ContentWrap>
      )}
    </>
  );
};

export default ClubContents;
