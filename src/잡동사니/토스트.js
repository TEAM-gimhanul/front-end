import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const 토스트보여주기 = (내용, 종류) => {
  switch (종류) {
    case "성공":
      toast.success(내용, { position: toast.POSITION.TOP_RIGHT });
      break;
    case "실패":
      toast.error(내용, { position: toast.POSITION.TOP_RIGHT });
      break;
    case "정보":
      toast.info(내용, { position: toast.POSITION.TOP_RIGHT });
      break;
    default:
      toast(내용, { position: toast.POSITION.TOP_RIGHT });
      break;
  }
};
class 토스트 {
  static 성공(내용) {
    토스트보여주기(내용, "성공");
  }
  static 실패(내용) {
    토스트보여주기(내용, "실패");
  }
  static 정보(내용) {
    토스트보여주기(내용, "정보");
  }
}

export default 토스트;
