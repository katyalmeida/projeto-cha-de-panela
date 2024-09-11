import { useNavigate } from "react-router-dom";

export function useNavigates() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  const toSecond = () => {
    navigate("/produtos");
  };

  return {
    toHome,
    toSecond,
  };
}
