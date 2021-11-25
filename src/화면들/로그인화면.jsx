import styled from "styled-components";
import 로그인 from "컴포넌트들/로그인/로그인";

const 로그인화면 = () => {
  return (
    <로그인화면테두리>
      <로그인 />
    </로그인화면테두리>
  );
};

export default 로그인화면;

const 로그인화면테두리 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
