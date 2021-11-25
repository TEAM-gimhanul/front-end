import 선두 from "컴포넌트들/선두/선두";
import 꾸미기 from "styled-components";
import 담소목록 from "../컴포넌트들/담소/담소목록";
import 글자받기 from "컴포넌트들/글자받기/글자받기";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { 사용자상태분자, 담소상태분자 } from "상태저장소/상태분자";
import { useRecoilState as 상태총괄갈고리, useRecoilValue } from "recoil";

const 담소화면 = ({ 소통구멍 }) => {
  const { id } = useParams();
  const [사용자들, 사용자들정의] = 상태총괄갈고리(사용자상태분자);
  const [담소들, 선언담소목록] = 상태총괄갈고리(담소상태분자(id));
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      소통구멍.current.on("message", (담소) =>
        선언담소목록((oldDate) => [...oldDate, 담소])
      );
    }
  }, [id]);

  const getCurrentRoom = () => {
    return 사용자들.filter((item) => item.roomId === Number(id))[0];
  };
  const 담소보내기 = (담소) => {
    const 정보 = {
      roomId: id,
      message: 담소,
    };

    소통구멍.current.emit("message", 정보);
  };
  return (
    <담소나누기보자기>
      <선두 {...getCurrentRoom()} />
      <담소목록 담소목록={담소들} />
      <글자받기 담소보내기={담소보내기} />
    </담소나누기보자기>
  );
};

export default 담소화면;

const 담소나누기보자기 = 꾸미기.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;
