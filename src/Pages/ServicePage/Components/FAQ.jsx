import { useState } from "react";
import { FaqData } from "../data/FAQData";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container sm:px-[5%] mx-auto">
      <div className="sm:py-[100px] py-[50px] text-center text-[19px] sm:text-[32px] md:text-[48px] font-bold">
        <h4>Frequently Asked <span className="text-blue-500">Questions</span> </h4>
      </div>    
    <div className="max-w-2xl mx-auto space-y-3 px-[20px] sm:px-[0px]">
      {FaqData.map((item, index) => (
        <div
          key={item.id}
          className="border rounded-lg overflow-hidden border-blue-500"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
          >
            {item.Questions}
            <span>{openIndex === index ? "︿" : "﹀"}</span>
          </button>

          {openIndex === index && (
            <div className="px-4 py-3 text-gray-600">
              {item.answers}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
