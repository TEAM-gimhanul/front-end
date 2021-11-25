import { useParams, useNavigate, useLocation } from "react-router";
import axios from "axios";
import { 기본_끝점 } from "구성들/구성";
import { useEffect } from "react";

const 콜백 = () => {
  const { type } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const getToken = async (code) => {
    const { data } = await axios.post(`${기본_끝점}/users/${type}`, {
      code: code,
    });
    return data;
  };
  useEffect(() => {
    const query = new URLSearchParams(search);
    getToken(query.get("code")).then((res) => {
      localStorage.setItem("access_token", res.accessToken);
      navigate("/");
      location.reload();
    });
  }, [type]);
  return <div></div>;
};

export default 콜백;
