import React from "react";

const OffPlan = () => {
  return (
    <div className="px-[60px]">
      <div className="flex flex-wrap items-end justify-between py-10">
        {/* Left Section */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold uppercase text-[#faf8f7]">
            <span>Off Plan</span>
          </h2>
          <h3 className="mt-4 text-lg text-[#6f7672]">
            Find a home that suits your lifestyle
          </h3>
        </div>

        {/* Right Section */}
        <div>
          <a
            href="/Projects/Off-Plan"
            className="inline-block text-sm font-normal uppercase relative text-[#faf8f7] after:content-[''] after:absolute after:bottom-[-5px] after:right-0 after:w-0 after:h-[1px] after:bg-[#faf8f7] after:transition-all after:duration-500 hover:after:w-full"
          >
            Find a home that suits your lifestyle
          </a>
        </div>
      </div>
    </div>
  );
};

export default OffPlan;