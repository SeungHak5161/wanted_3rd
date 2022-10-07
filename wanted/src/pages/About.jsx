import useRouter from "../hooks/useRouter";

export default function About() {
  const { push } = useRouter();
  return (
    <>
      About
      <button
        onClick={() => {
          push("/");
        }}
      >
        go to root
      </button>
    </>
  );
}
