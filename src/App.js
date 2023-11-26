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
import FooterAccordion from "./components/footer-accordion";
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTelegram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
function App() {
  const headings = [
    "Casino",
    "Spor Bahisleri Politikası",
    "Policies",
    "Promos",
    "support",
    "topluluk",
  ];
  const contents = [
    <div className="text-[#7b6fbc] flex flex-col gap-[2px]">
      <p className="hover:text-white hover:underline">Roobet Oyunları</p>
      <p className="hover:text-white hover:underline">Slotlar</p>
      <p className="hover:text-white hover:underline">Canlı Casino</p>
      <p className="hover:text-white hover:underline">Popüler Oyunlar</p>
      <p className="hover:text-white hover:underline">Blackjack</p>
      <p className="hover:text-white hover:underline">Baccarat</p>
      <p className="hover:text-white hover:underline">Adillik</p>
    </div>,
    <div className="text-[#7b6fbc] flex flex-col gap-[2px]">
      <p className="hover:text-white hover:underline">ana Sayfa</p>
      <p className="hover:text-white hover:underline">Canlı</p>
      <p className="hover:text-white hover:underline">Futbol</p>
      <p className="hover:text-white hover:underline">Basketbol</p>
      <p className="hover:text-white hover:underline">Esporlar</p>
    </div>,
    <div className="text-[#7b6fbc] flex flex-col gap-[2px]">
      <p className="hover:text-white hover:underline">Kullanım Şartları</p>
      <p className="hover:text-white hover:underline">Gizlilik Politikası</p>
      <p className="hover:text-white hover:underline">
        Bonus ve PromosyonPolitikası
      </p>
      <p className="hover:text-white hover:underline">Spor Bahisleri</p>
      <p className="hover:text-white hover:underline">Oyun Politikası</p>
      <p className="hover:text-white hover:underline">KYC-AML-CFT Politikası</p>
      <p className="hover:text-white hover:underline">Sorumlu Oyunculuk</p>
    </div>,
    <div className="text-[#7b6fbc] flex py-2 flex-col gap-1">
      <p className="hover:text-white hover:underline">VIP Kulübü</p>
      <p className="hover:text-white hover:underline">Promosyonlar</p>
      <p className="hover:text-white hover:underline">Promosyonu Kullan</p>
      <p className="hover:text-white hover:underline">İş Ortaklığı Programı</p>
    </div>,
    <div className="text-[#7b6fbc] flex py-2 flex-col gap-1">
      <p className="hover:text-white hover:underline">Hakkımızda</p>
      <p className="hover:text-white hover:underline">Canlı Destek</p>
      <p className="hover:text-white hover:underline">Yardım Merkezi</p>
      <p className="hover:text-white hover:underline">
        Roobet Resmi İkiz Siteleri
      </p>
      <p className="hover:text-white hover:underline">Roo Sorumluluğu</p>
      <p className="hover:text-white hover:underline">Güvenlik Açığı İfşası</p>
    </div>,
    <div className="flex flex-col gap-6 py-4">
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
    </div>,
  ];
  return (
    <>
      <div className="overlay-bg h-[145vh] absolute w-full "></div>
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
        <div className="footer-bg block md:hidden">
          <FooterAccordion headings={headings} contents={contents} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
