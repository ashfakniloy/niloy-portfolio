function Buttonhamburger({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const hamburgerLine = `h-[3px] w-6 my-[2px] rounded-full bg-gray-800 dark:bg-gray-200 transition ease transform duration-300`;
  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center"
      aria-label="toggle"
      onClick={() => setToggle(!toggle)}
    >
      <div
        className={`${hamburgerLine} ${
          toggle ? "rotate-45 translate-y-[7px] " : ""
        }`}
      />
      <div className={`${hamburgerLine} ${toggle ? "opacity-0" : ""}`} />
      <div
        className={`${hamburgerLine} ${
          toggle ? "-rotate-45 -translate-y-[7px] " : ""
        }`}
      />
    </button>
  );
}

export default Buttonhamburger;
