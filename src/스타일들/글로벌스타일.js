import { createGlobalStyle as 글로벌스타일선언 } from "styled-components";
import { reset as 초기화 } from "styled-reset";

/**
 * @author every
 */
const 글로벌스타일 = 글로벌스타일선언`
    ${초기화};
`;

export default 글로벌스타일;
