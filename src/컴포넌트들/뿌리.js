import React, { Suspense, useEffect } from "react";
import { Route as 라우트, Routes as 라우트들 } from "react-router";
import 모서리막대 from "./모서리막대/사람목록";
import 담소화면 from "../화면들/담소화면";
import 꾸미기 from "styled-components";
import 소통구멍갈고리 from "갈고리들/소통구멍갈고리";
import 통계 from "./통계/통계";
import 콜백 from "화면들/콜백";

const 뿌리 = () => {
  const 소통구멍 = 소통구멍갈고리();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      소통구멍.current.emit("subscribe-all");
    }
  }, [소통구멍]);

  return (
    <보자기>
      <모서리막대 소통구멍={소통구멍} />
      <라우트들>
        <라우트
          path="/chat/:id"
          element={
            <Suspense fallback={<></>}>
              {" "}
              <담소화면 소통구멍={소통구멍} />
            </Suspense>
          }
        />
        <라우트 path="stat" element={<통계 />} />
        <라우트 path="/callback/:type" element={<콜백 />} />
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
