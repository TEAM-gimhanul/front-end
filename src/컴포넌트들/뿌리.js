import React from "react";
import { Route as 라우트, Routes as 라우트들 } from "react-router";
import TEST from "./Test";
import 모서리막대 from "./모서리막대/사람목록";
import 선두 from "./선두/선두";
import 담소화면 from "../화면들/담소화면";
import 꾸미기 from "styled-components";
import 글자받기 from "./글자받기/글자받기";
const 뿌리 = () => {
  return (
    <보자기>
      <모서리막대 />
      <라우트들>
        <라우트 p ath="/" element={<TEST />} />
        <라우트 path="/t1" element={<모서리막대 />} />
        <라우트 path="header" element={<선두 />} />
        <라우트 path="/chat/:id" element={<담소화면 />} />
        <라우트 path="input" element={<글자받기 />} />
      </라우트들>
    </보자기>
  );
};

export default 뿌리;

const 보자기 = 꾸미기.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
