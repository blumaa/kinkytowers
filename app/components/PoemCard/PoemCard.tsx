const PoemCard = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className={`whitespace-pre-line p-4 `}>
      <div className="bg-gradient-to-r to-[#dde6ed] from-red-600 text-transparent bg-clip-text pb-4">
        {title}
      </div>
      {children}
    </div>
  );
};

export { PoemCard };
