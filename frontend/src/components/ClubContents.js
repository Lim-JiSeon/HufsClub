import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import getClub from "../api/getClub";

const ClubContents = () => {
  const clubId = useParams().id;

  const getData = async () => {
    const club = await getClub(clubId);
    console.log(club);
  };

  getData();

  return <></>;
};

export default ClubContents;
