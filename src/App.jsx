import { useEffect, useState } from "react";
import { dice, patternDividerDesktop, patternDividerMobile } from "./assets";
import axios from "axios";
import { toast } from "react-toastify";
import { toastConfig } from "./config";

const App = () => {
  const [advice, setAdvice] = useState({});

  const generateAdvice = async () => {
    const { data: res } = await axios.get("https://api.adviceslip.com/advice");
    const { slip } = res;

    setAdvice(slip);
  };

  const generateAdviceFromButton = async () => {
    const toastLoading = toast.loading("Generating quote", toastConfig);

    await generateAdvice();

    toast.update(toastLoading, {
      render: "Quote generated!",
      type: "success",
      isLoading: false,
      ...toastConfig 
    });
  };

  useEffect(() => {
    generateAdvice();
  }, []);

  return (
    <div className="relative max-w-[550px] lg:w-full w-[90%] m-auto rounded-xl bg-dark-grayish-blue lg:py-14 py-10 lg:px-14 px-8">
      <h1 className="text-center text-[12px] tracking-[.3rem] text-neon-green font-semibold uppercase">
        advice #{advice.id}
      </h1>
      <p className="mt-5 lg:text-[28px] text-[24px] lg:leading-10 leading-8 tracking-wide text-light-cyan text-center">
        &quot;{advice.advice}&quot;
      </p>
      <div className="mt-8 mb-2 flex justify-center">
        <img
          className="lg:block hidden"
          src={patternDividerDesktop}
          alt="Pattern Divider Desktop"
        />
        <img
          className="lg:hidden block"
          src={patternDividerMobile}
          alt="Pattern Divider Mobile"
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <button
          onClick={generateAdviceFromButton}
          className="lg:mt-6 mt-2 bg-neon-green p-5 rounded-full ease-in-out duration-300 neon-shadow"
          title="Generate new quote"
        >
          <img src={dice} width={24} height={24} alt="Generate" className="lg:block hidden" />
          <img src={dice} width={18} height={18} alt="Generate" className="lg:hidden block" />
        </button>
      </div>
    </div>
  );
};

export default App;
