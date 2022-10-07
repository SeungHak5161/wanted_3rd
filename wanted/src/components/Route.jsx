import { useEffect, useContext } from "react";
import { useRouterContext } from "./Router";

const Route = ({ component }) => {
  const { pathname, setPathname } = useRouterContext();
  useEffect(() => {
    window.onpopstate = () => setPathname(location.pathname);
  }, [pathname]);
  return <>{component}</>;
};

export default Route;
