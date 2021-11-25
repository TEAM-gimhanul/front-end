import 꾸미기, { keyframes } from "styled-components";
import { useNavigate as 사용항해 } from "react-router";
import use사용자목록갈고리 from "갈고리들/사용자목록갈고리";
import 사용주제갈고리 from "갈고리들/use주제";
import { useState as 상태선언 } from "react";
import { Avatar as 사진 } from "@channel.io/bezier-react";

const 꼬리말 = ({ 소통구멍, 보여주기 }) => {
  const 항해 = 사용항해();
  const [, 현재주제] = 사용주제갈고리();
  const [, , 유저목록받아오기] = use사용자목록갈고리();
  const [이미지, 이미지정의] = 상태선언("");
  const [이름, 이름정의] = 상태선언("");
  const [모달보여주기, 모달보여주기선언] = 상태선언(false);

  const 유저정보_보여주기 = async ({ 얼굴, 이름 }) => {
    이미지정의(얼굴);
    이름정의(이름);
    모달보여주기선언(true);
    setTimeout(() => {
      모달보여주기선언(false);
    }, 5000);
  };

  const 무작위만남클릭 = async () => {
    await 소통구멍.current.emit("join");
    await 소통구멍.current.once("room", (data) => {
      항해(`/chat/${data.roomId}`);
      유저정보_보여주기({ 얼굴: data.profileImage, 이름: data.name });
    });
    await 유저목록받아오기();
  };

  return (
    <>
      <보자기 보여주기={보여주기}>
        <단추보자기>
          <단추 onClick={무작위만남클릭}>랜덤 매칭</단추>
        </단추보자기>
      </보자기>
      <모달 현재주제={현재주제} 모달보여주기={모달보여주기}>
        <모달내용테두리>
          <사진
            avatarUrl={이미지}
            name={이름}
            onClick={function noRefCheck() {}}
            onMouseEnter={function noRefCheck() {}}
            onMouseLeave={function noRefCheck() {}}
            size={72}
          />
          <환영인사 현재주제={현재주제}>{이름}님을 만났습니다!</환영인사>
        </모달내용테두리>
      </모달>
    </>
  );
};
export default 꼬리말;

const 모달애니메이션 = keyframes`
  from{
    transform: rotate(0deg);
    right: 0%;
  }

  to {
    transform: rotate(5turn);
    right: 50%;
  }
`;

const 환영인사 = 꾸미기.div`
  font-size: 1rem;
  word-break: keep-all;
  font-weight: 600;
  color: ${(props) => (props.현재주제 ? "black" : "white")}
`;

const 모달내용테두리 = 꾸미기.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

const 모달 = 꾸미기.div`
  z-index:99;
  position: absolute;
  top: 10%;
  right: 50%;
  padding: 1rem;
  width: 184px;
  height: 204px;
  background-color: ${(props) =>
    props.현재주제
      ? props.theme.색깔들.indigo200
      : props.theme.색깔들.indigo400};
  border-radius: 12px;
  display: ${(props) => (props.모달보여주기 ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  transition: 0.3s;
  animation: 4s ${모달애니메이션};
`;

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
