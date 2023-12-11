import axios from "axios";

const postClub = async (values) => {
  const API_END_POINT = "http://localhost:5000/api/";
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
          {
            name: values.executive2Name,
            email: values.executive2Email,
            role: values.executive2Role,
          }
        ],
        activity: [
          {
            imageUrl: values.activity1Img,
            text: values.activity1Text,
          },
          {
            imageUrl: values.activity2Img,
            text: values.activity2Text,
          },
          {
            imageUrl: values.activity3Img,
            text: values.activity3Text,
          },
          {
            imageUrl: values.activity4Img,
            text: values.activity4Text,
          },
        ],
        recruit: {
          period: values.period,
          way: values.way,
          applyUrl: values.applyUrl,
          num: values.num,
        },
        room: values.room,
        logoUrl: values.logoUrl,
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
