import { useSelector } from "react-redux/es/hooks/useSelector";
export const useAuth = () => {
  const { login, password } = useSelector((state) => state.user);
  return {
    isAuth: !!login,
    login,
    password,
  };
};
