import React from "react";
import Options from "./Options";

const Main = () => {
  const [id, setId] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [cluster, setCluster] = React.useState("X");
  const [history, setHistory] = React.useState([]);

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
                <p className="text-3xl font-medium">Predict Price</p>
                <div className="text-xl font-normal flex border-t-2 mt-1">
                  <p className="w-full font-medium ">Price </p>
                  <p className="w-full text-right">
                    $ {price.toString().substring(0, 6)}
                  </p>
                </div>
                <div className="text-xl font-normal flex">
                  <p className="w-full font-medium">Cluster </p>
                  <p className="w-full text-right">{cluster}</p>
                </div>
                <div className="font-normal mb-1 text-sm flex border-t-2 mt-1">
                  <p className="w-full ">Property Type</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[0].toString().substring(0, 6)
                      : null}
                  </p>
                </div>
                <div className="font-normal mb-1 text-sm flex">
                  <p className="w-full ">Lot Area</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[1].toString().substring(0, 6)
                      : null}{" "}
                    sq.ft
                  </p>
                </div>{" "}
                <div className="font-normal mb-1 text-sm flex">
                  <p className="w-full ">Overall Quality</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[2].toString().substring(0, 6)
                      : null}{" "}
                    /10
                  </p>
                </div>
                <div className="font-normal mb-1 text-sm flex">
                  <p className="w-full ">Overall Condition</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[3].toString().substring(0, 6)
                      : null}{" "}
                    /10
                  </p>
                </div>
                <div className="font-normal mb-1 text-sm flex">
                  <p className="w-full ">Year Build</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[4].toString().substring(0, 6)
                      : null}
                  </p>
                </div>{" "}
                <div className="font-normal mb-1 text-sm flex">
                  <p className="w-full ">Year Renovated</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[5].toString().substring(0, 6)
                      : null}
                  </p>
                </div>
                <div className="font-normal mb-1 text-sm flex">
                  <p className="w-full ">Central Air</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[6].toString() === "1"
                        ? "Yes"
                        : "No"
                      : null}{" "}
                  </p>
                </div>
                <div className="font-normal mb-1 text-sm flex">
                  <p className="w-full ">Bathrooms</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[7].toString().substring(0, 6)
                      : null}
                  </p>
                </div>{" "}
                <div className="font-normal mb-1 text-sm flex">
                  <p className="w-full ">Rooms</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[8].toString().substring(0, 6)
                      : null}
                  </p>
                </div>
                <div className="font-normal mb-1 text-sm flex">
                  <p className="w-full ">Garage Cars</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[9].toString().substring(0, 6)
                      : null}{" "}
                  </p>
                </div>
                <div className="font-normal mb-1 text-sm flex">
                  <p className="w-full ">Garage Area</p>
                  <p className="w-full text-right">
                    {" "}
                    {history.length === 11
                      ? history[10].toString().substring(0, 6)
                      : null}{" "}
                    sq.ft
                  </p>
                </div>{" "}
                <div className="w-full h-20 border-2 mt-4 rounded shadow-xl">
                  <button
                    onClick={() => window.location.reload(false)}
                    className="w-full h-full text-2xl font-extrathin hover:bg-white hover:text-gray-800"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-5/6 bg-gray-700">
          <Options setPrice={setPrice} setHistory={setHistory} />
        </div>
      </div>
    </div>
  );
};

export default Main;
