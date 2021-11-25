import { Avatar as 사진 } from "@channel.io/bezier-react";
import 꾸미기 from "styled-components";
import 사용주제갈고리 from "갈고리들/use주제";

const 담소항목 = (인자) => {
  const { profileImage, name, message, 생성일 } = 인자;
  const [, 현재주제] = 사용주제갈고리();
  const 유형 = JSON.parse(localStorage.userCache).name === name ? "나" : "너";
  return (
    <보자기 유형={유형}>
      {유형 === "너" && (
        <사진보자기>
          <사진
            avatarUrl={profileImage}
            name={name}
            onClick={function noRefCheck() {}}
            onMouseEnter={function noRefCheck() {}}
            onMouseLeave={function noRefCheck() {}}
            size={24}
          />
        </사진보자기>
      )}
      <담소보자기>
        {유형 === "너" && <담소작성자이름>{name}</담소작성자이름>}
        <담소내용큰보자기>
          <담소내용보자기 주제={현재주제}>{message}</담소내용보자기>
        </담소내용큰보자기>
      </담소보자기>
    </보자기>
  );
};

export default 담소항목;

const 사진보자기 = 꾸미기.div`
  padding-right: 8px;
  display: flex;
  align-items: flex-end;
`;

const 담소보자기 = 꾸미기.div`
  width: 100%;
`;

const 담소작성자이름 = 꾸미기.div`
  color: #242428;
  font-weight: 500;
  color: ${({ theme }) => theme.색깔들.gray500};
  font-size: 13px;
  margin-left: 12px;
`;

const 담소내용큰보자기 = 꾸미기.div`
  width: 100%;
  display: flex;
`;
const 담소내용보자기 = 꾸미기.div`
  max-width: 80%;
  display: inline-block;
  white-space: break-spaces;
  padding: 8px 10px;
  margin-top: 5px;
  border-radius: 18px;
  font-weight: 500;
  font-size: 15px;
`;

const 보자기 = 꾸미기.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  & ${담소내용큰보자기} {
    flex-direction: ${({ 유형 }) => (유형 === "너" ? "row" : "row-reverse")};
  }
  & ${담소내용보자기} {
    color: ${({ 유형 }) => (유형 === "너" ? "#242428" : "white")};
    background-color: ${({ 유형, theme }) =>
      유형 === "너" ? theme.색깔들.gray100 : theme.색깔들.indigo400};
  }
`;
