import {
  swiperCards1,
  swiperCards2,
  swiperCards3,
  swiperCards4,
  swiperCards5,
  swiperCards6,
} from "./assets/data/swiper-cards-data";
import Navbar from "./components/navbar";
import SwiperCards from "./components/swiper-cards";
import TopBanner from "./components/top-banner";
import TopCards from "./components/top-cards";
import "./App.css";
import Footer from "./components/footer";
import Table from "./components/table";
function App() {
  return (
    <>
      <div className="overlay-bg h-[140vh] absolute w-full "></div>
      <div className="top-bg bg-image w-[100%] m-auto ">
        <Navbar />

        <div className=" relative pt-[15vh] h-[fit-content]  w-[97%] lg:w-[77.5%] m-auto ">
          <TopBanner />
          <TopCards />
        </div>
      </div>
      <div className="relative mid-bg">
        <div className="  w-[97%] lg:w-[77.5%] m-auto">
          <SwiperCards
            heading={"Popüler Oyunlar"}
            subHeading={"Hepsini Göster"}
            products={swiperCards1}
            id={1}
          />
          <SwiperCards
            heading={"Roobet Oyunları"}
            subHeading={" Hepsini Göster"}
            products={swiperCards2}
            id={2}
          />
          <SwiperCards
            heading={"Roo'nun Salonu"}
            subHeading={" Hepsini Göster"}
            products={swiperCards3}
            id={3}
          />
          <SwiperCards
            heading={"Roo'nun Salonu"}
            subHeading={" Hepsini Göster"}
            products={swiperCards4}
            id={4}
          />
          <SwiperCards
            heading={"Roo'nun Salonu"}
            subHeading={" Hepsini Göster"}
            products={swiperCards5}
            id={5}
          />
          <SwiperCards
            heading={"Roo'nun Salonu"}
            subHeading={" Hepsini Göster"}
            products={swiperCards6}
            id={6}
            last={true}
          />
        </div>
        <div className="py-8  w-[97%] lg:w-[77.5%] m-auto">
          <Table />
        </div>
      </div>

      <div className="relative footer-bg">
        <Footer />
      </div>
    </>
  );
}

export default App;
