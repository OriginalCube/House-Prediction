import React from "react";
import Options from "./Options";

const Main = () => {
  const [id, setId] = React.useState(0);
  const [price, setPrice] = React.useState(0);

  const onChangeId = (ev) => {
    setId(ev);
    console.log(ev);
  };

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex">
        <div className="h-full w-1/6 bg-gray-800 ">
          <div className="h-1/2 w-5/6 m-auto mt-16">
            <p className="text-2xl font-bold opacity-90">Prediction Setting</p>
            <div className="relative top-3 left-8 h-1/3 w-5/6 flex flex-col">
              <div className="">
                <p className="text-3xl font-light">Predict Price</p>
                <div className="text-xl font-normal flex">
                  <p className="w-full">Price :</p>
                  <p className="w-full text-right">
                    $ {price.toString().substring(0, 6)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-5/6 bg-gray-700">
          <Options setPrice={setPrice} />
        </div>
      </div>
    </div>
  );
};

export default Main;
