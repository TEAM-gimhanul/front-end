import React from "react";
import 꾸미기, { css as 크스스 } from "styled-components";
import * as 얍 from "./통계수치";
import 나의갈고리 from "갈고리들/나의갈고리";

const 색깔넣기 = () => {
  const 끝 = localStorage.getItem("fuxxcount");
  let 꾸미기 = "";

  for (let i = 0; i < 끝; i += 1) {
    꾸미기 += `
            & #d${i + 1} {
              background-color: #5133E6 !important;
            }
        `;
  }

  return 크스스`
    ${꾸미기}
  `;
};

const 더큰보자기 = 꾸미기.div`
  width; 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    margin-top: 20vh;
    margin-left: 2vh;
    flex-direction: column;
    overflow-x:hidden;
  }
  ${색깔넣기()}
`;

const 큰보자기 = 꾸미기.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20vh;
  @media screen and (max-width: 700px) {
    margin: 0;
  }
`;

const 이응하나 = () => {
  return (
    <>
      <div className="일" id="d1" />
      <div className="이" id="d2" />
      <div className="삼" id="d3" />
      <div className="사" id="d4" />
    </>
  );
};
const 이응둘 = () => {
  return (
    <>
      <div className="일" id="d5" />
      <div className="이" id="d6" />
      <div className="삼" id="d7" />
    </>
  );
};
const 이응셋 = () => {
  return (
    <>
      <div className="일" id="d8" />
      <div className="이" id="d9" />
      <div className="삼" id="d10" />
    </>
  );
};
const 이응넷 = () => {
  return (
    <>
      <div className="일" id="d11" />
      <div className="이" id="d12" />
      <div className="삼" id="d13" />
      <div className="사" id="d14" />
    </>
  );
};
const 요하나 = () => {
  return (
    <>
      <div className="일" id="d15" />
      <div className="이" id="d16" />
    </>
  );
};
const 요둘 = () => {
  return (
    <>
      <div className="일" id="d17" />
      <div className="이" id="d18" />
      <div className="삼" id="d19" />
      <div className="사" id="d20" />
      <div className="오" id="d21" />
      <div className="육" id="d22" />
      <div className="칠" id="d23" />
      <div className="팔" id="d24" />
    </>
  );
};
const 요셋 = () => {
  return (
    <>
      <div className="일" id="d25" />
      <div className="이" id="d26" />
    </>
  );
};
const 보자기 = 꾸미기.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const 보자기둘 = 꾸미기.div`
  margin-top: 1vh;
  width:100%;
  display: flex;
  justify-content: center;
`;
const 보자기셋 = 꾸미기.div`
  margin-top: 1vh;
  width:100%;
  display: flex;
  justify-content: center;
  margin-left: -8vh;
`;
const 보자기넷 = 꾸미기.div`
  margin-top: 1vh;
  width:100%;
  display: flex;
  justify-content: center;
  margin-left: -8vh;
`;
const 네모1 = 꾸미기.div`
display: flex;
margin-top: 16.4vh;
  div {
    width: 30px; height: 30px;
    background-color:#87878787;
    margin-top: 1vh;
    margin-left: 1vh;
  }
`;
const 네모2 = 꾸미기.div`
display: flex;
flex-direction: column;
  div {
    width: 30px; height: 30px;
    background-color:#87878787;
    margin-top: 1vh;
    margin-left: 1.2vh;
  }
`;
const 네모3 = 꾸미기.div`
display: flex;
margin-bottom: 17vh;
margin-right: -17.2vh;
  div {
    width: 30px; height: 30px;
    background-color: #87878787;
    margin-top: 1vh;
    margin-left: 1vh;
  }
`;
const 네모4 = 꾸미기.div`
margin-right:0.5vh;
  margin-left: 7.5vh;
  div {
    width: 30px; height: 30px;
    background-color:#87878787;
    margin-top: 1vh;
    margin-left: 2vh;
  }
`;
const 네모5 = 꾸미기.div`
display: flex;
  margin-left: 15.8vh;
  div {
    width: 30px; height: 30px;
    background-color:#87878787;
    margin-top: 1.5vh;
    margin-left: 1.1vh;
  }
`;
const 네모6 = 꾸미기.div`
margin-left: -4vh;
  margin-top:4.7vh;
  div {
    width: 30px; height: 30px;
    background-color:#87878787;
    margin-top: 1vh;
    margin-left: 1vh;
  }
`;
const 통계 = () => {
  const { 욕설셈 } = 나의갈고리();
  localStorage.setItem("fuxxcount", 욕설셈);

  return (
    <더큰보자기>
      <큰보자기>
        <보자기>
          <네모2>
            <이응둘 />
          </네모2>
          <네모3>
            <이응넷 />
          </네모3>
          <네모1>
            <이응하나 />
          </네모1>
          <네모2>
            <이응셋 />
          </네모2>
        </보자기>
        <보자기둘>
          <네모2>
            <요하나 />
          </네모2>
          <네모4>
            <요하나 />
          </네모4>
        </보자기둘>
        <보자기셋>
          <네모5>
            <요둘 />
          </네모5>
        </보자기셋>
        <보자기넷>
          <네모5>
            <이응넷 />
          </네모5>
          <네모6>
            <요셋 />
          </네모6>
        </보자기넷>
      </큰보자기>
      <얍.막대보자기>
        <얍.막대1>
          욕한 횟수 : {typeof 욕설셈 !== "number" ? 0 : 욕설셈}
        </얍.막대1>
        <얍.막대2>Top 1. 시발</얍.막대2>
        <얍.막대3>Top 2. 병신</얍.막대3>
        <얍.막대4>Top 3. 지랄</얍.막대4>
      </얍.막대보자기>
    </더큰보자기>
  );
};

export default 통계;
