import { atom as 상태 } from "recoil";
import 주제받기 from "잡동사니/주제받기";

export const 주제상태 = 상태({
  key: "주제상태",
  default: 주제받기(),
});
