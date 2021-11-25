import { useEffect, useRef } from "react";
import 소통구멍 from "socket.io-client";
import { 기본_끝점 } from "구성들/구성";

const 소통구멍갈고리 = () => {
  const 소통구멍참조 = useRef();
  useEffect(() => {
    소통구멍참조.current = 소통구멍.connect(기본_끝점, {
      transports: ["websocket"],
    });
  }, [소통구멍참조]);

  return 소통구멍참조.current;
};

export default 소통구멍갈고리;
