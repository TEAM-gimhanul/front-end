import { Avatar as 사진 } from "@channel.io/bezier-react";
import 꾸미기 from "styled-components";

const 담소항목 = (인자) => {
  const { 사진연결지정자, 이름, 담소내용, 유형 = "나" } = 인자;
  return (
    <보자기>
      {유형 === "너" && (
        <사진보자기>
          <사진
            avatarUrl={사진연결지정자}
            name={이름}
            onClick={function noRefCheck() {}}
            onMouseEnter={function noRefCheck() {}}
            onMouseLeave={function noRefCheck() {}}
            size={24}
          />
        </사진보자기>
      )}
      <담소보자기>
        {유형 === "너" && <담소작성자이름>{이름}</담소작성자이름>}
        <담소내용큰보자기 유형={유형}>
          <담소내용보자기 유형={유형}>{담소내용}</담소내용보자기>
        </담소내용큰보자기>
      </담소보자기>
    </보자기>
  );
};

export default 담소항목;

const 보자기 = 꾸미기.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
`;

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
  color: rgba(0, 0, 0, 0.4);
  font-size: 13px;
  margin-left: 12px;
`;

const 담소내용큰보자기 = 꾸미기.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ 유형 }) => (유형 === "너" ? "row" : "row-reverse")};
`;
const 담소내용보자기 = 꾸미기.div`
  max-width: 80%;
  display: inline-block;
  white-space: pre-wrap;
  color: ${({ 유형 }) => (유형 === "너" ? "#242428" : "white")};
  padding: 8px 10px;
  background-color: ${({ 유형 }) =>
    유형 === "너" ? "rgba(0, 0, 0, 0.05)" : "rgb(148, 59, 251)"};
  margin-top: 5px;
  border-radius: 18px;
  font-weight: 500;
  font-size: 15px;
`;
