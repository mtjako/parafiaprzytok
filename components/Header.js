export const Header = ({category,title,desc}) => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto py-8 sm:py-6 ">
        <div >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            {category}
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};
