import React, { useEffect, useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { FaBars, FaBeer } from "react-icons/fa";
import { delay, motion } from "framer-motion";

interface Tab {
  id: string;
  name: string;
  href: string;
  label: string;
  section: "section1";
  classNameUnActive: string;
  classNameActive: string;
}

// Define the type for the props that the component will receive
interface TabsProps {
  tabs: Tab[];
}
const NavBar: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0]?.name);
  const [hoveringTab, setHoveringTab] = React.useState<string>("");
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const closeMenu = () => setOpenMenu(false);
  // console.log(activeTab);

  return (
    <nav
      className={`fixed top-0 right-0 z-10 w-full bg-gray-950 grid grid-cols-2 grid-flow-col gap-4 p-4`}
    >
      <div className="flex items-center">
        <h5 className="text-2xl cursor-pointer hover:text-custom-main-color transition-all ease-linear delay-150 0.3s">
          <span className="text-amber-400 font-extrabold">{`{`}</span>ANAS HAMDI
          <span className="text-amber-400	font-extrabold">{`}`}</span>
        </h5>
      </div>

      <div
        className="md:hidden xs:flex flex flex-col gap-1 items-end justify-center cursor-pointer relative"
        onClick={() => {
          setOpenMenu((prev) => !prev);
        }}
      >
        <FirstDivComponent open={openMenu} />
        <SecondDivComponent open={openMenu} />
        <ThirdDivComponent open={openMenu} />
        <HamburgerMenu open={openMenu} tabs={tabs} closeMenu={closeMenu} />
      </div>
      <div className="flex-row gap-4 justify-end hidden md:flex">
        {tabs?.map((val: any) => (
          <Link
            to={val?.section}
            spy={true}
            smooth={true}
            duration={500}
            className="group flex flex-col items-center cursor-pointer"
            onClick={() => {
              setActiveTab(val?.name);
            }}
            onMouseEnter={() => setHoveringTab(val?.name)}
            onMouseLeave={() => setHoveringTab("")}
            key={val?.id}
          >
            <h4
              key={val?.id}
              className="transition ease-in-out delay-150 p-2 rounded-lg"
            >
              {val?.label}
            </h4>
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
              }}
              className={
                activeTab === val?.name
                  ? val?.classNameActive
                  : val?.classNameUnActive
              }
            ></div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

const FirstDivComponent = (children: any) => (
  <motion.div
    className="w-6 h-1 bg-slate-500 absolute top-1 rounded-2xl"
    animate={{
      transform: children?.open ? "rotate(-45deg)" : "rotate(0deg)",
      top: children?.open ? "0.75rem" : "0.25rem",
    }}
  />
);

const SecondDivComponent = (children: any) => (
  <motion.div
    className="w-6 h-1 bg-slate-500 absolute top-3 rounded-2xl"
    // initial={{ opacity: 0 }}
    // style={{ opacity: 0 }}
    animate={{ opacity: children?.open ? 0 : 1 }}
  />
);

const ThirdDivComponent = (children: any) => (
  <motion.div
    className="w-6 h-1 bg-slate-500 absolute top-5 rounded-2xl"
    animate={{
      transform: children?.open ? "rotate(45deg)" : "rotate(0deg)",
      top: children?.open ? "0.75rem" : "1.25rem",
    }}
  />
);

const HamburgerMenu = (children: any) => {
  return (
    <motion.div
      className="w-56 h-60 bg-slate-700 absolute top-8 rounded-2xl py-6 px-8 flex flex-col gap-2 cursor-default"
      style={{ opacity: 0 }}
      animate={{
        opacity: children?.open ? 1 : 0,
      }}
      transition={{
        // ease: "easeInOut",
        duration: 0.3,
      }}
    >
      {children?.tabs?.map((tab: any, index: number) => (
        <Link
          to={tab?.section}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => children?.closeMenu()}
          key={tab?.id}
          className="text-xl cursor-pointer hover:text-custom-main-color transition-all duration-500"
        >
          {tab?.label}
        </Link>
      ))}
    </motion.div>
  );
};
