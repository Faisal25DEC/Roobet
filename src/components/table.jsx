import React, { useEffect, useState } from "react";
import {
  currencies,
  generateRandomArray,
  getCurrentTimeAMPM,
  randomArrays,
} from "../assets/data/table-data";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let id = setInterval(() => {
      const randomArrays = Array.from({ length: 13 }, generateRandomArray);
      randomArrays.unshift([
        "OYUN",
        "KULLANICI",
        "ZAMAN",
        "BAHIS",
        "COKLU",
        "ODEME",
      ]);
      setData(randomArrays);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className={`rounded-xl flex flex-col text-white overflow-hidden`}>
      {data.map((item, index) => {
        return (
          <div
            className={`px-4 py-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ${
              index !== 0 && "text-sm"
            } ${index % 2 === 0 ? "bg-[#3c396f]" : "bg-[#2d2954]"} ${
              index === 0 && "bg-[#3b3678]"
            }`}
          >
            <div>
              <p className={`${index === 0 && "font-bold"} `}>{item[0]}</p>
            </div>
            <div className="hidden md:flex">
              <p
                className={`text-center md:text-left ${
                  index === 0 && "font-bold"
                } ${index === 0 && "ml-[1rem]"} ${
                  item[1] === "Hidden" && "text-neutral-400"
                } `}
              >
                {item[1]}
              </p>
            </div>
            <div className="hidden lg:block">
              <p
                className={`${index === 0 && "font-bold"} 
                
                 ${index !== 0 && "text-gray-400"}`}
              >
                {item[2] === "" ? getCurrentTimeAMPM() : item[2]}
              </p>
            </div>
            <div className="hidden gap-2 items-center lg:flex">
              <p
                className={`${index === 0 && "font-bold"} ${
                  index === 0 && "ml-[1rem]"
                }`}
              >
                {item[3].split(" ")[0]}
              </p>
              {index !== 0 && (
                <img className="w-4 h-4" src={item[3].split(" ")[1]} alt="" />
              )}
            </div>
            <div className="hidden lg:flex">
              <p
                className={`${index === 0 && "font-bold"} ${
                  index === 0 && "ml-[1rem]"
                }`}
              >
                {item[4]}
              </p>
            </div>
            <div className="flex gap-1">
              <p
                className={` ml-auto ${index === 0 && "font-bold"} ${
                  index === 0 && "ml-[1rem]"
                }`}
              >
                {item[5]}
              </p>
              {index !== 0 && (
                <img
                  className="w-4 h-4"
                  src={currencies[Math.floor(Math.random() * 4)]}
                  alt=""
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
