import React from "react";

const Main = () => {
  const DataCategory = ["Price", "Size", "Check Database"];

  const CategoryText = (ev) => (
    <p className="text-xl opacity-80 h-full w-full">{ev.name}</p>
  );

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex">
        <div className="h-full w-1/6 bg-gray-800 ">
          <div className="h-1/2 w-5/6 m-auto mt-16">
            <p className="text-2xl font-bold opacity-90">Prediction Setting</p>
            <div className="relative top-3 left-8 h-1/3 w-5/6 flex flex-col">
              {DataCategory.map((e, index) => (
                <CategoryText key={index} name={e} />
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-5/6 bg-gray-700"></div>
      </div>
    </div>
  );
};

export default Main;