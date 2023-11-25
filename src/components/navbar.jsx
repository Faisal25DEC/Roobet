import React from "react";
import Logo from "../assets/logo.webp";
import { FaArrowDown, FaGlobe, FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import MobileLogo from "../assets/mobileLogo.png";

const Navbar = () => {
  return (
    <div className="z-[99999] bg-[#302a58] bg-opacity-95 w-full fixed h-14 md:h-24 border-b-[1px] border-b-[#373078]">
      <div className="hidden lg:flex w-full h-8 text-center bg-[#584cc5]  text-white  items-center justify-between px-60 ">
        <div className="flex items-center gap-2 font-semibold">
          <p>Promosyonlar</p>
          <p>Harberler</p>
        </div>
        <div className="flex items-center gap-5 font-semibold">
          <p>3,906,758,485 </p>
          <p>Oynanan Bahisler</p>
          <p className="flex items-center justify-center ">
            <FaGlobe />
            <RiArrowDropDownLine className="text-[34px]" />
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center md:py-0 py-2">
        <div className="w-[90%] lg:w-[77%] m-auto flex items-center justify-between">
          <div>
            <img src={Logo} alt="" className="h-14 hidden md:block" />
            <img
              src={MobileLogo}
              alt=""
              className="block md:hidden w-10 h-10"
            />
          </div>
          <div className="text-white  flex justify-center gap-6 items-center cursor-pointer">
            <p>
              <FaSearch className="w-4 h-4" />
            </p>
            <p className="hidden md:block text-white font-semibold text-[18px]">
              Ara
            </p>
            <button className="text-[#e6be4b] border-[#e6be4b] border-[1px] px-5 py-2 rounded-[7px] hover:border-[#eecf71] hover:bg-[#eecf71] hover:bg-opacity-5 tansition">
              Giriş
            </button>
            <button className="px-5 py-2 bg-[#e6be4b] rounded-[7px] text-black font-medium">
              Kayıt{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
