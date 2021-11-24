import 사람 from "컴포넌트들/모서리막대/사람";
import 꾸미기 from "styled-components";
import { atom as 상태, useRecoilState as 상태총괄갈고리 } from "recoil";
import { useLayoutEffect } from "react";

const 모서리막대테두리 = 꾸미기.div`
  position: sticky;
  display: inline-flex;
  flex-direction: column;
  width: fit-content;
  height: 100vh;
`;

const 사람목록 = () => {
  const 사진주소 =
    "https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png";
  const 임의자료 = [
    {
      담소제목: "담소를 나눠볼까요?",
      담소내용: "네 안녕하세요 담소입니당",
      담소시간: "5시간",
      사용자사진: 사진주소,
      사용자상태: "온라인",
      사용자이름: "안은결",
      순번: 1,
    },
    {
      담소제목: "안은결씨 하이요",
      담소내용: "겨 창시자시네요 ㅋㅋㅎ",
      담소시간: "3시간",
      사용자사진: 사진주소,
      사용자상태: "오프라인",
      사용자이름: "김한울",
      순번: 2,
    },
    {
      담소제목: "채팅 하자",
      담소내용: "중빈씨 여기 일이요 ㅎㅎ",
      담소시간: "30분",
      사용자사진: "",
      사용자상태: "온라인",
      사용자이름: "신중빈",
      순번: 3,
    },
    {
      담소제목:
        "오픈채팅입니다 하하 오픈채팅입니다 하하 오픈채팅입니다 하하 오픈채팅입니다 하하",
      담소내용:
        "하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이",
      담소시간: "방금",
      사용자사진: "",
      사용자상태: "오프라인",
      사용자이름: "손민재",
      순번: 4,
    },
    {
      담소제목: "담소를 나눠볼까요?",
      담소내용: "네 안녕하세요 담소입니당",
      담소시간: "5시간",
      사용자사진: 사진주소,
      사용자상태: "온라인",
      사용자이름: "안은결",
      순번: 5,
    },
    {
      담소제목: "안은결씨 하이요",
      담소내용: "겨 창시자시네요 ㅋㅋㅎ",
      담소시간: "3시간",
      사용자사진: 사진주소,
      사용자상태: "오프라인",
      사용자이름: "김한울",
      순번: 6,
    },
    {
      담소제목: "채팅 하자",
      담소내용: "중빈씨 여기 일이요 ㅎㅎ",
      담소시간: "30분",
      사용자사진: "",
      사용자상태: "온라인",
      사용자이름: "신중빈",
      순번: 7,
    },
    {
      담소제목:
        "오픈채팅입니다 하하 오픈채팅입니다 하하 오픈채팅입니다 하하 오픈채팅입니다 하하",
      담소내용:
        "하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이",
      담소시간: "방금",
      사용자사진: "",
      사용자상태: "오프라인",
      사용자이름: "손민재",
      순번: 8,
    },
    {
      담소제목: "담소를 나눠볼까요?",
      담소내용: "네 안녕하세요 담소입니당",
      담소시간: "5시간",
      사용자사진: 사진주소,
      사용자상태: "온라인",
      사용자이름: "안은결",
      순번: 9,
    },
    {
      담소제목: "안은결씨 하이요",
      담소내용: "겨 창시자시네요 ㅋㅋㅎ",
      담소시간: "3시간",
      사용자사진: 사진주소,
      사용자상태: "오프라인",
      사용자이름: "김한울",
      순번: 10,
    },
    {
      담소제목: "채팅 하자",
      담소내용: "중빈씨 여기 일이요 ㅎㅎ",
      담소시간: "30분",
      사용자사진: "",
      사용자상태: "온라인",
      사용자이름: "신중빈",
      순번: 11,
    },
    {
      담소제목:
        "오픈채팅입니다 하하 오픈채팅입니다 하하 오픈채팅입니다 하하 오픈채팅입니다 하하",
      담소내용:
        "하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이",
      담소시간: "방금",
      사용자사진: "",
      사용자상태: "오프라인",
      사용자이름: "손민재",
      순번: 12,
    },
    {
      담소제목: "담소를 나눠볼까요?",
      담소내용: "네 안녕하세요 담소입니당",
      담소시간: "5시간",
      사용자사진: 사진주소,
      사용자상태: "온라인",
      사용자이름: "안은결",
      순번: 13,
    },
    {
      담소제목: "안은결씨 하이요",
      담소내용: "겨 창시자시네요 ㅋㅋㅎ",
      담소시간: "3시간",
      사용자사진: 사진주소,
      사용자상태: "오프라인",
      사용자이름: "김한울",
      순번: 14,
    },
    {
      담소제목: "채팅 하자",
      담소내용: "중빈씨 여기 일이요 ㅎㅎ",
      담소시간: "30분",
      사용자사진: "",
      사용자상태: "오프라인",
      사용자이름: "신중빈",
      순번: 15,
    },
    {
      담소제목:
        "오픈채팅입니다 하하 오픈채팅입니다 하하 오픈채팅입니다 하하 오픈채팅입니다 하하",
      담소내용:
        "하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이",
      담소시간: "방금",
      사용자사진: "",
      사용자상태: "오프라인",
      사용자이름: "손민재",
      순번: 16,
    },
  ];
  const 사용자목록_상태 = 상태({
    key: "사용자목록상태",
    default: [{}],
  });

  const [사용자들, 사용자들정하기] = 상태총괄갈고리(사용자목록_상태);
  useLayoutEffect(() => {
    사용자들정하기(임의자료);
  }, []);
  return (
    <모서리막대테두리>
      {사용자들.length &&
        사용자들.map((사용자) => {
          return <사람 key={사용자.순번} 데이터={사용자} />;
        })}
    </모서리막대테두리>
  );
};
export default 사람목록;
