import { useRecoilValue as 전역상태관리값갈고리 } from "recoil";
import 꾸미기 from "styled-components";
import { 띄움창전역상태분자 } from "상태저장소/상태분자";
import 입장띄움창 from "./띄움창들/입장띄움창";
import 회원가입띄움창 from "./띄움창들/회원가입띄움창";

export const 띄움창보자기 = 꾸미기.div`
  width: 700px;
  height: 500px;
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border: 1px solid black;
  border-radius: 30px;
  padding: 20px;
`;

const 띄움창들 = {
  입장띄움창: <입장띄움창 />,
  회원가입띄움창: <회원가입띄움창 />,
};

const 띄움창제공자 = () => {
  const 띄움창상태 = 전역상태관리값(띄움창전역상태분자);

  const 띄움창상태생성 = () => {
    if (!띄움창상태) return;

    return 띄움창들[띄움창상태];
  };

  return <>{띄움창상태생성()}</>;
};

export default 띄움창제공자;
