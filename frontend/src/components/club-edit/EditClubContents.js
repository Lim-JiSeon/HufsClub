import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import ClubIntro from "./ClubIntro";
import { useEffect, useState } from "react";
import getClub from "../../api/getClub";
import { ClubMember } from "./ClubMember";
import ClubActivity from "./ClubActivity";
import ClubJoin from "./ClubJoin";
import { useNavigate } from "react-router-dom";

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 3px solid #526d82;
  background-color: #ffffff;
  padding: 10px 40px 40px 40px;
`;

const EditClubContents = () => {
  const clubId = useParams().id;
  const navigate = useNavigate();

  const [data, setData] = useState();

  useEffect(() => {
    getClub(clubId)
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, [clubId]);

  return (
    <>
      {data && (
        <ContentWrap>
          <DetailWrap>
            <ClubIntro data={data} />
          </DetailWrap>

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

export default EditClubContents;
