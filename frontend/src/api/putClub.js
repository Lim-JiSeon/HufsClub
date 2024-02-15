import axios from "axios";
import { API_END_POINT } from "../constants/api";

const putClub = async (values, id) => {
  const token = sessionStorage.getItem("hufs-club_isLogin");

  const data = axios
    .post(
      `${API_END_POINT}clubs/${id}`,
      {
        name: values.name ?? "테스트",
        field: values.field,
        topic: values.topic ?? [],
        executive: [
          {
            name: values.executive1Name ?? "",
            email: values.executive1Email ?? "",
            role: values.executive1Role ?? "",
          },
          {
            name: values.executive2Name ?? "",
            email: values.executive2Email ?? "",
            role: values.executive2Role ?? "",
          },
          {
            name: values.executive3Name ?? "",
            email: values.executive3Email ?? "",
            role: values.executive3Role ?? "",
          },
          {
            name: values.executive4Name ?? "",
            email: values.executive4Email ?? "",
            role: values.executive4Role ?? "",
          },
        ],
        activity: [
          {
            imageUrl: values.activityImg1 ?? "",
            text: values.activityText1 ?? "",
          },
          {
            imageUrl: values.activityImg2 ?? "",
            text: values.activityText2 ?? "",
          },
          {
            imageUrl: values.activityImg3 ?? "",
            text: values.activityText3 ?? "",
          },
          {
            imageUrl: values.activityImg4 ?? "",
            text: values.activityText4 ?? "",
          },
        ],
        recruit: {
          period: values.period,
          way: values.way ?? "",
          applyUrl: values.applyUrl ?? "",
          num: values.num,
        },
        room: values.room,
        logoUrl: values.logoUrl ?? URL.createObjectURL(values.logoUrl[0]),
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
    });
  return data;
};

export default putClub;
