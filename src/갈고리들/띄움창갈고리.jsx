import { useRecoilState as 전역상태관리갈고리 } from "recoil";
import { 띄움창전역상태분자 } from "상태저장소/상태분자";

const use띄움창 = () => {
  const [띄움창상태, 띄움창상태갱신] = 전역상태관리갈고리(띄움창전역상태분자);

  const 띄움창나타내기 = 인자_띄움창상태 => {
    띄움창상태갱신(인자_띄움창상태);
  };

  const 띄움창가리기 = () => {
    띄움창상태갱신(null);
  };

  return {
    띄움창상태,
    띄움창상태갱신,
    띄움창나타내기,
    띄움창가리기,
  };
};

export default use띄움창;
