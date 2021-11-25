import { useEffect, useRef } from "react";
import 소통구멍 from "socket.io-client";

const 소통구멍갈고리 = () => {
  const 소통구멍참조 = useRef();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      소통구멍참조.current = 소통구멍.connect("https://socket.xquare.app", {
        transports: ["websocket"],
        cors: {
          origin: "*",
        },
        query: {
          authorization: ``,
        },
      });
    }
  }, [소통구멍참조]);

  return 소통구멍참조;
};

export default 소통구멍갈고리;
