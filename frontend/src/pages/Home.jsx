import React from "react";
import { HeaderImg } from "../assets";
import { Button } from "../components/ui";

const Home = () => {
  return (
    <main className="flex h-screen bg-[#19161B] text-white px-32 py-32 gap-32">
      <section className="flex flex-col w-auto text-5xl pt-16 gap-9">
        <div className="flex flex-col gap-5">
          <h1>We serve high quality foods of all kinds.</h1>
          <p className="text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            ultrices, augue a posuere mattis, ligula mauris semper urna.
          </p>
        </div>
        <div>
          <Button text="View Menu" />
        </div>
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-1">
            <li className="text-2xl">Opening Times</li>
            <li className="text-base text-gray-400">
              Sunday to Saturday l 09:00 AM to 11:00 PM
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-2xl">Location</li>
            <li className="text-base text-gray-400">
              Master canteen, BBSR , Odisha 752054
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-2xl">Call us</li>
            <li className="text-base text-gray-400">+9776462441 </li>
          </ul>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <img src={HeaderImg} alt="Header Image" />
      </section>
    </main>
  );
};

export default Home;
