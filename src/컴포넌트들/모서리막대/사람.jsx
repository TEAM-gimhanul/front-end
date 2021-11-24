import 꾸미기 from "styled-components";
import { Avatar as 사진 } from "@channel.io/bezier-react";
import 주제받기 from "잡동사니/주제받기";

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
  background-color: ${({ theme }) => theme.색깔들.white};
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
      props.상태 === "온라인"
        ? props.theme.색깔들.green500
        : props.theme.색깔들.gray400};
  }
  // 온라인 : #3acf5a, 오프라인: gray400,
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const 사람 = ({ 데이터 }) => {
  const 현재주제 = 주제받기();
  const { 담소제목, 담소내용, 담소시간, 사용자사진, 사용자상태, 사용자이름 } =
    데이터;

  return (
    <전체테두리 주제={현재주제}>
      <사진
        size={56}
        avatarUrl={사용자사진}
        name={사용자이름}
        showBorder={false}
        disabled={false}
      />
      <내용테두리>
        <제목>{담소제목}</제목>
        <글테두리>
          <내용>{담소내용}</내용>
          <시간>{담소시간}</시간>
        </글테두리>
      </내용테두리>
      <상태 상태={사용자상태}>
        <div />
      </상태>
    </전체테두리>
  );
};
export default 사람;
