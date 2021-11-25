import {
  useRecoilState as 전역상태총괄갈고리,
  useResetRecoilState as 전역상태초기화,
} from "recoil";
import { 주소식별자상태분자 } from "상태저장소/상태분자";

function 외부인증갈고리() {
  const [주소식별자, 주소식별자갱신] = 전역상태총괄갈고리(주소식별자상태분자);
  const 주소식별자초기화 = 전역상태초기화(주소식별자상태분자);

  const 주소식별자가지고손보기 = async 외부인증종류 => {
    const 기본주소식별자 =
      "https://eb8sspxdcc.execute-api.ap-northeast-2.amazonaws.com/users";

    switch (외부인증종류) {
      case "kakao":
        주소식별자갱신(기본주소식별자 + "/kakao");
        break;
      case "naver":
        주소식별자갱신(기본주소식별자 + "/naver");
        break;
      case "google":
        주소식별자갱신(기본주소식별자 + "/google");
        break;
      default:
        return;
    }
  };

  return {
    주소식별자,
    주소식별자갱신,
    주소식별자초기화,
    주소식별자가지고손보기,
  };
}

export default 외부인증갈고리;
