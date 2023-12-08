import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import ClubIntro from "./ClubIntro";
import { useEffect, useState } from "react";
import getClub from "../../api/getClub";

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

  return <>{data && <ClubIntro data={data} />}</>;
};

export default ClubContents;
