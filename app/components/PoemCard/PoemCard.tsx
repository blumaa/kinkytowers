const PoemCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-4 border-zinc-500 flex h-96 overflow-hidden">{children}</div>;
};

export { PoemCard };
