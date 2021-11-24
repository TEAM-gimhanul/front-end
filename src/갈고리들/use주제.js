import { colors } from "@semicolondsm/design-token";
import { 주제상태 } from "저장소/주제저장소";
import 주제받기 from "잡동사니/주제받기";
import { useRecoilState as 상태총괄갈고리 } from "recoil";

const use주제 = () => {
  const [현재주제, 현재주제저장] = 상태총괄갈고리(주제상태);

  const 주제바꾸기 = () => {
    if (현재주제 === 1) {
      localStorage.setItem("주제", 0);
      현재주제저장(0);
      return;
    }

    localStorage.setItem("주제", 1);
    현재주제저장(1);
  };

  const 주제 = 주제받기() ? colors.dark.scheme : colors.light.scheme;

  return [주제, 현재주제, 주제바꾸기];
};

export default use주제;
