import useRouter from "../hooks/useRouter";

export default function Root() {
  const { push } = useRouter();
  return (
    <>
      About
      <button
        onClick={() => {
          push("/about");
        }}
      >
        about
      </button>
    </>
  );
}
