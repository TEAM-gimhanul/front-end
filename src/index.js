import 뿌리 from "컴포넌트들/뿌리";
import React from "react";
import { RecoilRoot as 리코일제공자 } from "recoil";
import 리액트제공자 from "react-dom";
import 띄움창제공자 from "컴포넌트들/띄움창/띄움창제공자";
import 글로벌스타일 from "스타일들/글로벌스타일";
import { BrowserRouter as 브라우저라우터 } from "react-router-dom";

리액트제공자.render(
  <리코일제공자>
    <브라우저라우터>
      <뿌리 />
      <띄움창제공자 />
      <글로벌스타일 />
    </브라우저라우터>
  </리코일제공자>,
  document.getElementById("리액트돔")
);
