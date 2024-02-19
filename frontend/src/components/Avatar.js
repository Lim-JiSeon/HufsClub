import Image from "./func/Image";
import profileImage from "../images/profile.png";
import styled from "@emotion/styled";

function Avatar() {
  const ProfileButton = styled.div`
    position: relative;
  `;

  return (
    <ProfileButton>
      <Image
        src={profileImage}
        alt="프로필"
        width={50}
        height={50}
        borderRadius={50}
        style={{ position: "absolute" }}
      />
    </ProfileButton>
  );
}

export default Avatar;
