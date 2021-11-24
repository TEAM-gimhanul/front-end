import 뿌리 from "컴포넌트들/뿌리";
import React from "react";
import { RecoilRoot as 리코일제공자 } from "recoil";
import 리액트제공자 from "react-dom";
import 글로벌스타일 from "스타일들/글로벌스타일";
import { BrowserRouter as 브라우저라우터 } from "react-router-dom";
import 김한울주제제공자 from "문맥들/김한울주제제공자";

리액트제공자.render(
  <리코일제공자>
    <김한울주제제공자>
      <브라우저라우터>
        <뿌리 />
        <글로벌스타일 />
      </브라우저라우터>
    </김한울주제제공자>
  </리코일제공자>,
  document.getElementById("리액트돔")
);
