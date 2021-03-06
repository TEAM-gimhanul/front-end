import 꾸미기 from "styled-components";
import 사람 from "컴포넌트들/모서리막대/사람";
import 선두 from "컴포넌트들/모서리막대/선두";
import 꼬리말 from "컴포넌트들/모서리막대/꼬리말";
import { useLayoutEffect as 반짝틀갈고리, useState as 상태선언 } from "react";
import use사용자목록갈고리 from "갈고리들/사용자목록갈고리";
import 사용주제갈고리 from "갈고리들/use주제";

const 모서리막대테두리 = 꾸미기.div`
  display: inline-flex;
  flex-direction: column;
  min-width: fit-content;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 70px;
  -ms-overflow-style: none;
  box-sizing: border-box;
  border-right: 1px solid ${({ theme, 주제 }) =>
    주제 ? theme.색깔들.gray800 : theme.색깔들.gray300};
  ::-webkit-scrollbar {
    display: none;
  }
  & > :first-child {
    margin-top: 80px;
    @media only screen and (max-width: 900px) {
      margin-top: 0px;
    }
  }
`;

const 사람목록 = ({ 소통구멍 }) => {
  const [, 현재주제] = 사용주제갈고리();
  const [보여주기, 보여주기정의] = 상태선언(true);
  const [사용자들, 사용자들정의, 유저목록받아오기] = use사용자목록갈고리();
  반짝틀갈고리(() => {
    유저목록받아오기();
  }, []);

  반짝틀갈고리(() => {
    const 주소 = window.location.href;
    if (주소.slice(주소.length - 5) === "login") {
      보여주기정의(false);
    }
  }, []);

  return (
    <>
      <선두 소통구멍={소통구멍} 보여주기={보여주기} />
      <모서리막대테두리
        주제={현재주제 === 1 ? true : false}
        보여주기={보여주기}
      >
        {사용자들.length !== 0 &&
          사용자들.map((사용자, idx) => {
            return <사람 key={idx} 인자={사용자} 보여주기={보여주기} />;
          })}
      </모서리막대테두리>
      <꼬리말 소통구멍={소통구멍} 보여주기={보여주기} />
    </>
  );
};
export default 사람목록;
