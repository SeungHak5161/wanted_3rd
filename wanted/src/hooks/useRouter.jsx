const useRouter = () => {
  const push = (path) => {
    history.pushState({ page: path }, "", path);
  };
  return { push };
};

export default useRouter;
