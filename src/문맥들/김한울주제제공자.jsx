import { ThemeProvider as 주제제공자 } from "styled-components";
import 사용주제갈고리 from "갈고리들/use주제";

const 김한울주제제공자 = ({ children }) => {
  const [주제] = 사용주제갈고리();
  return <주제제공자 theme={{ 색깔들: 주제 }}>{children}</주제제공자>;
};

export default 김한울주제제공자;
