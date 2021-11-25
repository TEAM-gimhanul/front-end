import React from "react";
import styled from "styled-components";
import { ReactComponent as 그림 } from "자산들/그림.svg";

const 큰보자기 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const 회색보자기 = styled.div`
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
`;
const 보자기안의글자받기 = styled.div`
width: 150vh;
input {
  width: 80%; height: 45px;
  border-style: none;
  background: transparent;
  margin-left: 2vh;
  outline: none;
}
`;

const 글자받기 = () => {
  return(
    <큰보자기>
      <회색보자기>
        <보자기안의글자받기>
          <input
            placeholder="Aa"
            type="text"
          />
        </보자기안의글자받기>
        <그림 className="그림" />
      </회색보자기>
    </큰보자기>
  );
};
export default 글자받기;