import styled from "@emotion/styled";
import searchName from "../../api/search/search";
import searchTopic from "../../api/search/topic";
import { useState } from "react";
import Select from "../func/Select";
import searchContent from "../../api/search/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  outline: none;
  border-radius: 5px;
  border: none;
  background-color: #fed313;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  text-align: center;
  width: 80%;
  padding: 10px 0;
`;

const IconWrap = styled.button`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  padding: 11px;
  border-radius: 0 5px 5px 0;
`;

const OPTIONS = [
  { value: "동아리 이름", name: "동아리 이름" },
  { value: "활동 내용", name: "활동 내용" },
  { value: "동아리 주제", name: "동아리 주제" },
];

const SearchBar = (props) => {
  const area = useParams().field;

  const [keyword, setKeyword] = useState("");
  const [field, setField] = useState("동아리 이름");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      searchClub();
    }
  };

  const searchClub = async () => {
    if (field === "동아리 이름") props.setClub(await searchName(area, keyword));
    if (field === "활동 내용")
      props.setClub(await searchContent(area, keyword));
    if (field === "동아리 주제")
      props.setClub(await searchTopic(area, keyword));
  };

  return (
    <Wrapper>
      <Select setField={setField} options={OPTIONS} defaultValue="clubName" />
      <Input
        type="text"
        name="keyword"
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleEnter}
      />
      <IconWrap onClick={searchClub}>
        <FontAwesomeIcon icon={faSearch} color="#FED313" />
      </IconWrap>
    </Wrapper>
  );
};

export default SearchBar;
