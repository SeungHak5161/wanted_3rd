import { useState, useEffect, useContext } from "react";
import { RouterContext } from "../components/Router";

const Route = ({ path, component }) => {
  const [isPath, setIsPath] = useState(false);
  const { pathname, setPathname } = useContext(RouterContext);
  useEffect(() => {
    path === pathname ? setIsPath(true) : setIsPath(false);

    window.onpopstate = () => setPathname(location.pathname);
    console.log(pathname);
  }, [pathname]);
  return isPath ? component : null;
};

export default Route;
