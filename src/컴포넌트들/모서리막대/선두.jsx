import 꾸미기 from "styled-components";
import 사용주제갈고리 from "갈고리들/use주제";

const 보자기 = 꾸미기.div`
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
  box-shadow: 0 17px 20px -18px ${(props) =>
    props.주제 ? props.theme.색깔들.gray800 : props.theme.색깔들.gray200};
  @media only screen and (max-width: 900px) {
    width: 72px;
    min-height: 144px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0px 8px;
    margin: 0px 6px;
    box-shadow: none;
  }
`;

const 단추보자기 = 꾸미기.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: 95%;
  }
`;

const 단추 = 꾸미기.div`
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
  const [, 현재주제] = 사용주제갈고리();
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
