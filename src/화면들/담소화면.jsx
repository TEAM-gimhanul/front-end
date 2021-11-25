import 선두 from "컴포넌트들/선두/선두";
import 꾸미기 from "styled-components";
import 담소목록 from "../컴포넌트들/담소/담소목록";

const 담소화면 = () => {
  return (
    <담소나누기보자기>
      <선두 />
      <담소목록
        담소목록={[
          {
            사용자사진: "",
            사용자이름: "안은결",
            담소내용: "나다 얘들아",
            생성일: "2021-11-25",
          },
        ]}
      />
    </담소나누기보자기>
  );
};

export default 담소화면;

const 담소나누기보자기 = 꾸미기.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
