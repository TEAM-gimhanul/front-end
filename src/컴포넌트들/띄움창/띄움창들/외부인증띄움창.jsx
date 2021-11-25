import { 띄움창보자기 } from "../띄움창제공자";
import 꾸미기 from "styled-components";
import 띄움창갈고리 from "갈고리들/띄움창갈고리";

const 외부인증띄움창헤더 = 꾸미기.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const 외부인증띄움창꾸미기 = 꾸미기.div`
  width: 340px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const 외부인증요소 = 꾸미기.button`
  width: 80%;
  margin: 0 auto;
  & + & {
    margin-top: 20px;
  }
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #f5f5f5;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const 닫힘단추 = 꾸미기.button`
  width: 2px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 5px;
  right: 5px;
`;

const 외부인증띄움창 = () => {
  const { 띄움창가리기 } = 띄움창갈고리();
  return (
    <띄움창보자기>
      <외부인증띄움창꾸미기>
        <닫힘단추 onClick={() => 띄움창가리기()} />
        <외부인증띄움창헤더>외부인증</외부인증띄움창헤더>
        <외부인증요소>카카오</외부인증요소>
        <외부인증요소>네이버</외부인증요소>
        <외부인증요소>구글</외부인증요소>
      </외부인증띄움창꾸미기>
    </띄움창보자기>
  );
};

export default 외부인증띄움창;
