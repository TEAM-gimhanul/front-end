// import { styled as 스타일 } from "styled-components";
import { Avatar } from "@channel.io/bezier-react";

// const 사람테두리 = 스타일.div``;
// const 내용테두리 = 스타일.div``;
// const 글테두리 = 스타일.div``;
// const 프로필 = 스타일.img``;
// const 제목 = 스타일.div``;
// const 내용 = 스타일.div``;
// const 시간 = 스타일.div``;

const 사람 = () => {
  return (
    // <사람테두리>
    //   <Avatar />
    //   <프로필 />
    //   <내용테두리>
    //     <제목>2학년 4반</제목>
    //     <내용테두리>
    //       <내용>안녕하세요~~~</내용>
    //       <시간>30분</시간>
    //     </내용테두리>
    //   </내용테두리>
    // </사람테두리>
    <Avatar
      size={36}
      status="Online"
      avatarUrl="https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png"
      name="Channel"
      showBorder={false}
      disabled={false}
    />
  );
};
export default 사람;
