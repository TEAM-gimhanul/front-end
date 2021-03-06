import { 사용자상태분자 } from "상태저장소/상태분자";
import { useRecoilState as 상태총괄갈고리 } from "recoil";
import 요청 from "잡동사니/요청";

const use사용자목록갈고리 = () => {
  const [사용자들, 사용자들정의] = 상태총괄갈고리(사용자상태분자);

  const 유저목록받아오기 = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        const { data } = await 요청.get("/rooms", {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(data);
        사용자들정의(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return [사용자들, 사용자들정의, 유저목록받아오기];
};

export default use사용자목록갈고리;
