function 외부인증갈고리() {
  const 주소식별자가져오기 = 외부인증종류 => {
    let 기본주소식별자 =
      "https://eb8sspxdcc.execute-api.ap-northeast-2.amazonaws.com/users";

    switch (외부종류) {
      case "카카오":
        return 기본주소식별자 + "/kakao";
      case "네이버":
        return 기본주소식별자 + "/naver";
      case "구글":
        return 기본주소식별자 + "/google";
      default:
        throw new Error(`알 수 없는 외부인증종류: ${외부종류}`);
    }
  };

  return {
    주소식별자가져오기,
  };
}
