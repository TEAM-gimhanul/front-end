import { useEffect, useState as 상태관리갈고리 } from "react";
import styled from "styled-components";

const 위치 = Object.freeze({
  거짓: 1,
  참: 22,
});

const 배경 = Object.freeze({
  거짓: "gray300",
  참: "indigo500",
});

const 똑딱이 = ({ 값 = false, 똑딱 }) => {
  const [활동중, 설정활동중] = 상태관리갈고리(값);

  const 딸깍 = () => {
    설정활동중((이전상태) => !이전상태);
  };

  useEffect(() => {
    if (똑딱) 똑딱(활동중);
  }, [활동중]);

  const 꾸미기인자들 = {
    배경: 배경[활동중 ? "참" : "거짓"],
    위치: 위치[활동중 ? "참" : "거짓"],
  };

  return (
    <단추보자기 onClick={딸깍} 배경={꾸미기인자들.배경}>
      <단추동그라미 위치={꾸미기인자들.위치} />
    </단추보자기>
  );
};

export default 똑딱이;

const 단추보자기 = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 11px;
  padding: 1px;
  cursor: pointer;
  position: relative;
  background: ${(인자) => 인자.theme.색깔들[인자.배경]};
  transition: background 0.1s linear;
`;

const 단추동그라미 = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  top: 50%;
  left: 0;
  transform: translate(${(인자) => 인자.위치}px, -50%);
  transition: transform 0.08s ease-in;
`;
