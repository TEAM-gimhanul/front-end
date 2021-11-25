import { atom as 상태분자 } from "recoil";

export const 띄움창전역상태분자 = 상태분자({
  key: "띄움창전역상태분자",
  default: null,
});

export const 사용자상태분자 = 상태분자({
  key: "사용자상태분자",
  default: [],
});
