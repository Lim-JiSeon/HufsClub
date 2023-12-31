import styled from "@emotion/styled";
import { Link, useParams } from "react-router-dom";
import ClubIntro from "./ClubIntro";
import { useEffect, useState } from "react";
import getClub from "../../api/getClub";
import { ClubMember } from "./ClubMember";
import ClubActivity from "./ClubActivity";
import ClubJoin from "./ClubJoin";
import getUserInfo from "../../api/getUserInfo";
import Popup from "../func/Popup";
import { useNavigate } from "react-router-dom";
import deleteClub from "../../api/deleteClub";

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

const ButtonWrap = styled.div`
  display: flex;
  width: 90vw;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #eaeaea;
  color: #a4a4a4;
  font-size: 16px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #a4a4a4;
    color: #000000;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 5px;
  border: none;
  background-color: #eaeaea;
  color: #a4a4a4;
  font-size: 16px;
  padding: 5px 10px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: #a4a4a4;
    color: #000000;
  }
`;

const ClubContents = () => {
  const clubId = useParams().id;
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [isPresident, setIsPresident] = useState("");
  const [deletePopup, setDeletePopup] = useState(false);

  const PopupProps = {
    title: "글을 삭제하시겠습니까?",
    leftBtnText: "아니요",
    rightBtnText: "예",
    leftBtn: () => setDeletePopup(false),
    rightBtn: () => {
      deleteClub(data._id);
      navigate("/");
    },
  };

  useEffect(() => {
    getClub(clubId)
      .then((res) => {
        setData(res);
        getUserInfo()
          .then((res) => {
            setIsPresident(res.isPresident);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [clubId]);

  return (
    <>
      {data && isPresident === data.name ? (
        <ButtonWrap>
          <StyledLink to={`edit-club/${data._id}`}>수정</StyledLink>
          <Button onClick={() => setDeletePopup(true)}>삭제</Button>
        </ButtonWrap>
      ) : null}
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
      {deletePopup && <Popup PopupProps={PopupProps} />}
    </>
  );
};

export default ClubContents;
