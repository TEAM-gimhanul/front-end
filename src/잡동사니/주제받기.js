const 주제받기 = () => {
  const 모드 = localStorage.getItem("주제");
  if (typeof window !== "undefined" && 모드 === null) {
    const 기기주제 = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (기기주제) {
      return 1;
    }
    return 0;
  }

  const 주제 = Number(localStorage.getItem("주제"));

  if (주제 === 1) {
    return 1;
  }

  return 0;
};

export default 주제받기;
