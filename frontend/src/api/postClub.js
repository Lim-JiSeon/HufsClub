import axios from "axios";
import { API_END_POINT } from "../constants/api";
import Image1 from "../images/학술.png";
import Image2 from "../images/종교.png";
import Image3 from "../images/스포츠.png";
import Image4 from "../images/친목.png";
import Image5 from "../images/문화.png";
import Image6 from "../images/봉사.png";

const postClub = async (values) => {
  const token = sessionStorage.getItem("hufs-club_isLogin");

  const data = axios
    .post(
      `${API_END_POINT}clubs`,
      {
        name: values.name,
        field: values.field,
        topic: values.topic,
        executive: [
          {
            name: values.executive1Name,
            email: values.executive1Email,
            role: values.executive1Role,
          },
          values.executive2Name && {
            name: values.executive2Name,
            email: values.executive2Email ?? "",
            role: values.executive2Role ?? "운영진",
          },
          values.executive3Name && {
            name: values.executive3Name ?? "",
            email: values.executive3Email ?? "",
            role: values.executive3Role ?? "운영진",
          },
          values.executive4Name && {
            name: values.executive4Name ?? "",
            email: values.executive4Email ?? "",
            role: values.executive4Role ?? "운영진",
          },
        ],
        activity: [
          values.activityText1 && {
            imageUrl: values.activityImg1 ?? getImgURL(values.field),
            text: values.activityText1,
          },
          values.activityText2 && {
            imageUrl: values.activityImg2 ?? getImgURL(values.field),
            text: values.activityText2,
          },
          values.activityText3 && {
            imageUrl: values.activityImg3 ?? getImgURL(values.field),
            text: values.activityText3,
          },
          values.activityText4 && {
            imageUrl: values.activityImg4 ?? getImgURL(values.field),
            text: values.activityText4,
          },
        ],
        recruit: {
          period: values.period,
          way: values.way,
          applyUrl: values.applyUrl,
          num: values.num,
        },
        room: values.room,
        logoUrl: values.logoUrl ?? getImgURL(values.field),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res);
      alert("동아리가 등록되었습니다.");
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

export default postClub;

export const getImgURL = (area) => {
  if (area === "학술") return Image1;
  if (area === "종교") return Image2;
  if (area === "스포츠") return Image3;
  if (area === "친목") return Image4;
  if (area === "문화") return Image5;
  if (area === "봉사") return Image6;
};
