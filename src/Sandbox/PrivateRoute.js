import { useSelector } from "react-redux/es/hooks/useSelector";

const PrivateRoute = (props) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  if (isAuth) return <div>{props.children}</div>;
  return <div>Нет доступа</div>;
};

export default PrivateRoute;
