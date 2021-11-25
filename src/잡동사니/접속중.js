const 접속중 = () => {
  const 랜덤 = Math.floor(Math.random() * 10) + 1;
  if (랜덤 % 2) {
    return 0;
  }
  return 1;
};

export default 접속중;
