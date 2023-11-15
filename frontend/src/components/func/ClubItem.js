import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CardItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 150px;
  height: 150px;
`;

const ClubTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 5px 0;
`;

const ClubTopic = styled.div`
  width: 150px;
  display: flex;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const TopicTxt = styled.div`
  padding: 0 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #27374d;
  &:hover {
    color: #526d82;
  }
`;

const ClubItem = (data) => {
  const field = useLocation().pathname.split("/")[2];

  return (
    <StyledLink to={`/area/${field}/${data.data._id}`}>
      <CardItemWrap key={data.data._id}>
        <LogoImg src={data.data.logoUrl} alt="이미지" />
        <ClubTitle>{data.data.name}</ClubTitle>
        <ClubTopic>
          {data.data.topic.map((topic) => (
            <TopicTxt key={topic}>{topic}</TopicTxt>
          ))}
        </ClubTopic>
      </CardItemWrap>
    </StyledLink>
  );
};

export default ClubItem;
