import Image from "./func/Image";
import { useState } from "react";
import Dropdown from "./Dropdown";
import styled from "@emotion/styled";

function Avatar() {
  const [dropdownView, setDropdownView] = useState(false);

  const ProfileButton = styled.div`
    position: relative;
  `

  return (
    <ProfileButton>
      <Image
        src="https://e7.pngegg.com/pngimages/1000/665/png-clipart-computer-icons-profile-s-free-angle-sphere.png"
        alt="프로필"
        width={50}
        height={50}
        borderRadius={50}
        style={{position: "absolute"}}
        onClick={() => {
          setDropdownView(!dropdownView);
        }}
      />
      {dropdownView && <Dropdown />}
    </ProfileButton>
  );
}

export default Avatar;
