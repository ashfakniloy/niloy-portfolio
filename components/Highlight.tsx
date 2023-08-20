function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-yellow-700 dark:text-yellow-300 font-bold">
      {children}
    </span>
  );
}

export default Highlight;
