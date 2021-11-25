import { useEffect, useRef } from "react";
import 소통구멍 from "socket.io-client";
import { 기본_끝점 } from "구성들/구성";

const 소통구멍갈고리 = () => {
  const 소통구멍참조 = useRef();

  useEffect(() => {
    소통구멍참조.current = 소통구멍.connect("https://socket.xquare.app", {
      transports: ["websocket"],
      cors: {
        origin: "*",
      },
      query: {
        authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbHp6aTExMDlAbmF2ZXIuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNzgyMzcyNCwiZXhwIjoxNjM3ODMwNjI0fQ.jTDaoiX2VZ70YOEz4oZvjOnK9Y79Xhyqo032luoqrLg`,
      },
    });
  }, [소통구멍참조]);

  return 소통구멍참조;
};

export default 소통구멍갈고리;
