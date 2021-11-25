import { 사용자상태분자 } from "상태저장소/상태분자";
import { useRecoilState as 상태총괄갈고리 } from "recoil";
import { 기본_끝점 } from "구성들/구성";
import axios from "axios";

const use사용자목록갈고리 = () => {
  const [사용자들, 사용자들정의] = 상태총괄갈고리(사용자상태분자);

  const 유저목록받아오기 = async () => {
    try {
      const { data } = await axios.get(`${기본_끝점}/rooms`, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdW5nMDcyODgzNDZAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNzgzMjYxMSwiZXhwIjoxNjM3ODM5NTExfQ.l_hG7ScZD-XcfYnCw_RPKFeML9RjHOTJevOjg5gogpU`,
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(data);
      사용자들정의(data);
    } catch (e) {
      console.log(e);
    }
  };

  return [사용자들, 사용자들정의, 유저목록받아오기];
};

export default use사용자목록갈고리;
