import React from "react";
import styled from "styled-components";
import 대표 from "../../자산들/대표.png";

const 보자기 = styled.div`
  width: 100%; height: 75px;
  background-color:#ffffff;
  box-shadow: 0 17px 20px -18px rgb(247, 247, 247);
  display: flex;justify-content: center;align-items: center;
`;
const 묶음 = styled.div`
  display: flex; justify-content: left; align-items: center;
  width: 100%;
  font-size: 25px; font-weight: bold;
  margin-left: 5vh;
`;
const 글자 = styled.div`margin-left: 1vh;`;
const 선두 = () => {
  return (
    <보자기>
      <묶음>
        <img
          src={대표}
          width="50px"
          height="50px"
        />
        <글자>"진중"</글자>
      </묶음>
    </보자기>
  );
};

export default 선두;