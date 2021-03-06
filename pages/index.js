import Head from "next/head";
import { useEffect, useState } from "react";
import numeral from "numeral";
import { add, subtract, divide, multiply } from "mathjs";

export default function Home() {
  const [toggle, setToggle] = useState(0);

  const [firstvalue, setfirstvalue] = useState("");
  const [secondvalue, setsecondvalue] = useState("");
  const [result, setresult] = useState("");
  const [calculate, setcalculate] = useState(null);

  //color classes
  const [textColor, setTextColor] = useState("text-white");
  const [btnTextColor, setBtnTextColor] = useState("text-[#444b5a]");
  const [mainBgColor, setMainBgColor] = useState("bg-[#3a4764]");
  const [screeBgColor, setScreeBgColor] = useState("bg-[#182034]");
  const [keypadBgColor, setKeypadBgColor] = useState("bg-[#232c43]");
  const [switchBg, setSwitchBg] = useState("bg-[#232c43]");

  const onToggle = (e) => {
    //changing css classes based on toogle value
    {
      (toggle === 0 &&
        (setTextColor("text-black"),
        setSwitchBg("bg-[#d1cccc]"),
        setBtnTextColor("text-black"),
        setMainBgColor("bg-[#e6e6e6]"),
        setScreeBgColor("bg-[#ededed]"),
        setKeypadBgColor("bg-[#d1cccc]"))) ||
        (toggle === 1 &&
          (setTextColor("text-[#ffe53d]"),
          setSwitchBg("bg-[#341c4f]"),
          setBtnTextColor("text-[#ffe53d]"),
          setMainBgColor("bg-[#160628]"),
          setScreeBgColor("bg-[#1d0934]"),
          setKeypadBgColor("bg-[#1d0934]")));
    }

    //Incrimenting when we click on toggle
    if (toggle < 2) {
      setToggle(toggle + 1);
    } else {
      setToggle(0);
      setTextColor("text-white");
      setSwitchBg("bg-[#232c43]");
      setBtnTextColor("text-[#444b5a]");
      setMainBgColor("bg-[#3a4764]");
      setScreeBgColor("bg-[#182034]");
      setKeypadBgColor("bg-[#232c43]");
    }

    // console.log(toggle);
  };

  //Chacking toggle value and accordingly changing css classes
  const box = () => {
    if (toggle == 0) {
      return "boxa";
    }

    if (toggle == 1) {
      return "boxb";
    }

    if (toggle == 2) {
      return "boxc";
    }

    return "boxa";
  };

  const btn = () => {
    if (toggle == 0) {
      return "bg-[#eae3dc]";
    }

    if (toggle == 1) {
      return "bg-[#eae3dc]";
    }
    if (toggle == 2) {
      return "btn-Tthree";
    }
    return "bg-[#eae3dc]";
  };

  const btnClear = () => {
    if (toggle == 0) {
      return "bg-[#637097]";
    }

    if (toggle == 1) {
      return "btn-TtwoClear";
    }
    if (toggle == 2) {
      return "btn-TthreeClear";
    }
    return "bg-[#637097]";
  };

  const btnEqual = () => {
    if (toggle == 0) {
      return "bg-[#d03f2f] text-white";
    }

    if (toggle == 1) {
      return "bg-[#d03f2f] text-white";
    }
    if (toggle == 2) {
      return "btn-Tequal";
    }
    return "bg-[#d03f2f] text-white";
  };

  useEffect(() => {
    // used to taarget body element of html when load and add the css class
    document.body.classList.add(mainBgColor);

    return () => {
      // used to taarget body element of html when unload and remove the css class
      document.body.classList.remove(mainBgColor);
    };
  });

  const calc = (e) => {
    if (calculate === "add") {
      // const formatedResult = numeral(
      //   parseInt(firstvalue) + parseInt(secondvalue)
      // ).format("0,0");

      setresult(add(firstvalue, secondvalue));
      setfirstvalue("");
      setsecondvalue("");
      setcalculate(null);
    }

    if (calculate === "sub") {
      // const formatedResult = numeral(
      //   parseInt(firstvalue) - parseInt(secondvalue)
      // ).format("0,0");
      setresult(subtract(firstvalue, secondvalue));
      setfirstvalue("");
      setsecondvalue("");
      setcalculate(null);
    }

    if (calculate === "mul") {
      // const formatedResult = numeral(
      //   parseInt(firstvalue) * parseInt(secondvalue)
      // ).format("0,0");
      setresult(multiply(firstvalue, secondvalue));
      setfirstvalue("");
      setsecondvalue("");
      setcalculate(null);
    }

    if (calculate === "div") {
      // const formatedResult = numeral(
      //   parseInt(firstvalue) / parseInt(secondvalue)
      // ).format("0,0");
      setresult(divide(firstvalue, secondvalue));
      setfirstvalue("");
      setsecondvalue("");
      setcalculate(null);
    }
  };

  const del = () => {
    if (secondvalue !== "") {
      setsecondvalue(secondvalue.slice(0, -1));
    } else {
      setfirstvalue(firstvalue.slice(0, -1));
    }
  };

  const reset = () => {
    setresult("");
    setfirstvalue("");
    setsecondvalue("");
    setcalculate(null);
  };

  // console.log("first", firstvalue);
  // console.log("second", secondvalue);
  // console.log("calculate", calculate);
  // console.log(result);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={`max-w-[640px] sm:max-w-none h-[100vh] `}>
        <div className="sm:w-[500px] w-[375px] sm:container sm:mx-auto sm:py-40 container mx-auto py-10">
          <nav className={`navbar grid grid-cols-3 ${textColor}  pt-7 `}>
            <div className="font-black text-3xl pl-6">
              <h4 className="">calc</h4>
            </div>
            <div className="">
              <h5 className="font-semibold text-right text-xs pt-7 pr-5">
                THEME
              </h5>
            </div>
            <div className="">
              <h1 className="mx-2 font-extralight">
                <span className="mr-2"> 1</span> <span className="mr-2">2</span>{" "}
                3
              </h1>
              <div
                className={`switchbox ${switchBg}`}
                onClick={() => onToggle()}
              >
                <div className={`${box()}`}></div>
              </div>
            </div>
          </nav>

          {/* //screen */}
          <section
            className={`output_bar ${textColor} rounded-lg ${screeBgColor} p-5 m-5 sm:p-10 text-right font-black text-3xl `}
          >
            {result === ""
              ? !calculate
                ? numeral(firstvalue).format("0,0.[0000]")
                : numeral(secondvalue).format("0,0.[0000]")
              : numeral(result).format("0,0.[0000]")}
          </section>
          <section
            className={`input_bar  rounded-lg ${keypadBgColor} h-auto overflow-hidden m-5 `}
          >
            <div className="p-7">
              <div className="grid grid-cols-4 grid-rows-5 grid-flow-row gap-7 sm:gap-6 justify-items-center ">
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) => {
                    !calculate
                      ? setfirstvalue(firstvalue + 7)
                      : setsecondvalue(secondvalue + 7);
                  }}
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    7
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem]  ${btn()} rounded-md  box-border`}
                  onClick={(e) =>
                    !calculate
                      ? setfirstvalue(firstvalue + 8)
                      : setsecondvalue(secondvalue + 8)
                  }
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    8
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) =>
                    !calculate
                      ? setfirstvalue(firstvalue + 9)
                      : setsecondvalue(secondvalue + 9)
                  }
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    9
                  </h1>
                </button>
                <button
                  className={`keys-blue h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btnClear()}  rounded-md  box-border`}
                  onClick={(e) => del()}
                >
                  <h1 className={` text-white font-black text-md pt-2`}>DEL</h1>
                </button>

                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) =>
                    !calculate
                      ? setfirstvalue(firstvalue + 4)
                      : setsecondvalue(secondvalue + 4)
                  }
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    4
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) =>
                    !calculate
                      ? setfirstvalue(firstvalue + 5)
                      : setsecondvalue(secondvalue + 5)
                  }
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    5
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) =>
                    !calculate
                      ? setfirstvalue(firstvalue + 6)
                      : setsecondvalue(secondvalue + 6)
                  }
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    6
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) => {
                    if (result !== "") {
                      setfirstvalue(result);
                      setsecondvalue("");
                      setresult("");
                    }

                    setcalculate("add");
                  }}
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    +
                  </h1>
                </button>

                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) =>
                    !calculate
                      ? setfirstvalue(firstvalue + 1)
                      : setsecondvalue(secondvalue + 1)
                  }
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    1
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) =>
                    !calculate
                      ? setfirstvalue(firstvalue + 2)
                      : setsecondvalue(secondvalue + 2)
                  }
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    2
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) =>
                    !calculate
                      ? setfirstvalue(firstvalue + 3)
                      : setsecondvalue(secondvalue + 3)
                  }
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    3
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) => {
                    if (result !== "") {
                      setfirstvalue(result);
                      setsecondvalue("");
                      setresult("");
                    }

                    setcalculate("sub");
                  }}
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    -
                  </h1>
                </button>

                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) =>
                    !calculate
                      ? setfirstvalue(firstvalue + ".")
                      : setsecondvalue(secondvalue + ".")
                  }
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    .
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) =>
                    !calculate
                      ? setfirstvalue(firstvalue + 0)
                      : setsecondvalue(secondvalue + 0)
                  }
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    0
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) => {
                    if (result !== "") {
                      setfirstvalue(result);
                      setsecondvalue("");
                      setresult("");
                    }
                    setcalculate("div");
                  }}
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    /
                  </h1>
                </button>
                <button
                  className={`keys h-16 w-16 sm:h-14 sm:w-[5.5rem] ${btn()} rounded-md  box-border`}
                  onClick={(e) => {
                    if (result !== "") {
                      setfirstvalue(result);
                      setsecondvalue("");
                      setresult("");
                    }
                    setcalculate("mul");
                  }}
                >
                  <h1 className={` font-black ${btnTextColor} text-3xl pt-3`}>
                    x
                  </h1>
                </button>

                <button
                  className={`keys-blue h-16 w-[9rem] sm:h-14 sm:w-[12.5rem]  ${btnClear()} rounded-md  box-border col-span-2`}
                  onClick={(e) => reset()}
                >
                  <h1 className="  text-white font-black text-md pt-2">
                    RESET
                  </h1>
                </button>

                <button
                  className={`keys-orange h-16 w-[9rem] sm:h-14 sm:w-[12.5rem] ${btnEqual()} rounded-md  box-border col-span-2`}
                  onClick={(e) => {
                    if (!secondvalue) {
                      reset();
                    }

                    secondvalue && calc();
                  }}
                >
                  <h1 className="   font-black text-md pt-2"> = </h1>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
