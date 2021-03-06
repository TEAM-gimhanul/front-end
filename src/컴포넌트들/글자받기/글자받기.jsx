import React, { useState } from "react";
import 꾸미기, { keyframes } from "styled-components";
import { ReactComponent as 그림 } from "자산들/그림.svg";
import 사용주제갈고리 from "갈고리들/use주제";
import { useNavigate } from "react-router";

const 채팅로딩애니메이션 = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;
const 큰보자기 = 꾸미기.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 12px;
`;
const 회색보자기 = 꾸미기.div`
  width: 100%; 
  height: 50px;
  border-radius: 100px;
  background-color: ${(props) =>
    props.주제 ? props.theme.색깔들.gray800 : "rgb(247,247,247)"};
  display: flex;
  justify-content: left;
  align-items: center;
  @media screen and (max-width: 700px) {
    .그림 {
      margin-right: 1.8vh;
    }
  }
  .그림 {
    width: 50px;
    height: 30px;
  }
  button {
    border: none;
    outline: none;
    background: none;
    animation: 5s ${채팅로딩애니메이션} infinite;
  }
`;
const 보자기안의글자받기 = 꾸미기.div`
width: 100%;
input {
  width: 100%; height: 45px;
  border-style: none;
  background: transparent;
  margin-left: 2vh;
  outline: none;
}
`;
const 버튼되는지궁금해서 = () => {
  console.log("ㅇㅇ클릭 됨");
};

const 글자받기 = ({ 담소보내기 }) => {
  const [state, setState] = useState("");
  const [, 현재주제] = 사용주제갈고리();
  const navigate = useNavigate();
  return (
    <큰보자기>
      <회색보자기 주제={현재주제}>
        <보자기안의글자받기>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (state === "/통계창") {
                navigate("/stat");
                return;
              }
              담소보내기(state);
              setState("");
            }}
          >
            <input
              placeholder="보낼 담소내용을 입력해주세요!"
              onChange={(e) => setState(e.target.value)}
              value={state}
              type="text"
              style={{ color: 현재주제 ? "white" : "black" }}
            />
          </form>
        </보자기안의글자받기>
        <button onClick={버튼되는지궁금해서}>
          <그림 className="그림" />
        </button>
      </회색보자기>
    </큰보자기>
  );
};
export default 글자받기;
