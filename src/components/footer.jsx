import "./footer.css";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTelegram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import Bitcoin from "../assets/bitcoin.png";
import Tether from "../assets/tehter.png";
import USDCoind from "../assets/usd-coin.png";
import Ethereum from "../assets/ethereum.png";
import XRP from "../assets/xrp.png";
import Litecoin from "../assets/litecoin.png";
import Cash from "../assets/cash.png";

import FooterAwards1 from "../assets/footer-awards-1.png";
import FooterAwards2 from "../assets/footer-awards-2.png";
import FooterAwards3 from "../assets/footer-awards-3.png";

import FooterAwardsRight1 from "../assets/footer-awards-right-1.png";
import FooterAwardsRight2 from "../assets/footer-awards-right-2.png";

import FooterLast1 from "../assets/footer-last-1.png";
import FooterLast2 from "../assets/footer-last-2.png";
import FooterLast3 from "../assets/footer-last-3.png";
import FooterLast4 from "../assets/footer-last-4.png";
import FooterLast5 from "../assets/footer-last-5.png";
import FooterLast6 from "../assets/footer-last-6.png";

import FooterLogo from "../assets/logo-bg-rm.png";
const Footer = () => {
  const footerBlock = [
    {
      icon: Bitcoin,
      text: "Bitcoin (BTC)",
    },
    {
      icon: Tether,
      text: "Tether (USDT)",
    },
    {
      icon: USDCoind,
      text: "USD Coin (USDC)",
    },
    {
      icon: Ethereum,
      text: "Ethereum (ETH)",
    },
    {
      icon: XRP,
      text: "XRP (XRP)",
    },
    {
      icon: Litecoin,
      text: "Litecoin(LTC)",
    },
    {
      icon: Cash,
      text: "Cash",
    },
  ];

  const footerAwards = [
    {
      img: FooterAwards1,
    },
    {
      img: FooterAwards2,
    },
    {
      img: FooterAwards3,
    },
  ];

  const footerAwardsRight = [
    {
      img: FooterAwardsRight1,
    },
    {
      img: FooterAwardsRight2,
    },
  ];

  const footerLast = [
    {
      img: FooterLast1,
    },
    {
      img: FooterLast2,
    },
    {
      img: FooterLast3,
    },
    {
      img: FooterLast4,
    },
    {
      img: FooterLast5,
    },
    {
      img: FooterLast6,
    },
  ];
  return (
    <>
      <div className="py-6 px-6 w-full text-white lg:w-[75%] m-auto">
        <hr className="border-[1px] border-[#2d2d4f]" />
        <div className="hidden sc560:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-white py-6 gap-8 cursor-pointer">
          <div className="flex-2">
            <h1 className="font-semibold">Casino</h1>
            <div className="text-[#7b6fbc] flex flex-col gap-[2px] pt-2">
              <p className="hover:text-white hover:underline">
                Roobet Oyunları
              </p>
              <p className="hover:text-white hover:underline">Slotlar</p>
              <p className="hover:text-white hover:underline">Canlı Casino</p>
              <p className="hover:text-white hover:underline">
                Popüler Oyunlar
              </p>
              <p className="hover:text-white hover:underline">Blackjack</p>
              <p className="hover:text-white hover:underline">Baccarat</p>
              <p className="hover:text-white hover:underline">Adillik</p>
            </div>
          </div>
          <div className="flex-2">
            <h1 className="font-semibold">Spor Bahisleri Politikası</h1>
            <div className="text-[#7b6fbc] flex flex-col gap-[2px] pt-2">
              <p className="hover:text-white hover:underline">ana Sayfa</p>
              <p className="hover:text-white hover:underline">Canlı</p>
              <p className="hover:text-white hover:underline">Futbol</p>
              <p className="hover:text-white hover:underline">Basketbol</p>
              <p className="hover:text-white hover:underline">Esporlar</p>
            </div>
          </div>
          <div className="flex-2">
            <h1 className="font-semibold">Policies</h1>
            <div className="text-[#7b6fbc] flex flex-col gap-[2px] pt-2">
              <p className="hover:text-white hover:underline">
                Kullanım Şartları
              </p>
              <p className="hover:text-white hover:underline">
                Gizlilik Politikası
              </p>
              <p className="hover:text-white hover:underline">
                Bonus ve PromosyonPolitikası
              </p>
              <p className="hover:text-white hover:underline">Spor Bahisleri</p>
              <p className="hover:text-white hover:underline">
                Oyun Politikası
              </p>
              <p className="hover:text-white hover:underline">
                KYC-AML-CFT Politikası
              </p>
              <p className="hover:text-white hover:underline">
                Sorumlu Oyunculuk
              </p>
            </div>
          </div>
          <div className="flex-2">
            <h1 className="font-semibold">Promos</h1>
            <div className="text-[#7b6fbc] flex py-2 flex-col gap-1 pt-2">
              <p className="hover:text-white hover:underline">VIP Kulübü</p>
              <p className="hover:text-white hover:underline">Promosyonlar</p>
              <p className="hover:text-white hover:underline">
                Promosyonu Kullan
              </p>
              <p className="hover:text-white hover:underline">
                İş Ortaklığı Programı
              </p>
            </div>
          </div>
          <div className="flex-2">
            <h1 className="font-semibold">support</h1>
            <div className="text-[#7b6fbc] flex py-2 flex-col gap-1 pt-2">
              <p className="hover:text-white hover:underline">Hakkımızda</p>
              <p className="hover:text-white hover:underline">Canlı Destek</p>
              <p className="hover:text-white hover:underline">Yardım Merkezi</p>
              <p className="hover:text-white hover:underline">
                Roobet Resmi İkiz Siteleri
              </p>
              <p className="hover:text-white hover:underline">
                Roo Sorumluluğu
              </p>
              <p className="hover:text-white hover:underline">
                Güvenlik Açığı İfşası
              </p>
            </div>
          </div>
          <div className="flex-2">
            <h1 className="font-semibold">topluluk</h1>
            <div className="flex flex-col gap-6 py-4 pt-2">
              <div className="flex items-center gap-4">
                <FaTwitter className="w-9 h-9 text-[#9595b4]" />
                <FaFacebook className="w-9 h-9 text-[#9595b4]" />
                <FaInstagram className="w-9 h-9 text-[#9595b4]" />
              </div>
              <div className="flex items-center gap-4">
                <FaTwitch className="w-9 h-9 text-[#9595b4]" />
                <FaTelegram className="w-9 h-9 text-[#9595b4]" />
                <FaSpotify className="w-9 h-9 text-[#9595b4]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[75%] m-auto px-6 pt-12 pb-6">
        <h1 className="text-white font-semibold">Desteklenen Para Birimleri</h1>
        <div className="flex flex-wrap items-center gap-4 py-6">
          {footerBlock.map((item) => {
            return (
              <div className="rounded-md flex cursor-pointer items-center justify-center gap-2 bg-[#23233d] p-3">
                <img src={item.icon} className="w-4 h-4" alt="" />
                <p className="text-white text-sm font-medium">{item.text}</p>
              </div>
            );
          })}
        </div>

        <hr className="border-[1px] border-[#2d2d4f]" />
        <div className="footer-awards w-full flex justify-between items-start">
          <div className="flex-1.75">
            <h1 className="text-white font-semibold p-6">Ödüller</h1>
            <div className="flex items-center gap-4 flex-wrap">
              {footerAwards.map((item) => {
                return (
                  <div className="w-[12rem] h-30 flex p-4 items-center justify-center bg-[#23233d] rounded-lg hover:bg-[#2d2d4f] cursor-pointer">
                    <img src={item.img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="sm:text-center text-white maxSc360:text-left maxSc360:p-6  p-6 font-semibold">
              Lisanslar
            </h1>
            <div className="flex items-center gap-4 flex-wrap justify-center maxSc360:justify-start">
              {footerAwardsRight.map((item) => {
                return (
                  <div className="w-32 h-24   flex justify-center items-center bg-[#23233d] rounded-lg hover:bg-[#2d2d4f] cursor-pointer">
                    <img src={item.img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="pt-6 text-white font-semibold">Ortaklar</h1>
          <div className="flex items-center gap-4 flex-wrap  pb-12 pt-6">
            {footerLast.map((item) => {
              return (
                <div className="p-4 w-[8rem] h-20 flex justify-center items-center bg-[#1c1c39] rounded-lg hover:bg-[#2d2d4f] cursor-pointer">
                  <img src={item.img} alt="" className="w-full" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-2 justify-start items-start">
            <img src={FooterLogo} alt="" />
            <p className="text-[#9086c6] text-xs">
              Roobet.com is a brand name of Raw Entertainment B.V, Reg No
              157205, having its registered address at Korporaalweg 10, Curacao,
              licensed to conduct online gaming operations by the Government of
              Curacao under license 8048/JAZ. Raw Entertainment Ltd, Reg No
              HE421735, having its registered address at Voukourestiou, 25,
              Neptune House, 1st Floor, Flat/Office11, Zakaki, 3045, Limassol,
              Cyprus is a company of the Roobet group that acts as a paying and
              operational agent on behalf of Raw Entertainment B.V. 18+ to play.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
