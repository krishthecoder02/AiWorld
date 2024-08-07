import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants/constant";

import React from "react";

const PriceSection = () => {
  return (
    <div className="mt-20 mb-20 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center  tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap lg:mx-20 border-b border-neutral-700">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 mb-20 mt-10">
            <div className="p-10 border border-neutral-700 rounded-xl hover:bg-neutral-800 hover:p-12">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-2xl">
                    {" "}
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-4xl mt-6">{option.price} </span>
                <span>/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <div className="text-green-400">
                      <CheckCircle2 />
                    </div>
                    <span className="mx-2">{feature}</span>
                  </li>
                ))}
              </ul>
              
                <h3 className="text-center border p-2 mt-10 rounded-full hover:bg-orange-600 text-3xl">Subscribe</h3>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceSection;
