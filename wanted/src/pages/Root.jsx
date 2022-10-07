export default function Root() {
  return (
    <>
      Root
      <button
        onClick={() => {
          history.pushState({ page: "about" }, "about", "about");
          console.log(history);
        }}
      >
        about
      </button>
    </>
  );
}
