import 스타일 from "styled-components";
import { Avatar as 프로필 } from "@channel.io/bezier-react";

const 전체테두리 = 스타일.div`
  position: relative;
  display: flex;
  width: 344px;
  padding: 0px 8px;
  height: 72px;
  justify-content: start;
  align-items: center;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 15px;
  margin: 6px;
  &:hover {
    // 선택시 #d1dbff 으로
    background-color: #e0e7ff;
  }
`;

const 내용테두리 = 스타일.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: start;
  justify-content: center;
  margin-left: 8px;
`;

const 글테두리 = 스타일.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const 제목 = 스타일.div`
  font-size: 0.9375rem;
  line-height: 1.3333;
  font-weight: bold;
  color: #262626;
`;

const 내용 = 스타일.div`
  font-size: 0.8125rem;
  line-height: 1.2308;
  color: #262626;
  padding-right: 4px;
`;

const 시간 = 스타일.div`
  font-size: 0.8125rem;
  line-height: 1.2308;
  color: #999999;
  &::before {
    content: "•";
    margin-right: 4px;
  }
`;

const 상태 = 스타일.div`
  position: absolute;
  right: 0;
  margin-right: 16px;
  width: 12px;
  height: 12px;
  border: 2px solid #ebebeb;
  border-radius: 50%;
  & > div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ 상태 }) =>
      상태 === "온라인" ? "#3acf5a" : "#b2b2b2"}
  }
  // 온라인 : #3acf5a, 오프라인: #b2b2b2,
`;

const 사람 = ({ 데이터 }) => {
  const { 담소제목, 담소내용, 담소시간, 사용자프로필, 사용자상태, 사용자이름 } =
    데이터;
  return (
    <전체테두리>
      <프로필
        size={56}
        avatarUrl={사용자프로필}
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
