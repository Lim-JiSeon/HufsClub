import axios from "axios";
import { API_END_POINT } from "../constants/api";

const putClub = async (values, user, id) => {
  const token = sessionStorage.getItem("hufs-club_isLogin");

  const newExecutive = [
    {
      name: values.executive1Name === "" ? user.name : values.executive1Name,
      email:
        values.executive1Email === "" ? user.email : values.executive1Email,
      role: values.executive1Role === "" ? user.role : values.executive1Role,
    },
    values.executive2Name && {
      name: values.executive2Name,
      email: values.executive2Email === "" ? "X" : values.executive2Email,
      role: values.executive2Role === "" ? "운영진" : values.executive2Role,
    },
    values.executive3Name && {
      name: values.executive3Name ?? "",
      email: values.executive3Email === "" ? "X" : values.executive3Email,
      role: values.executive3Role === "" ? "운영진" : values.executive3Role,
    },
    values.executive4Name && {
      name: values.executive4Name ?? "",
      email: values.executive4Email === "" ? "X" : values.executive4Email,
      role: values.executive4Role === "" ? "운영진" : values.executive4Role,
    },
  ];

  const newActImgUrl = `${
    typeof values.activityImg1 === "string" && values.activityImg1
      ? values.activityImg1
      : null
  },${
    typeof values.activityImg2 === "string" && values.activityImg2
      ? values.activityImg2
      : null
  },${
    typeof values.activityImg3 === "string" && values.activityImg3
      ? values.activityImg3
      : null
  },${
    typeof values.activityImg4 === "string" && values.activityImg4
      ? values.activityImg4
      : null
  }`;

  const data = axios
    .putForm(
      `${API_END_POINT}clubs/${id}`,
      {
        activityImage1:
          typeof values.activityImg1 === "object" ? values.activityImg1 : null,
        activityImage2:
          typeof values.activityImg2 === "object" ? values.activityImg2 : null,
        activityImage3:
          typeof values.activityImg3 === "object" ? values.activityImg3 : null,
        activityImage4:
          typeof values.activityImg4 === "object" ? values.activityImg4 : null,
        activityImageUrl: newActImgUrl,
        executiveName: newExecutive
          .map((element) => element.name)
          .filter((element) => element)
          .join(","),
        executiveEmail: newExecutive
          .map((element) => element.email)
          .filter((element) => element)
          .join(","),
        executiveRole: newExecutive
          .map((element) => element.role)
          .filter((element) => element)
          .join(","),
        activityText1: values.activityText1 ?? "",
        activityText2: " ",
        activityText3: " ",
        activityText4: " ",
        name: values.name,
        field: values.field,
        topic:
          typeof values.topic === "string"
            ? values.topic
            : values.topic.join("").replaceAll("#", ", ").slice(1),
        recruit:
          values.period +
          "," +
          values.way +
          "," +
          values.num +
          "," +
          values.applyUrl,
        room: values.room,
        logo: typeof values.logoUrl === "object" ? values.logoUrl : null,
        logoUrl: typeof values.logoUrl === "string" ? values.logoUrl : "null",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
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
