import { atom as 상태분자, atomFamily as 상태분자가족 } from "recoil";
import 요청 from "잡동사니/요청";

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

export const 나의상태분자 = 상태분자({
  key: "나의상태분자",
  default: [],
});

const getContent = async id => {
  const token = localStorage.getItem("access_token");
  if (token) {
    const { data } = await 요청.get(`/content?room_id=${id}`, {
      headers: {
        authorization: token ? `Bearer ${token}` : null,
      },
    });
    return data;
  }
};

export const 담소상태분자 = 상태분자가족({
  key: "담소상태분자",
  default: async id => {
    const data = await getContent(id);
    return data;
  },
});
