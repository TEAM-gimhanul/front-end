import {
  useRecoilState as 전역상태총괄갈고리,
  useResetRecoilState as 전역상태초기화,
} from "recoil";
import { 주소식별자상태분자 } from "상태저장소/상태분자";

function 외부인증갈고리() {
  const [주소식별자, 주소식별자갱신] = 전역상태총괄갈고리(주소식별자상태분자);
  const 주소식별자초기화 = 전역상태초기화(주소식별자상태분자);

  const 주소식별자가지고손보기 = 외부인증종류 => {
    주소식별자초기화();
    주소식별자갱신(주소식별자 + "/" + 외부인증종류);
  };

  return {
    주소식별자,
    주소식별자갱신,
    주소식별자초기화,
    주소식별자가지고손보기,
  };
}

export default 외부인증갈고리;
