import 꾸미기 from "styled-components";
import { Avatar as 사진 } from "@channel.io/bezier-react";
import 사용주제갈고리 from "갈고리들/use주제";
import { useNavigate as 사용항해 } from "react-router";
import 접속중 from "잡동사니/접속중";

const 전체테두리 = 꾸미기.div`
  position: relative;
  display: flex;
  width: 344px;
  max-width: 344px;
  padding: 0px 8px;
  height: 72px;
  max-height: 72px;
  min-height: 72px;
  justify-content: start;
  align-items: center;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 15px;
  margin: 6px;
  background-color:  transparent;
  &:hover {
    // 선택시 purple50 으로
    background-color: ${(props) =>
      props.주제 ? props.theme.색깔들.gray700 : props.theme.색깔들.indigo50};
  }
  @media only screen and (max-width: 900px) {
    width: fit-content;
  }
`;

const 내용테두리 = 꾸미기.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: start;
  justify-content: center;
  margin-left: 8px;
  width: 72%;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const 글테두리 = 꾸미기.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const 제목 = 꾸미기.div`
  font-size: 0.9375rem;
  line-height: 1.3333;
  font-weight: bold;
  color: ${({ theme }) => theme.색깔들.gray900};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 240px;
  text-align: start;
`;

const 내용 = 꾸미기.div`
  font-size: 0.8125rem;
  line-height: 1.2308;
  color: ${({ theme }) => theme.색깔들.gray900};
  padding-right: 4px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  text-align: start;
`;

const 시간 = 꾸미기.div`
  font-size: 0.8125rem;
  line-height: 1.2308;
  color: ${({ theme }) => theme.색깔들.gray500};
  &::before {
    content: "•";
    margin-right: 4px;
  }
`;

const 상태 = 꾸미기.div`
  position: absolute;
  right: 0;
  margin-right: 16px;
  width: 12px;
  height: 12px;
  border: 2px solid ${({ theme }) => theme.색깔들.gray200};
  border-radius: 50%;
  & > div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.상태 ? props.theme.색깔들.green500 : props.theme.색깔들.gray400};
  }
  // 1 : #3acf5a, 0: gray400,
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const 사람 = ({ 인자 }) => {
  const 항해 = 사용항해();
  const [, 현재주제] = 사용주제갈고리();
  const { roomId, name, profileImage } = 인자;

  return (
    <전체테두리 onClick={() => 항해(`/chat/${roomId}`)} 주제={현재주제}>
      <사진
        size={56}
        avatarUrl={profileImage}
        name={name}
        showBorder={false}
        disabled={false}
      />
      <내용테두리>
        <제목>{name}</제목>
        <글테두리>
          <내용>"없다고하자"</내용>
          <시간>3시간</시간>
        </글테두리>
      </내용테두리>
      <상태 상태={접속중()}>
        <div />
      </상태>
    </전체테두리>
  );
};
export default 사람;
