import { useEffect, useRef } from "react";
import 소통구멍 from "socket.io-client";

const 소통구멍갈고리 = () => {
  const 소통구멍참조 = useRef();
  useEffect(() => {
    소통구멍참조.current = 소통구멍.connect(
      "https://eb8sspxdcc.execute-api.ap-northeast-2.amazonaws.com",
      {
        transports: ["websocket"],
      }
    );
  }, [소통구멍참조]);

  return 소통구멍참조.current;
};

export default 소통구멍갈고리;
