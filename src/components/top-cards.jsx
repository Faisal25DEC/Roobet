import React from "react";
import "./top-card.css";

const TopCards = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 pb-10">
      {/* First main div */}
      <div className="relative h-[160px] card">
        <div className="absolute w-full h-full card-1">
          <h1 className="text-white text-[40px] font-bold absolute bottom-2 left-2">
            Slotlar
          </h1>
        </div>
        <div className="absolute w-full h-full card-2"></div>
        <div className="absolute w-full h-full card-3"></div>
        <div className="absolute w-full h-full card-4"></div>
      </div>

      {/* Second main div */}
      <div className="relative h-[160px] card">
        <div className="absolute w-full h-full card-5">
          <h1 className="text-white text-[40px] font-bold absolute bottom-2 left-2">
            Cakilma Oyunlari
          </h1>
        </div>
        <div className="absolute w-full h-full card-6"></div>
        <div className="absolute w-full h-full card-7"></div>
        <div className="absolute w-full h-full card-8"></div>
      </div>

      {/* Third main div */}
      <div className="relative h-[160px] card">
        <div className="absolute w-full h-full card-9">
          <h1 className="text-white text-[40px] font-bold absolute bottom-2 left-2">
            Spor Bahisleri
          </h1>
        </div>
        <div className="absolute w-full h-full card-10"></div>
        <div className="absolute w-full h-full card-11"></div>
        <div className="absolute w-full h-full card-12"></div>
      </div>

      {/* Fourth main div */}
      <div className="relative h-[160px] card">
        <div className="absolute w-full h-full card-13">
          <h1 className="text-white text-[40px] font-bold absolute bottom-2 left-2">
            Canli Casino
          </h1>
        </div>
        <div className="absolute w-full h-full card-14"></div>
        <div className="absolute w-full h-full card-15"></div>
        <div className="absolute w-full h-full card-16"></div>
      </div>
    </div>
  );
};

export default TopCards;
