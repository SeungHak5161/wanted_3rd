import useRouter from "../hooks/useRouter";

export default function Root() {
  const { push } = useRouter();
  return (
    <>
      <div>Root</div>
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
