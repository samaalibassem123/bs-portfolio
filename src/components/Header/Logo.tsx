import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => navigate("/")}
      className=" cursor-pointer  hover:scale-105 transition-all"
      src="/logo.svg"
      alt="LOGO"
    />
  );
}
