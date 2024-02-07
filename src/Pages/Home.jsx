import React from "react";
import img1 from "../assets/img/img1.svg";
import foto1 from "../assets/img/Photo.svg";
import foto2 from "../assets/img/Photo2.svg";
import foto5 from "../assets/img/Photo3.svg";
import foto6 from "../assets/img/Large.svg";
import img2 from "../assets/img/Image.svg";
import img3 from "../assets/img/So.svg";
import foto3 from "../assets/img/Photo (1).svg";
import foto4 from "../assets/img/Photo (2).svg";
import Local from "@mui/icons-material/LocalShippingOutlined";
import Check from "@mui/icons-material/CheckCircleOutline";
import Cred from "@mui/icons-material/CreditCardOutlined";
import Spa from "@mui/icons-material/SpaOutlined";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div className="bg-[#FFF] dark:bg-[#0b091a] dark:text-[#d9d5fa]">
      <div className="px-[5%] py-[50px] md:px-[0px] md:py-[0px]">
        <div className="w-[100%] bg-[#2A254B] dark:bg-[#14112d] dark:text-[#d9d5fa] flex justify-between items-start">
          <div className="text-white w-[60%] p-[50px] md:p-[20px] md:w-[100%]">
            <h1 className="text-[35px] md:text-[41px] ">
              The furniture brand for the future, with timeless designs
            </h1>
            <button className="px-[28px] md:hidden py-[10px] mt-[30px] bg-[#F9F9F926]">
              View collection
            </button>
            <h1 className="mt-[28vh] text-[17px] md:text-[23px]">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </h1>
            <button className="px-[28px] hidden md:block md:w-[100%] py-[10px] mt-[30px] bg-[#F9F9F926]">
              View collection
            </button>
          </div>
          <img src={img1} alt="" className="w-[40%] md:hidden" />
        </div>
      </div>

      <div className="px-[5%] py-[50px] ">
        <h1 className="text-[30px] dark:bg-[#0b091a] dark:text-[#d9d5fa] text-[#2A254B] text-center md:text-start">
          What makes our brand different
        </h1>
        <div className="flex justify-between  items-start mt-[40px] md:flex-col md:gap-[40px_0]">
          <div className="w-[23%] md:w-[100%] dark:bg-[#0b091a] dark:text-[#d9d5fa] text-[#2A254B]">
            <Local />
            <h1 className="text-[20px] my-[10px]">Next day as standard</h1>
            <h1 className="text-[15px]">
              Order before 3pm and get your order the next day as standard
            </h1>
          </div>
          <div className="w-[23%] dark:bg-[#0b091a] dark:text-[#d9d5fa] md:w-[100%] text-[#2A254B]">
            <Check />
            <h1 className="text-[20px] my-[10px]">Made by true artisans</h1>
            <h1 className="text-[15px]">
              Handmade crafted goods made with real passion and craftmanship
            </h1>
          </div>
          <div className="w-[23%] dark:bg-[#0b091a] dark:text-[#d9d5fa] md:w-[100%] text-[#2A254B]">
            <Cred />
            <h1 className="text-[20px] my-[10px]">Unbeatable prices</h1>
            <h1 className="text-[15px]">
              For our materials and quality you won’t find better prices
              anywhere
            </h1>
          </div>
          <div className="w-[23%] dark:bg-[#0b091a] dark:text-[#d9d5fa] md:w-[100%] text-[#2A254B]">
            <Spa />
            <h1 className="text-[20px] my-[10px]">Recycled packaging</h1>
            <h1 className="text-[15px]">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </h1>
          </div>
        </div>
      </div>

      <div className="px-[5%] py-[80px]">
        <h1 className="text-[30px] text-[#2A254B] dark:bg-[#0b091a] dark:text-[#d9d5fa]">New ceramics</h1>

        <div className="flex justify-between items-start my-[20px] md:flex-wrap md:gap-[20px_0]">
          <div className="w-[24%] dark:bg-[#0b091a] dark:text-[#d9d5fa] md:w-[49%] text-[#2A254B] text-[19px]">
            <img src={foto2} alt="" className="w-[100%]" />
            <h1 className="my-[5px] mt-[20px]">The Dandy chair</h1>
            <h1>£250</h1>
          </div>
          <div className="w-[24%] dark:bg-[#0b091a] dark:text-[#d9d5fa] md:w-[49%] text-[#2A254B] text-[19px]">
            <img src={foto1} alt="" className="w-[100%]" />
            <h1 className="my-[5px] mt-[20px]">Rustic Vase Set</h1>
            <h1>£155</h1>
          </div>
          <div className="w-[24%] dark:bg-[#0b091a] dark:text-[#d9d5fa] md:w-[49%] text-[#2A254B] text-[19px]">
            <img src={foto3} alt="" className="w-[100%]" />
            <h1 className="my-[5px] mt-[20px]">The Silky Vase</h1>
            <h1>£125</h1>
          </div>
          <div className="w-[24%] dark:bg-[#0b091a] dark:text-[#d9d5fa] md:w-[49%] text-[#2A254B] text-[19px]">
            <img src={foto4} alt="" className="w-[100%]" />
            <h1 className="my-[5px] mt-[20px]">The Lucy Lamp</h1>
            <h1>£399</h1>
          </div>
        </div>
        <div className="text-center">
          <button className="px-[28px] dark:bg-[#191537] dark:text-[#d9d5fa] md:w-[100%] py-[10px] mt-[30px] bg-[#F9F9F9]">
            View collection
          </button>
        </div>
      </div>

      <div className="px-[5%] py-[80px]">
        <h1 className="text-[30px] text-[#2A254B] dark:bg-[#0b091a] dark:text-[#d9d5fa]">Our popular products</h1>

        <div className="hidden dark:bg-[#0b091a] dark:text-[#d9d5fa] md:block mt-[30px]">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-[100%] text-[#2A254B] text-[19px]">
                <img src={foto2} alt="" className="w-[100%]" />
                <h1 className="my-[5px] mt-[20px]">The Dandy chair</h1>
                <h1>£250</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] text-[#2A254B] text-[19px]">
                <img src={foto5} alt="" className="w-[100%]" />
                <h1 className="my-[5px] mt-[20px]">The Dandy chair</h1>
                <h1>£250</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] text-[#2A254B] text-[19px]">
                <img src={foto5} alt="" className="w-[100%]" />
                <h1 className="my-[5px] mt-[20px]">The Dandy chair</h1>
                <h1>£250</h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex justify-between items-start my-[20px] md:hidden">
          <div className="w-[49.5%] dark:bg-[#0b091a] dark:text-[#d9d5fa] text-[#2A254B] text-[19px]">
            <img src={foto6} alt="" className="w-[100%]" />
            <h1 className="my-[5px] mt-[20px]">The Poplar suede sofa</h1>
            <h1>£980</h1>
          </div>
          <div className="w-[24%] dark:bg-[#0b091a] dark:text-[#d9d5fa] text-[#2A254B] text-[19px]">
            <img src={foto2} alt="" className="w-[100%]" />
            <h1 className="my-[5px] mt-[20px]">The Dandy chair</h1>
            <h1>£250</h1>
          </div>
          <div className="w-[24%] dark:bg-[#0b091a] dark:text-[#d9d5fa] text-[#2A254B] text-[19px]">
            <img src={foto5} alt="" className="w-[100%]" />
            <h1 className="my-[5px] mt-[20px]">The Dandy chair</h1>
            <h1>£250</h1>
          </div>
        </div>
        <div className="text-center">
          <button className="px-[28px] dark:bg-[#1f1a47] dark:text-[#d9d5fa] md:w-[100%] py-[10px] mt-[30px] bg-[#F9F9F9]">
            View collection
          </button>
        </div>
      </div>

      <div className="px-[7%] py-[40px] bg-[#F9F9F9] dark:bg-[#171434] dark:text-[#d9d5fa] md:px-[0px] md:py-[0px]">
        <div className="bg-[#FFF] dark:bg-[#0b091a] dark:text-[#d9d5fa] text-center md:text-start md:px-[20px] text-[#2A254B] py-[60px]">
          <h1 className="text-[36px] md:text-[26px]">Join the club and get the benefits</h1>
          <h1 className="my-[10px]">
            Sign up for our newsletter and receive exclusive offers on new{" "}
            <br /> ranges, sales, pop up stores and more
          </h1>
          <div>
            <input
              type="text"
              className="bg-[#F9F9F9] py-[10px] px-[15px] w-[350px] md:w-[280px]"
              placeholder="your@email.com"
            />
            <button className="px-[28px] py-[10px] text-white mt-[30px] bg-[#2A254B]">
            Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-between items-start md:flex-col">
        <div className="w-[50%] p-[50px] md:w-[100%] md:p-[20px] dark:bg-[#0b091a] dark:text-[#d9d5fa]">
          <h1 className="text-[25px]">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <h1 className="text-[17px] mt-[30px]">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market. <br />{" "}
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </h1>
          <button className="px-[28px] dark:bg-[#1f1b43] dark:text-[#d9d5fa] md:w-[100%] md:mt-[10vh] py-[10px] mt-[21vh] bg-[#F9F9F9]">
            Get in touch
          </button>
        </div>
        <img src={img2} alt="" className="w-[50%] md:w-[100%]" />
      </div>

      <div className="px-[5%] text-[#FFF] bg-[#2A254B] dark:bg-[#100e23] dark:text-[#d9d5fa]">
        <div className="flex justify-between items-start md:flex-wrap  py-[50px] ">
          <div className="flex flex-col gap-3 md:w-[50%]">
            <h1 className="text-[20px]">Menu</h1>
            <h1>New arrivals</h1>
            <h1>Best sellers</h1>
            <h1>Recently viewed</h1>
            <h1>Popular this week</h1>
            <h1>All products</h1>
          </div>
          <div className="flex flex-col gap-3 md:w-[50%]">
            <h1 className="text-[20px]">Categories</h1>
            <h1>Crockery</h1>
            <h1>Furniture</h1>
            <h1>Homeware</h1>
            <h1>Plant pots</h1>
            <h1>Chairs</h1>
            <h1>Crockery</h1>
          </div>
          <div className="flex flex-col gap-3 md:my-[30px]">
            <h1 className="text-[20px]">Our company</h1>
            <h1>About us</h1>
            <h1>Vacancies</h1>
            <h1>Contact us</h1>
            <h1>Privacy</h1>
            <h1>Returns policy</h1>
          </div>
          <div>
            <h1 className="text-[20px]">Join our mailing list</h1>
            <div>
              <input
                type="text"
                className="bg-[#FFFFFF26] py-[10px] px-[15px] w-[330px] md:w-[300px]"
                placeholder="your@email.com"
              />
              <button className="px-[28px] py-[10px] text-[#2A254B] mt-[15px] bg-[#FFF]">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center md:justify-center py-[15px] border-t-[2px] border-[#4E4D93]">
          <h1>Copyright 2022 Avion LTD</h1>
          <img src={img3} alt="" className="md:hidden"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
