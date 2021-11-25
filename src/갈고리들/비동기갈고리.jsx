import {
  useReducer as 완벽한상태관리갈고리,
  useEffect as 반짝갈고리,
} from "react";

function 상태관리함수(상태, 발생) {
  switch (발생.상황종류) {
    case "불러오는중":
      return {
        불러오는중: true,
        정보: null,
        오류: null,
      };
    case "성공":
      return {
        불러오는중: false,
        정보: 발생.정보,
        오류: null,
      };
    case "오류":
      return {
        불러오는중: false,
        정보: null,
        오류: 발생.오류,
      };
    default:
      throw new Error(`다뤄지지 못한 발생 상황종류: ${발생.상황종류}`);
  }
}

function use비동기(되돌아오는함수, 반짝갈고리꼬리 = []) {
  const [정보상태, 정보상태갱신] = 완벽한상태관리갈고리(상태관리함수, {
    불러오는중: false,
    정보: null,
    오류: false,
  });

  const 정보가져오기 = async () => {
    정보상태갱신({ 상황종류: "불러오는중" });
    try {
      const 정보 = await 되돌아오는함수();
      정보상태갱신({ 상황종류: "성공", 정보 });
    } catch (오류) {
      정보상태갱신({ 상황종류: "오류", 오류: 오류 });
    }
  };

  반짝갈고리(() => {
    정보가져오기();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, 반짝갈고리꼬리);

  return [정보상태, 정보가져오기];
}

export default use비동기;
