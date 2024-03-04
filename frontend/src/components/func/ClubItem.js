import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Image1 from "../../images/학술.png";
import Image2 from "../../images/종교.png";
import Image3 from "../../images/스포츠.png";
import Image4 from "../../images/친목.png";
import Image5 from "../../images/문화.png";
import Image6 from "../../images/봉사.png";

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

  const logo =
    data.data.logoUrl === "" ? getImgURL(data.data.field) : data.data.logoUrl;

  return (
    <StyledLink to={`/area/${field}/${data.data._id}`}>
      <CardItemWrap key={data.data._id}>
        <LogoImg src={logo} alt="이미지" />
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

export const getImgURL = (area) => {
  if (area === "학술") return Image1;
  if (area === "종교") return Image2;
  if (area === "스포츠") return Image3;
  if (area === "친목") return Image4;
  if (area === "문화") return Image5;
  if (area === "봉사") return Image6;
};
