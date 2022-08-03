import React from 'react';
import { heroData } from '../utils/data';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';

export const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={Delivery} className="w-full h-full object-contain" alt="delivery" />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor">The Fastest Delivery in <span className="text-orange-600 text text-[3rem] lg:text-[5rem]">Your City</span></p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">City Food is operating in more than 10 countries around the globe and recently started its operation in Bangladesh. It is one of the most popular online food delivery services in the Asian region and also getting great popularity in Bangladesh.

          Currently, it is offering delivery services in Dhaka, Chittagong, and Sylhet with more cities to cover in the future. Over 650 restaurants and cafes are available to order from City Food.

          </p>

        <button type='button' className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650 " alt="hero-Bg" />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-20 py-4 gap-4 flex-wrap">
          {
            heroData && heroData.map((n) => (
              <div key={n.id} className="lg:w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="i-1" />
                <p className="text-base lg:text-xl text-textColor font-semibold mt-2 lg:mt-4">{n.name}</p>
                <p className="text-[10px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">{n.decp}</p>
                <p className="text-sm font-semibold text-headingColor "><span className="text-xs font-semibold text-red-600">$</span>{n.price}</p>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
