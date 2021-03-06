import { useState as 상태관리, useEffect as 깜빡갈고리 } from "react";
import { 띄움창보자기 } from "../띄움창제공자";
import 꾸미기 from "styled-components";
import 띄움창갈고리 from "갈고리들/띄움창갈고리";
import 외부인증갈고리 from "갈고리들/외부인증갈고리";
import 인자구하기 from "query-string";
import 연동 from "axios";

const 외부인증띄움창헤더 = 꾸미기.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const 외부인증띄움창꾸미기 = 꾸미기.div`
  width: 340px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const 외부인증요소 = 꾸미기.button`
  width: 80%;
  margin: 0 auto;
  & + & {
    margin-top: 20px;
  }
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #f5f5f5;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const 닫힘단추 = 꾸미기.button`
  width: 2px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 5px;
  right: 5px;
`;

const 외부인증띄움창 = () => {
  const [주소, 주소갱신] = 상태관리(null);
  const [인자값, 인자값갱신] = 상태관리(null);
  const { 띄움창가리기 } = 띄움창갈고리();
  const { 주소식별자가지고손보기, 주소식별자 } = 외부인증갈고리();

  const 재귀주솟값가져오기 = async () => {
    try {
      const response = await 연동.get(주소식별자);
      주소갱신(response.data);
    } catch (오류) {
      console.log(오류);
    }
  };

  const 재귀주솟값손보기 = 인자 => {
    주소식별자가지고손보기(인자);
    재귀주솟값가져오기();
  };

  깜빡갈고리(() => {
    if (localStorage.getItem("auth")) return;

    const 인자값 = 인자구하기.parse(window.location.search);
    console.log(인자값);
    if (인자값.code !== undefined) {
      인자값갱신(인자값.code);
      localStorage.setItem("auth", 인자값.code);
    }
  }, []);

  if (주소) {
    window.location.href = 주소;
  }

  return (
    <띄움창보자기>
      <외부인증띄움창꾸미기>
        <닫힘단추 onClick={() => 띄움창가리기()} />
        <외부인증띄움창헤더>외부인증</외부인증띄움창헤더>
        <외부인증요소
          onClick={() => {
            재귀주솟값손보기("kakao");
          }}
        >
          카카오
        </외부인증요소>
        <외부인증요소
          onClick={() => {
            재귀주솟값손보기("naver");
          }}
        >
          네이버
        </외부인증요소>
        <외부인증요소
          onClick={() => {
            재귀주솟값손보기("google");
          }}
        >
          구글
        </외부인증요소>
      </외부인증띄움창꾸미기>
    </띄움창보자기>
  );
};

export default 외부인증띄움창;
