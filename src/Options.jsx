import React from "react";
import Requirement from "./Requirement.json";
import Typewriter from "typewriter-effect";

const Options = (props) => {
  const mainScroll = React.useRef();
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

  const PricePrediction = (e) => {
    let total = 0;
    total =
      -156.447 * e[0] +
      0.9884 * e[1] +
      27813.9149 * [2] +
      3241.3418 * e[3] +
      291.5121 * e[4] +
      188.8234 * e[5] +
      4780.9532 * e[6] +
      10219.6727 * e[7] +
      5794.3604 * e[8] +
      46.2344 * e[9] -
      1064930.6952;
    return total;
  };

  React.useEffect(() => {
    if (history.length === 11) {
      props.setPrice(PricePrediction(history));
    }
    props.setHistory(history);
  }, [history]);

  React.useEffect(() => {
    mainScroll.current.scrollTop = mainScroll.current.scrollHeight;
  }, [id]);

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
              <div className="text-xl mb-1">
                <Typewriter
                  options={{
                    strings: `${ev.question}`,
                    autoStart: true,
                    delay: 0.001,
                    loop: false,
                  }}
                />
              </div>
            ) : (
              <p className="text-xl mb-1">{ev.question}</p>
            )}
            {ev.image ? (
              <div className="h-auto w-full">
                <img className="h-auto w-full" src={`${ev.image}`} alt="" />
              </div>
            ) : null}
            <p className="text-sm opacity-80 font-normal">{ev.label}</p>
          </div>
        </div>
      </div>
      {id - 1 !== ev.index ? (
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
              <p className="mt-5 font-medium">{history[ev.index]}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="h-full w-full">
      <div
        ref={mainScroll}
        className="h-5/6 overflow-hidden mt-10 pt-16 m-auto flex flex-col overflow-y-auto"
      >
        {Requirement["Price"].slice(0, id).map((e, index) => (
          <AnyaInput
            index={index}
            key={index}
            image={e.img}
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
