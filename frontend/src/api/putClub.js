import axios from "axios";
import { API_END_POINT } from "../constants/api";

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

  const newActivity = [
    values.activityText1 && {
      imageUrl: values.activityImg1,
      text: values.activityText1,
    },
    values.activityText2 && {
      imageUrl: values.activityImg2,
      text: values.activityText2,
    },
    values.activityText3 && {
      imageUrl: values.activityImg3,
      text: values.activityText3,
    },
    values.activityText4 && {
      imageUrl: values.activityImg4,
      text: values.activityText4,
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

  console.log(values.topic);

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
        activityText: newActivity
          .map((element) => element.text)
          .filter((element) => (element ? element : " "))
          .join(","),
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
