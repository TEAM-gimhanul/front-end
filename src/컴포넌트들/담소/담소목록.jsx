import React, { useState as 상태관리갈고리 } from "react";
import styled from "styled-components";
import 담소항목 from "./담소항목";

const 담소_목록 = [
  {
    사진연결지정자:
      "https://cdn.discordapp.com/avatars/805014732485951498/19ec5e826036dde7b62549c4781a4772.png?size=64",
    이름: "한울",
    유형: "너",
    담소내용: `선생님들...
그럼 저는 이제 저걸 계속 보면 되나요
염탈 잘 해오겠습니다.`,
  },
  {
    사진연결지정자:
      "https://cdn.discordapp.com/avatars/312912581226397696/3b79b6de89facf44b66ce5f29b48e33d.png?size=48",
    이름: "신중빈",
    유형: "너",
    담소내용: "네넹",
  },
  {
    사진연결지정자:
      "https://cdn.discordapp.com/avatars/285243396195614721/976e1b7d8e244bcbc28295685e76e9d8.png?size=64",
    이름: "안은결",
    유형: "나",
    담소내용: "유후~ 신난다",
  },
];

const 담소목록 = () => {
  const [담소목록, 상태관리담소목록] = 상태관리갈고리(담소_목록);
  return (
    <담소목록보자기>
      {담소목록.map((항목, 열) => {
        return <담소항목 key={열} {...항목} />;
      })}
    </담소목록보자기>
  );
};
export default 담소목록;

const 담소목록보자기 = styled.div`
  padding: 4px 12px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
`;
