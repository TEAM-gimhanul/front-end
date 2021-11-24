import { createGlobalStyle as 전역꾸미기생성 } from "styled-components";
import { reset as 초기화 } from "styled-reset";

/**
 * @author every
 */
const 전역꾸미기 = 전역꾸미기생성`
    ${초기화};
    body {
        background-color: ${({ theme }) => theme.색깔들.white}
    } 
`;

export default 전역꾸미기;
