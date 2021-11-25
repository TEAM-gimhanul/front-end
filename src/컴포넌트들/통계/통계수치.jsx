import 꾸미기 from "styled-components";

export const 막대보자기 = 꾸미기.div`
width:100%;
height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;
margin-right: -70vh;
@media screen and (max-width: 700px) {
  margin: 0;
  margin-right: 8.5vh;
}
`;
export const 막대1 = 꾸미기.div`
margin-left: 15vh;
  width: 30vw;
  height: 6%;
  background-color: #5133E6;
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
@media screen and (max-width: 700px) {
  margin-right: -15vh;
  width: 50vw;
  height: 5vh;
}
`;
export const 막대2 = 꾸미기.div`
@media screen and (max-width: 700px) {
  margin-top: 3vh;
  width: 50vw;
  height: 3vh;
}
margin-top: 15vh;
  margin-left: 15vh;
  width: 30vw;
  height: 5%;
  background-color: pink;
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const 막대3 = 꾸미기.div`
@media screen and (max-width: 700px) {
  margin-top: 1vh;
  width: 30vw;
  height: 3vh;
}
margin-left: 15vh;
margin-top: 3vh;
  width: 20vw;
  height: 5%;
  background-color: pink;
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const 막대4 = 꾸미기.div`
@media screen and (max-width: 700px) {
  margin-top: 1vh;
  width: 20vw;
  height: 3vh;
}
margin-left: 15vh;
margin-top: 3vh;
  width: 9vw;
  height: 5%;
  background-color: pink;
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;