import styled from "@emotion/styled";
import searchIcon from "../images/searchIcon.png";
import search from "../api/search";
import { useState } from "react";
import Select from "./func/Select";

const Wrapper = styled.div`
  outline: none;
  border-radius: 50px;
  border: solid 2px #27374d;
  background-color: #27374d;
  width: 500px;
  height: 50px;
  margin: 30px 0 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 320px;
  height: 48px;
  font-size: 18px;
  text-align: center;
`;

const IconWrap = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 0 50px 50px 0;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const OPTIONS = [
  { value: "clubName", name: "동아리 이름" },
  { value: "content", name: "활동 내용" },
  { value: "topic", name: "동아리 주제" },
];

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [field, setField] = useState("동아리 이름")

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      const searchResult = await search(keyword);
      console.log(searchResult.data);
    }
  };

  return (
    <Wrapper>
      <Select setField={setField} options={OPTIONS} defaultValue="clubName"/>
      <Input
        type="text"
        name="keyword"
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleEnter}
      />
      <IconWrap>
        <Icon src={searchIcon} alt="검색 아이콘" />
      </IconWrap>
    </Wrapper>
  );
};
export default SearchBar;
