import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import putLike from "../../api/putLike";
import getUserInfo from "../../api/getUserInfo";
import deleteLike from "../../api/deleteLike";
import ClubLogo from "./ClubLogo";
import ClubInfo from "./ClubInfo";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

const AllWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LikeButton = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
  margin: 15px 0 30px 0;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const ClubIntro = (data) => {
  const [like, setLike] = useState();

  const { name } = data.data;

  const isLike = like?.filter((element) => element[0]?.name === name).length;

  const navigation = useNavigate();

  const handleButton = async () => {
    const isLogin = sessionStorage.getItem("hufs-club_isLogin") ?? false;
    if (isLogin) {
      const check = like.filter((element) => element[0]?.name === name);

      check.length ? await deleteLike(name) : await putLike(name);

      window.location.reload();
    } else {
      alert("로그인을 해주세요.");
      navigation("/login");
    }
  };

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setLike(res.likes);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <AllWrap>
      <Container>
        <ClubLogo data={data} />
      </Container>
      <Container>
        <ClubInfo data={data} />
      </Container>

      <LikeButton onClick={handleButton}>
        {isLike ? (
          <FontAwesomeIcon
            icon={faHeartCircleCheck}
            color="#fed313"
            size="2x"
          />
        ) : (
          <FontAwesomeIcon icon={faHeart} color="#fed313" size="2x" />
        )}
      </LikeButton>
    </AllWrap>
  );
};

export default ClubIntro;
