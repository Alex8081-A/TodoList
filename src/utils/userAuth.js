import { useSelector } from "react-redux/es/hooks/useSelector";
import { checkToken } from "./utils";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
export const useAuth = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (checkToken()) {
    dispatch(
      setUser({
        isAuth: true,
      })
    );
  }
  return { isAuth };
};
