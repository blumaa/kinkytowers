const PoemCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" border-zinc-400 rounded-lg flex overflow-scroll whitespace-pre-line shadow-md px-2 pb-4">
      {children}
    </div>
  );
};

export { PoemCard };
