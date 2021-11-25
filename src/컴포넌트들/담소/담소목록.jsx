import React, { useEffect, useRef, useState as 상태관리갈고리 } from "react";
import 꾸미기 from "styled-components";
import 담소항목 from "./담소항목";

const 담소목록 = ({ 담소목록 }) => {
  const 담소목록참조 = useRef();
  useEffect(() => {
    담소목록참조.current.scrollTo(0, 담소목록참조.current.scrollHeight);
  }, [담소목록]);
  return (
    <담소목록보자기 ref={담소목록참조}>
      {담소목록?.map((항목, 열) => {
        return <담소항목 key={열} {...항목} />;
      })}
    </담소목록보자기>
  );
};
export default 담소목록;

const 담소목록보자기 = 꾸미기.div`
  padding: 4px 12px;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  overflow-y: scroll;
`;
