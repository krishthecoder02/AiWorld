import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants/constant";
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  return (
    <div className="mt-20 lg:mb-20 border-b border-neutral-800 ">
      <h1 className="text-4xl sm:text-3xl lg:text-6xl text-center  ">
        Accelerate Your coding{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text font-medium">
          Workflow
        </span>
      </h1>
      <div className="flex flex-wrap justify-center lg:mt-11 mx-24 lg:mb-20">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="codeImg" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12 lg:mt-16 sm:mt-4">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div className="justify-center items-center ">
                <h5 className="mt-1 mb-2 text-xl ">{item.title}</h5>
                <p className="text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
