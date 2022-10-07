export default function About() {
  return (
    <>
      About
      <button
        onClick={() => {
          history.pushState({ page: "root" }, "root", "/");
          console.log(history);
        }}
      >
        root
      </button>
    </>
  );
}
