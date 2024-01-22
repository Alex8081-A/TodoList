const PrivateRoute = (props) => {
  if (props.isAuth) return <div>{props.children}</div>;
  return <div>Нет доступа</div>;
};

export default PrivateRoute;
