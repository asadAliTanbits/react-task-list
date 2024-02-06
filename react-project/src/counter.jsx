import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const buttonClick = (operation) => {
    switch (operation) {
      case "decrease":
        setCount(count - 1);
        break;
      case "increase":
        setCount(count + 1);
        break;
      case "reset":
        setCount(0);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex text-center flex-col content-between  bg-slate-500 w-[500] h-[500px] m-20 p-10 text-white">
      <h2 className="">Counter App</h2>
      <p className="text-8xl font-extrabold">{count}</p>
      <div className="flex flex-row justify-center mt-10">
        <button
          className="btn decrease mx-1 py-4 px-8 text-lg border-2 rounded-md"
          onClick={() => buttonClick("decrease")}
        >
          Decrease
        </button>
        <button
          className="btn reset mx-1 py-4 px-8 text-lg border-2 rounded-md"
          onClick={() => buttonClick("reset")}
        >
          Reset
        </button>
        <button
          className="btn increase mx-1 py-4 px-8 text-lg border-2 rounded-md"
          onClick={() => buttonClick("increase")}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
