import 꾸미기 from "styled-components";
import 사용주제갈고리 from "갈고리들/use주제";
import 띄움창갈고리 from "갈고리들/띄움창갈고리";
import { useNavigate as 사용항해 } from "react-router";
import use사용자목록갈고리 from "갈고리들/사용자목록갈고리";
import { Button as 아이오단추, Avatar } from "@channel.io/bezier-react";
import { ReactComponent as 로그아웃 } from "자산들/로그아웃.svg";

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
    props.주제 ? "transparent" : props.theme.색깔들.gray200};
  @media only screen and (max-width: 900px) {
    display: none;
    width: 62px;
    min-height: 144px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0px 8px 0px 5px;
    margin: 0px 6px;
    box-shadow: none;
  }
`;

const 단추보자기 = 꾸미기.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: 95%;
  }
  & > button {
    background-color: transparent;
    border-radius: 5px;
    color: white;
    & span {
      margin-left: 10px;
      font-weight: bold;
    }
  }
`;

const 로그아웃단추 = 꾸미기(로그아웃)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  & path{
    fill: ${({ theme }) => theme.색깔들.gray900};
  }  

`;

const 사진보자기 = 꾸미기.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.색깔들.gray900};
  font-weight: bold;
`;

const 사용자이름 = 꾸미기.div`
  margin-left: 12px;
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

const 선두 = ({ 소통구멍 }) => {
  const 항해 = 사용항해();
  const token = localStorage.getItem("access_token");
  const [, 현재주제] = 사용주제갈고리();
  const [, , 유저목록받아오기] = use사용자목록갈고리();
  const { 띄움창나타내기 } = 띄움창갈고리();
  const userCache = JSON.parse(localStorage.getItem("userCache"));
  const 로그아웃실행 = () => {
    if (token) {
      localStorage.removeItem("access_token");
      항해("/login");
    }
  };

  const 무작위만남클릭 = async () => {
    await 소통구멍.current.emit("join");
    await 소통구멍.current.once("room", (data) => {
      항해(`/chat/${data.roomId}`);
      window.alert(`${data.name}님과 만났습니다!`);
    });
    await 유저목록받아오기();
  };

  return (
    <보자기 주제={현재주제}>
      <단추보자기>
        <사진보자기>
          <Avatar
            avatarUrl={userCache.profileImage}
            name={userCache.name}
            onClick={function noRefCheck() {}}
            onMouseEnter={function noRefCheck() {}}
            onMouseLeave={function noRefCheck() {}}
            size={24}
          />
          <사용자이름>안은결</사용자이름>
        </사진보자기>
        <로그아웃단추 onClick={로그아웃실행}></로그아웃단추>
      </단추보자기>
    </보자기>
  );
};

export default 선두;
