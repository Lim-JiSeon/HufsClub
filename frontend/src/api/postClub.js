import axios from "axios";
import { API_END_POINT } from "../constants/api";

const postClub = async (values) => {
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

  const data = axios
    .postForm(
      `${API_END_POINT}clubs`,
      {
        activityImage1: values.activityImg1,
        activityImage2: values.activityImg2,
        activityImage3: values.activityImg3,
        activityImage4: values.activityImg4,
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
          .filter((element) => element)
          .join(","),
        name: values.name,
        field: values.field,
        topic: values.topic,
        recruit:
          values.period +
          "," +
          values.way +
          "," +
          values.num +
          "," +
          values.applyUrl,
        room: values.room,
        logo: values.logoUrl,
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
      alert("동아리가 등록되었습니다.");
    })
    .catch((error) => {
      console.log(error);
      alert(
        "에러가 발생했습니다. 글을 다시 등록해주세요.(주의 : 동아리당 하나의 소개글만 작성할 수 있습니다.)"
      );
    });
  return data;
};

export default postClub;