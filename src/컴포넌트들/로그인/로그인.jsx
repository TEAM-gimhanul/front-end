import styled from "styled-components";
import 대표 from "자산들/로고.png";
import 어두운대표 from "자산들/다크로고.png";
import 사용주제갈고리 from "갈고리들/use주제";

const 로그인 = () => {
  const [, 현재주제] = 사용주제갈고리();
  return (
    <>
      <로그인테두리>
        <로고 src={현재주제 ? 어두운대표 : 대표} alt="김한울" />
        <로그인버튼테두리>
          <로그인아이템 href="#" 종류="구글">
            구글 로그인
          </로그인아이템>
          <로그인아이템 href="#" 종류="네이버">
            네이버 로그인
          </로그인아이템>
          <로그인아이템 href="#" 종류="카카오">
            카카오 로그인
          </로그인아이템>
        </로그인버튼테두리>
      </로그인테두리>
    </>
  );
};

export default 로그인;

const 회사이름에따른색갈 = (이름) => {
  switch (이름) {
    case "구글":
      return "#EEEEEE";
    case "카카오":
      return "#FAE34D";
    case "네이버":
      return "#5CCA6B";
  }
};

const 회사이름에따른폰트색갈 = (이름) => {
  switch (이름) {
    case "구글":
      return "#000000";
    case "카카오":
      return "#000000";
    case "네이버":
      return "#FFFFFF";
  }
};

const 로그인아이템 = styled.a`
  width: 370px;
  height: 66px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => 회사이름에따른폰트색갈(props.종류)};
  background-color: ${(props) => 회사이름에따른색갈(props.종류)};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.3s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const 로그인테두리 = styled.div`
  width: 400px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const 로그인버튼테두리 = styled.div`
  a {
    text-decoration: none;
    outline: none;
  }
  a:hover,
  a:active,
  :visited,
  :link {
    text-decoration: none;
  }
  width: 370px;
  height: 240px;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const 로고 = styled.img`
  width: 100px;
  height: 86px;
`;
