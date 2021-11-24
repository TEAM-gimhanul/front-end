import React from "react";
import { Route as 라우트, Routes as 라우트들 } from "react-router";
import TEST from "./Test";
import 담소목록 from "./담소/담소목록";
import 모서리막대 from "./모서리막대/사람목록";
import 담소화면 from "../화면들/담소화면";
const 뿌리 = () => {
  return (
    <라우트들>
      <라우트 path="/" element={<TEST />} />
      <라우트 path="/t1" element={<모서리막대 />} />
      <라우트 path="/chat" element={<담소화면 />} />
    </라우트들>
  );
};

export default 뿌리;
