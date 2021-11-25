import React, { useState } from "react";
import 꾸미기 from "styled-components";
import { ReactComponent as 그림 } from "자산들/그림.svg";

const 큰보자기 = 꾸미기.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const 회색보자기 = 꾸미기.div`
  width: 80%; height: 50px;
  border-radius: 100px;
  background-color: rgb(247,247,247);
  display: flex;
  justify-content: left;
  align-items: center;
  @media screen and (max-width: 700px) {
    .그림 {
      margin-right: 1.8vh;
    }
  }
  .그림 {
    width: 100px;height: 30px;
  }
  button {
    border: none;
    outline: none;
    background: none;
  }
`;
const 보자기안의글자받기 = 꾸미기.div`
width: 150vh;
input {
  width: 80%; height: 45px;
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
  return (
    <큰보자기>
      <회색보자기>
        <보자기안의글자받기>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              담소보내기(state);
              setState("");
            }}
          >
            <input
              placeholder="보낼 담소내용을 입력해주세요!"
              onChange={(e) => setState(e.target.value)}
              value={state}
              type="text"
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
