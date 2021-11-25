import { 나의상태분자 } from "상태저장소/상태분자";
import { useRecoilState as 상태총괄갈고리 } from "recoil";
import { 기본_끝점 } from "구성들/구성";
import axios from "axios";

const use나의갈고리 = () => {
  const [나의상태, 나의상태갱신] = 상태총괄갈고리(나의상태분자);

  const 나의모든것받아오기 = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        const { data } = await axios.get(`${기본_끝점}/my`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(data);
        나의상태갱신(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const 욕설셈 = () => {
    return 나의상태.count;
  };

  return { 나의상태, 나의상태갱신, 나의모든것받아오기, 욕설셈 };
};

export default use나의갈고리;
