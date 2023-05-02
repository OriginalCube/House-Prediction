import React from "react";
import Requirement from "./Requirement.json";
import Typewriter from "typewriter-effect";

const Options = () => {
  const [id, setId] = React.useState(1);
  const [history, setHistory] = React.useState([]);
  const [textData, setTextData] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(textData);
    setId(id + 1);
    setHistory([...history]);
    setTextData("");
  };

  const AnyaInput = (ev) => (
    <div className="h-auto w-full">
      <div className=" bg-gray-600 p-5">
        <div className="w-2/3 m-auto flex item-baseline">
          <div style={{ width: "7%" }} className="h-2/3 mr-5 border-red-500">
            <img
              className="h-full w-full"
              src="./assets/images/anya-forger.gif"
              alt=""
            />
          </div>
          <div style={{ width: "93%" }} className="h-full font-medium">
            {id - 1 === ev.index && textData.length === 0 ? (
              <Typewriter
                options={{
                  strings: `${ev.question}`,
                  autoStart: true,
                  delay: 0.001,
                  loop: false,
                }}
              />
            ) : (
              <p>{ev.question}</p>
            )}
            <p className="text-sm opacity-80">{ev.label}</p>
          </div>
        </div>
      </div>
      {history[ev.index] !== "" ? (
        <div className="mt-2 p-5">
          <div className="w-2/3 m-auto flex item-baseline">
            <div style={{ width: "7%" }} className="h-2/3 mr-5 border-red-500">
              <img
                className="h-full w-full"
                src="./assets/images/bocchi-the-rock-bocchi.gif"
                alt=""
              />
            </div>
            <div style={{ width: "93%" }} className="h-full">
              <p className="mt-5 font-lightbold">{history[ev.index]}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="h-full w-full">
      <div className="h-5/6 overflow-hidden mt-10 pt-16 m-auto flex flex-col overflow-y-auto">
        {Requirement["Block"].slice(0, id).map((e, index) => (
          <AnyaInput
            index={index}
            key={index}
            question={e.question}
            label={e.label}
          />
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          required={true}
          className="font-lightbold outline-none shadow-md absolute opacity-90 rounded bg-gray-500 border-4 border-gray-600 p-2"
          style={{ width: "50%", left: "33%", bottom: "5%" }}
          value={textData}
          pattern="[0-9]+"
          placeholder="Input..."
          onChange={(e) => setTextData(e.target.value)}
        />{" "}
      </form>
    </div>
  );
};

export default Options;
