const DiagonalLines = () => {
  return (
    <div
      className="absolute top-0 right-0 h-full w-1/2 bg-gray-100 z-0 pointer-events-none"
      style={{
        clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
      }}
    />
  );
};

export default DiagonalLines;
