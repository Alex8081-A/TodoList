import { useSelector } from "react-redux/es/hooks/useSelector";
import { checkToken } from "./utils";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
export const useAuth = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (checkToken() === "secret-string") {
    dispatch(
      setUser({
        isAuth: true,
      })
    );
  } else if (checkToken() === "1") {
    dispatch(
      setUser({
        isAuth: true,
      })
    );
  } else {
    dispatch(
      setUser({
        isAuth: false,
      })
    );
  }
  console.log("1");
  return { isAuth };
};
