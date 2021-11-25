import { useEffect, useRef } from "react";
import 소통구멍 from "socket.io-client";

const 소통구멍갈고리 = () => {
  const 소통구멍참조 = useRef();

  useEffect(() => {
    소통구멍참조.current = 소통구멍.connect("https://socket.xquare.app", {
      transports: ["websocket"],
      cors: {
        origin: "*",
      },
      query: {
        authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbHp6aTExMDlAbmF2ZXIuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNzgzMzMwOCwiZXhwIjoxNjM3ODQwMjA4fQ.VS22-Dc_6axwV0QQmRl58_c2y_ORmxe7PDo1xt63w3g`,
      },
    });
  }, [소통구멍참조]);

  return 소통구멍참조;
};

export default 소통구멍갈고리;
