import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import ClubIntro from "./ClubIntro";
import { useEffect, useState } from "react";
import getClub from "../../api/getClub";
import { ClubMember } from "./ClubMember";
import ClubActivity from "./ClubActivity";
import ClubJoin from "./ClubJoin";

const ContentWrap = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const DetailWrap = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 3px solid #526d82;
  background-color: #ffffff;
  padding: 10px 40px 40px 40px;
`;

const ClubContents = () => {
  const clubId = useParams().id;
  const [data, setData] = useState();

  useEffect(() => {
    getClub(clubId)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [clubId]);

  return (
    <>
      {data && (
        <ContentWrap>
          <ClubIntro data={data} />
          <DetailWrap>
            <ClubMember data={data} />
            <ClubActivity data={data} />
            <ClubJoin data={data} />
          </DetailWrap>
        </ContentWrap>
      )}
    </>
  );
};

export default ClubContents;
