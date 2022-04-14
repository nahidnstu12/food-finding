export const LoadingItems = () => {
  return (
    <div className="grid grid-cols-3 gap-4 content-start px-4">
      {[...Array(6)].map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
};

const LoadingCard = () => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg m-2 ">
      <div className="w-full h-60 bg-gray-300 animate-pulse "></div>
      <div className=" py-4 items-center ">
        <div className="font-regular text-xl mb-2 w-full h-8 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
};
