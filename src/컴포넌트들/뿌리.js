import React from "react";
import { Route as 라우트, Routes as 라우트들 } from "react-router";
import 담소항목 from "./담소/담소항목";
import 모서리막대 from "./모서리막대/사람목록";
const 뿌리 = () => {
  return (
    <라우트들>
      <라우트 path="/t1" element={<모서리막대 />} />
      <라우트 path="/test" element={<담소항목 />} />
    </라우트들>
  );
};

export default 뿌리;
