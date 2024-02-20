import axios from "axios";
import { API_END_POINT } from "../constants/api";
import ImageUploader from "../images/image-upload.png";
import Image1 from "../images/학술.png";
import Image2 from "../images/종교.png";
import Image3 from "../images/스포츠.png";
import Image4 from "../images/친목.png";
import Image5 from "../images/문화.png";
import Image6 from "../images/봉사.png";

const putClub = async (values, id) => {
  const token = sessionStorage.getItem("hufs-club_isLogin");

  const newExecutive = [
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
  ];

  const newActivity = [
    values.activityText1 && {
      imageUrl:
        values.activityImg1 === ImageUploader
          ? getImgURL(values.field)
          : values.activityImg1,
      text: values.activityText1,
    },
    values.activityText2 && {
      imageUrl:
        values.activityImg2 === ImageUploader
          ? getImgURL(values.field)
          : values.activityImg2,
      text: values.activityText2,
    },
    values.activityText3 && {
      imageUrl:
        values.activityImg3 === ImageUploader
          ? getImgURL(values.field)
          : values.activityImg3,
      text: values.activityText3,
    },
    values.activityText4 && {
      imageUrl:
        values.activityImg4 === ImageUploader
          ? getImgURL(values.field)
          : values.activityImg4,
      text: values.activityText4,
    },
  ];

  const data = axios
    .put(
      `${API_END_POINT}clubs/${id}`,
      {
        name: values.name ?? "테스트",
        field: values.field,
        topic: values.topic ?? [],
        executive: newExecutive.filter((element) => element !== ""),
        activity: newActivity.filter((element) => element !== ""),
        recruit: {
          period: values.period ?? "미정",
          way: values.way ?? "동아리 운영진에게 문의해주세요.",
          applyUrl: values.applyUrl ?? "",
          num: values.num ?? "미정",
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
      alert("동아리가 수정되었습니다.");
    })
    .catch((error) => {
      console.log(error);
      alert("오류가 발생했습니다.");
    });
  return data;
};

export default putClub;

export const getImgURL = (area) => {
  if (area === "학술") return Image1;
  if (area === "종교") return Image2;
  if (area === "스포츠") return Image3;
  if (area === "친목") return Image4;
  if (area === "문화") return Image5;
  if (area === "봉사") return Image6;
};
