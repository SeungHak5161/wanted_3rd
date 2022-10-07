import { createContext, useState, useContext } from "react";

const RouterContext = createContext();

const Router = ({ children }) => {
  const [pathname, setPathname] = useState(location.pathname);

  return (
    <RouterContext.Provider value={{ pathname, setPathname }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouterContext = () => {
  return useContext(RouterContext);
};

export default Router;
