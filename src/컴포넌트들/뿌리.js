import React, { Suspense, useEffect } from "react";
import { Route as 라우트, Routes as 라우트들 } from "react-router";
import TEST from "./Test";
import 모서리막대 from "./모서리막대/사람목록";
import 선두 from "./선두/선두";
import 담소화면 from "../화면들/담소화면";
import 꾸미기 from "styled-components";
import 글자받기 from "./글자받기/글자받기";
import 소통구멍갈고리 from "갈고리들/소통구멍갈고리";
import 통계 from "./통계/통계";

const 뿌리 = () => {
  const 소통구멍 = 소통구멍갈고리();

  useEffect(() => {
    소통구멍.current.emit("subscribe-all");
  }, [소통구멍]);

  return (
    <보자기>
      <모서리막대 소통구멍={소통구멍} />
      <라우트들>
        <라우트 p ath="/" element={<TEST />} />
        <라우트 path="/t1" element={<모서리막대 />} />
        <라우트 path="header" element={<선두 />} />
        <라우트
          path="/chat/:id"
          element={
            <Suspense fallback={<></>}>
              {" "}
              <담소화면 소통구멍={소통구멍} />
            </Suspense>
          }
        />
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
