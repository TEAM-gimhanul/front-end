import { atom as 상태분자, atomFamily as 상태분자가족 } from "recoil";
import axios from "axios";
import { 기본_끝점 } from "구성들/구성";

export const 띄움창전역상태분자 = 상태분자({
  key: "띄움창전역상태분자",
  default: null,
});

export const 주소식별자상태분자 = 상태분자({
  key: "주소식별자상태분자",
  default: null,
});

export const 사용자상태분자 = 상태분자({
  key: "사용자상태분자",
  default: [],
});

const getContent = async (id) => {
  const { data } = await axios.get(`${기본_끝점}/content?room_id=${id}`, {
    headers: {
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbHp6aTExMDlAbmF2ZXIuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNzgzMTQ1NCwiZXhwIjoxNjM3ODM4MzU0fQ.DMOcVt1_SiYkWbTAosX-GAJa_UpW1ovb4t8qQyjzYLw",
    },
  });
  return data;
};

export const 담소상태분자 = 상태분자가족({
  key: "담소상태분자",
  default: async (id) => {
    const data = await getContent(id);
    return data;
  },
});
