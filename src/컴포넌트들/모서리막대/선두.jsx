import styled from "styled-components";
import 주제받기 from "잡동사니/주제받기";

const 보자기 = styled.div`
  position: fixed;
  z-index: 99;
  width: 344px;
  min-height: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 6px 14px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.색깔들.white};
  box-shadow: 0 17px 20px -18px ${(props) => (props.주제 ? props.theme.색깔들.gray800 : props.theme.색깔들.gray200)};
  @media only screen and (max-width: 900px) {
    width: 72px;
    min-height: 144px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

const 단추보자기 = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: 95%;
  }
`;

const 단추 = styled.div`
  width: 120px;
  height: 48px;
  display: flex;
  font-size: 0.875rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.색깔들.indigo500};
  border-radius: 12px;
  color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media only screen and (max-width: 900px) {
    width: 60px;
    height: 60px;
  }
`;

const 선두 = () => {
  const 현재주제 = 주제받기();
  return (
    <보자기 주제={현재주제}>
      <단추보자기>
        <단추>로그인</단추>
        <단추>랜덤매칭</단추>
      </단추보자기>
    </보자기>
  );
};

export default 선두;
