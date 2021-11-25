import 꾸미기 from "styled-components";
import 사람 from "컴포넌트들/모서리막대/사람";
import 선두 from "컴포넌트들/모서리막대/선두";
import 소통구멍갈고리 from "갈고리들/소통구멍갈고리";
import { useEffect } from "react";
import { 기본_끝점 } from "구성들/구성";
import axios from "axios";
import { 사용자상태분자 } from "상태저장소/상태분자";
import { useRecoilState as 상태총괄갈고리 } from "recoil";

const 모서리막대테두리 = 꾸미기.div`
  display: inline-flex;
  flex-direction: column;
  min-width: fit-content;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  border-right: 1px solid ${({ theme }) => theme.색깔들.gray300};
  ::-webkit-scrollbar {
    display: none;
  }
  & > :first-child {
    margin-top: 80px;
    @media only screen and (max-width: 900px) {
      margin-top: 156px;
    }
  }
`;

const 사람목록 = ({ 소통구멍 }) => {
  const [사용자들, 사용자들정의] = 상태총괄갈고리(사용자상태분자);

  const getUserList = async () => {
    try {
      const { data } = await axios.get(`${기본_끝점}/rooms`, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbHp6aTExMDlAbmF2ZXIuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNzgyMzcyNCwiZXhwIjoxNjM3ODMwNjI0fQ.jTDaoiX2VZ70YOEz4oZvjOnK9Y79Xhyqo032luoqrLg`,
          "Access-Control-Allow-Origin": "*",
        },
      });
      사용자들정의(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <선두 소통구멍={소통구멍} />
      <모서리막대테두리>
        {사용자들.length !== 0 &&
          사용자들.map((사용자, idx) => {
            return <사람 key={idx} 인자={사용자} />;
          })}
      </모서리막대테두리>
    </>
  );
};
export default 사람목록;
