import 꾸미기 from "styled-components";
import 사람 from "컴포넌트들/모서리막대/사람";
import 선두 from "컴포넌트들/모서리막대/선두";
import { useEffect } from "react";
import use사용자목록갈고리 from "갈고리들/사용자목록갈고리";

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
  const [사용자들, 사용자들정의, 유저목록받아오기] = use사용자목록갈고리();

  useEffect(() => {
    유저목록받아오기();
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
