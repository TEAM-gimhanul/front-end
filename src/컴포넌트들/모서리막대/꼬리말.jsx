import 꾸미기 from "styled-components";
import { useNavigate as 사용항해 } from "react-router";

const 꼬리말 = ({ 소통구멍, 보여주기 }) => {
  const 항해 = 사용항해();
  const 무작위만남클릭 = async () => {
    await 소통구멍.current.emit("join");
    await 소통구멍.current.once("room", (data) => {
      항해(`/chat/${data.roomId}`);
      window.alert(`${data.name}님과 만났습니다!`);
    });
    await 유저목록받아오기();
  };

  return (
    <보자기 보여주기={보여주기}>
      <단추보자기>
        <단추 onClick={무작위만남클릭}>랜덤 매칭</단추>
      </단추보자기>
    </보자기>
  );
};
export default 꼬리말;

const 보자기 = 꾸미기.div`
  position: fixed;
  z-index: 99;
  width: 344px;
  bottom: 0;
  min-height: 60px;
  height: 60px;
  display: ${(props) => (props.보여주기 ? "flex" : "none")};
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 6px 14px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.색깔들.white};
  box-shadow: 0 17px 20px -18px ${(props) =>
    props.주제 ? "transparent" : props.theme.색깔들.gray200};
  @media only screen and (max-width: 900px) {
    width: 62px;
    min-height: 70px;
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

const 단추 = 꾸미기.div`
  width: 100%;
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
