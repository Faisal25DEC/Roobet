import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./swiper-cards.css";
import { useState } from "react";

export default function SwiperCards({
  heading,
  subHeading,
  products,
  id,
  last,
}) {
  const swiperId = `swiper-${heading.replace(/\s+/g, "-").toLowerCase()}`;
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  console.log(nextButtonDisabled);
  return (
    <div className="text-center text-white font-semibold text-[24px] h-[40vh]">
      <div className="container-box" id={`${heading}`}>
        <div className="">
          <div className="flex items-center justify-between py-6">
            <span className=" cursor-pointer font-semibold text-3xl text-left flex items-center gap-4">
              {heading}{" "}
              <span className="text-sm underline cursor-pointer text-gray-500">
                {subHeading}
              </span>
            </span>
            <div className="flex gap-6 items-center">
              <button
                className={`arrow-left-${id} arrow`}
                style={{ opacity: prevButtonDisabled ? 0.5 : 1 }}
              >
                <FaArrowLeft
                  color="
#e6be4b"
                  className="w-5 h-5"
                />
              </button>
              <button
                className={`arrow-right-${id} arrow`}
                style={{ opacity: nextButtonDisabled ? 0.5 : 1 }}
              >
                <FaArrowRight
                  color="
#e6be4b"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div id={`${heading}`} className="py-4">
            <Swiper
              id={swiperId}
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                  slidesPerGroup: 2,
                  delay: 1000,
                  spaceBetween: 10,
                },
                500: {
                  slidesPerView: 2.4,
                  slidesPerGroup: 3,
                  delay: 1000,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3.1,
                  slidesPerGroup: 3,
                  delay: 1000,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3.4,
                  slidesPerGroup: 3,
                  delay: 1000,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 6.6,
                  slidesPerGroup: 5,
                  delay: 1000,
                  spaceBetween: 50,
                },
              }}
              watchSlidesVisibility={true}
              navigation={{
                nextEl: `.arrow-right-${id}`,
                prevEl: `.arrow-left-${id}`,
              }}
              autoHeight={true}
              speed={1200}
              onSlideChange={() => {
                if (prevButtonDisabled) {
                  setPrevButtonDisabled(false);
                }
                if (nextButtonDisabled) {
                  setNextButtonDisabled(false);
                }
              }}
              onReachEnd={() => {
                setNextButtonDisabled(true);
              }}
              onReachBeginning={() => {
                setPrevButtonDisabled(true);
              }}
            >
              {products.map((product) => {
                return !last ? (
                  <SwiperSlide>
                    <div className=" w-[11rem] h-[11rem] bg-transparent  overflow-hidden flex flex-col gap-2">
                      <img
                        src={product.img}
                        alt=""
                        className="swiper-shadow rounded-lg w-[10.5rem] h-[9.5rem] object-cover"
                      />
                      <p className="cursor-pointer text-center text-gray-500 text-xs font-medium">
                        {product.text}
                      </p>
                    </div>
                  </SwiperSlide>
                ) : (
                  <SwiperSlide>
                    <div className="mb-2 w-[9rem] h-[6rem] bg-[#221f41]  overflow-hidden flex items-center justify-center rounded-[1rem] swiper-shadow hover:bg-[#0a0a15b1] transition duration-500 cursor-pointer">
                      <img
                        src={product.img}
                        alt=""
                        className=" max-w-[90%] max-h-[90%] object-cover"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
