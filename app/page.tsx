"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Page = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <div className=" relative max-w-[1440px] px-4 pt-7 pb-20 md:mb-[55px] md:pt-[97px] md:pb-[129px] lg:px-[165px] ">
      <nav className="mb-[37px] flex w-full  justify-between">
        <Image
          src="/images/logo.svg"
          alt="logo"
          height={28}
          width={44.98}
        ></Image>
        <button
          className="z-50 md:hidden"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <Image
            src="/images/icon-menu.svg"
            alt="hamburger-button"
            width={40}
            height={17}
            className=""
          ></Image>
        </button>
        {toggleMenu && (
          <div className=" absolute top-0 left-0 h-screen w-full ">
            <div className="grid grid-cols-[30%_70%]">
              <div className=" h-screen w-full bg-blue-very-dark bg-opacity-50"></div>
              <div className=" h-screen w-full  bg-white-off pt-[144px] pl-[21px]">
                <ul className=" flex list-outside list-none flex-col space-y-6">
                  <li className=" text-[18px] leading-[24px] text-blue-very-dark">
                    Home
                  </li>
                  <li className=" text-[18px] leading-[24px] text-blue-very-dark">
                    New
                  </li>
                  <li className=" text-[18px] leading-[24px] text-blue-very-dark">
                    Popular
                  </li>
                  <li className=" text-[18px] leading-[24px] text-blue-very-dark">
                    Trending
                  </li>
                  <li className=" text-[18px] leading-[24px] text-blue-very-dark">
                    Categories
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <ul className=" hidden list-none md:flex md:space-x-10">
          <li>
            <p className=" cursor-pointer transition-all hover:text-red-soft">
              Home
            </p>
          </li>
          <li>
            <p className=" cursor-pointer transition-all hover:text-red-soft">
              New
            </p>
          </li>
          <li>
            <p className=" cursor-pointer transition-all hover:text-red-soft">
              Popular
            </p>
          </li>
          <li>
            <p className=" cursor-pointer transition-all hover:text-red-soft">
              Trending
            </p>
          </li>
          <li>
            <p className=" cursor-pointer transition-all hover:text-red-soft">
              Categories
            </p>
          </li>
        </ul>
      </nav>
      <header className=" mb-16  ">
        <div className="grid md:grid-cols-3 md:gap-[30px]">
          <Image
            src="/images/image-web-3-mobile.jpg"
            alt="hero-banner"
            width={375}
            height={300}
            layout="responsive"
            className=" mb-6 md:hidden"
          ></Image>
          <Image
            src="/images/image-web-3-desktop.jpg"
            alt="hero-banner"
            width={375}
            height={300}
            layout="responsive"
            className=" hidden md:col-span-2 md:block"
          ></Image>

          <h1 className=" mb-4 text-[40px] font-extrabold leading-10 text-blue-very-dark md:mb-0 md:text-[56px] md:leading-[56px]">
            The Bright Future of Web 3.0?
          </h1>
          <div className="mb-[59px] grid gap-y-6">
            <p className=" text-blue-grayish-dark">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Link
              href="#"
              className=" justify-self-start bg-red-soft px-[35px] pt-[13px] pb-[11px] text-sm font-bold leading-6 tracking-[4.38px] text-white-off transition-all hover:bg-blue-very-dark hover:text-white-off md:self-center"
            >
              Read more
            </Link>
          </div>
          <div className=" bg-blue-very-dark  px-5 py-6 md:col-start-3 md:row-span-2 md:row-start-1 md:self-start md:py-8 md:px-6 ">
            <h2 className=" mb-[35px] text-[32px] font-bold leading-[32px] text-orange-soft md:mb-[34px]   ">
              New
            </h2>
            <ul className="flex list-none flex-col space-y-[31px]">
              <li className="  w-full border-b border-white border-b-blue-grayish-dark pb-[29px] text-white   ">
                <h3 className=" mb-2 cursor-pointer text-xl font-extrabold leading-6 transition-all hover:text-orange-soft">
                  Hydrogen VS Electric Cars
                </h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </li>
              <li className=" w-full border-b border-white border-b-blue-grayish-dark pb-[29px]  text-white ">
                <h3 className="mb-2 cursor-pointer text-xl font-extrabold leading-6 transition-all hover:text-orange-soft">
                  The Downsides of AI Artistry
                </h3>
                <p>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </li>
              <li className=" w-full border-b border-white border-b-blue-grayish-dark pb-[29px]  text-white last:border-b-0 last:pb-0 ">
                <h3 className=" mb-2 cursor-pointer text-xl font-extrabold leading-6 transition-all hover:text-orange-soft">
                  Is VC Funding Drying Up?
                </h3>
                <p>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section className=" flex flex-col space-y-8 md:flex-row  md:justify-between md:space-x-[30px] md:space-y-0 md:self-center">
          <div className=" flex space-x-6">
            <Image
              src="/images/image-retro-pcs.jpg"
              alt=""
              width={100}
              height={127}
              className="flex-none md:self-start"
            ></Image>
            <div>
              <h2 className=" mb-2 text-[32px] font-bold leading-[32px] text-blue-grayish-dark  ">
                01
              </h2>
              <h4 className=" mb-[9px] cursor-pointer text-lg font-extrabold leading-6 transition-all hover:text-red-soft ">
                Reviving Retro PCs
              </h4>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className=" flex space-x-6">
            <Image
              src="/images/image-top-laptops.jpg"
              alt=""
              width={100}
              height={127}
              className="flex-none md:self-start"
            ></Image>
            <div>
              <h2 className=" mb-2 text-[32px] font-bold leading-[32px] text-blue-grayish-dark ">
                02
              </h2>
              <h4 className=" mb-[9px] cursor-pointer text-lg font-extrabold leading-6 transition-all hover:text-red-soft ">
                Top 10 Laptops of 2022
              </h4>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className=" flex space-x-6">
            <Image
              src="/images/image-gaming-growth.jpg"
              alt=""
              width={100}
              height={127}
              className="flex-none md:self-start"
            ></Image>
            <div>
              <h2 className=" mb-2 text-[32px] font-bold leading-[32px] text-blue-grayish-dark ">
                03
              </h2>
              <h4 className=" mb-[9px] cursor-pointer text-lg font-extrabold leading-6 transition-all hover:text-red-soft ">
                The Growth of Gaming
              </h4>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
