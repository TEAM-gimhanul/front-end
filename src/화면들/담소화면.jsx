import 모서리막대 from "../컴포넌트들/모서리막대/사람목록";
import 담소목록 from "../컴포넌트들/담소/담소목록";
import styled from "styled-components";
const 담소화면 = () => {
  return (
    <담소화면보자기>
      <모서리막대 />
      <담소나누기보자기>
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
    </담소화면보자기>
  );
};

export default 담소화면;

const 담소화면보자기 = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const 담소나누기보자기 = styled.div`
  width: 100%;
  height: 100%;
`;
