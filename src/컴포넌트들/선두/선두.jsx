import React from "react";
import 꾸미기 from "styled-components";
import { Avatar as 사진 } from "@channel.io/bezier-react";
import 똑딱이 from "./똑딱이";
import 사용주제갈고리 from "../../갈고리들/use주제";

const 보자기 = 꾸미기.div`
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.색깔들.white};
  box-shadow: 0 17px 20px -18px ${(props) =>
    props.주제 ? "transparent" : props.theme.색깔들.gray200};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const 묶음 = 꾸미기.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  font-size: 25px;
  font-weight: 500;
  margin-left: 12px;
`;

const 글자 = 꾸미기.div`
  margin-left: 1vh;
  font-weight: 500;
  line-height: 1.1765;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.색깔들.gray900};
`;

const 잡동사니보자기 = 꾸미기.div`
  padding: 0 10px;
`;

const 선두 = ({ name, profileImage }) => {
  const [, 현재주제, 주제바꾸기] = 사용주제갈고리();
  return (
    <보자기 주제={현재주제}>
      <묶음>
        <사진
          size={42}
          avatarUrl={profileImage}
          name={name}
          showBorder={false}
          disabled={false}
        />
        <글자>{name}</글자>
      </묶음>
      <잡동사니보자기>
        <똑딱이 값={현재주제} 똑딱={주제바꾸기} />
      </잡동사니보자기>
    </보자기>
  );
};

export default 선두;
