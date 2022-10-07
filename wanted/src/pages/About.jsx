import useRouter from "../hooks/useRouter";

export default function About() {
  const { push } = useRouter();
  return (
    <>
      <div>About</div>
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
