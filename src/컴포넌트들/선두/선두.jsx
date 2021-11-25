import React from "react";
import 주제받기 from "잡동사니/주제받기";
import styled from "styled-components";
import { Avatar as 사진 } from "@channel.io/bezier-react";

const 보자기 = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.색깔들.white};
  box-shadow: 0 17px 20px -18px ${(props) =>
      props.주제 ? props.theme.색깔들.gray800 : props.theme.색깔들.gray200};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const 묶음 = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  margin-left: 12px;
`;

const 글자 = styled.div`
  margin-left: 1vh;
  font-weight: 600;
  line-height: 1.1765;
  font-size: 1.2rem;
  color: ${({theme}) => theme.색깔들.black};
`;

const 담소_정보 = {
  사용자사진: "https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png",
  사용자이름: "신중빈",
};

const 선두 = () => {
  const 현재주제 = 주제받기();
  return (
    <보자기 주제={현재주제}>
      <묶음>
        <사진
          size={42}
          avatarUrl={담소_정보.사용자사진}
          name={담소_정보.사용자이름}
          showBorder={false}
          disabled={false}
        />
        <글자>{담소_정보.사용자이름}</글자>
      </묶음>
    </보자기>
  );
};

export default 선두;
