import React, { useEffect, useRef, useState } from "react";
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

  const closeMenu = () => {
    if (openMenu) return setOpenMenu(false);
  };
  // console.log(activeTab);

  return (
    <nav
      className={`fixed top-0 right-0 z-[1000] w-full bg-gray-950 grid xs:grid-cols-3 md:grid-cols-2 grid-flow-col gap-4 p-4`}
    >
      <div className="flex items-center xs:col-span-2">
        <h5 className="text-2xl cursor-pointer hover:text-custom-main-color transition-all ease-linear delay-150 0.3s">
          <span className="text-amber-400 font-extrabold">{`{`}</span>ANAS HAMDI
          <span className="text-amber-400	font-extrabold">{`}`}</span>
        </h5>
      </div>

      <div
        className="md:hidden xs:block "
        id="toggle-menu"
        onClick={(e) => {
          e.stopPropagation();

          setOpenMenu((prev) => !prev);
        }}
      >
        <div
          className="flex flex-col gap-1 items-end justify-center cursor-pointer relative"
          id="toggle-menu"
          onClick={(e) => {
            e.stopPropagation();

            setOpenMenu((prev) => !prev);
          }}
        >
          <FirstDivComponent open={openMenu} />
          <SecondDivComponent open={openMenu} />
          <ThirdDivComponent open={openMenu} />
          {openMenu && (
            <HamburgerMenu open={openMenu} tabs={tabs} closeMenu={closeMenu} />
          )}
        </div>
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
    className="w-6 h-1 bg-slate-500 absolute top-1 rounded-2xl "
    id="toggle-menu-lines-1"
    animate={{
      transform: children?.open ? "rotate(-45deg)" : "rotate(0deg)",
      top: children?.open ? "0.75rem" : "0.25rem",
    }}
  />
);

const SecondDivComponent = (children: any) => (
  <motion.div
    className="w-6 h-1 bg-slate-500 absolute top-3 rounded-2xl"
    id="toggle-menu-lines-2"
    animate={{ opacity: children?.open ? 0 : 1 }}
  />
);

const ThirdDivComponent = (children: any) => (
  <motion.div
    className="w-6 h-1 bg-slate-500 absolute top-5 rounded-2xl"
    id="toggle-menu-lines-1"
    animate={{
      transform: children?.open ? "rotate(45deg)" : "rotate(0deg)",
      top: children?.open ? "0.75rem" : "1.25rem",
    }}
  />
);

const HamburgerMenu: React.FC<any> = ({ closeMenu, open, tabs }) => {
  const ref = useRef<any>(null);

  useOutsideAlerter(ref, closeMenu);

  return (
    <motion.div
      className="w-56 bg-slate-700 absolute top-8 rounded-lg py-6 px-4 flex flex-col gap-2 cursor-default  "
      style={{ opacity: 0 }}
      animate={{
        opacity: open ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
      }}
      ref={ref}
    >
      {tabs?.map((tab: any, index: number, arr: any) => (
        <div key={tab?.id}>
          <Link
            to={tab?.section}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => closeMenu()}
            className="text-xl cursor-pointer hover:text-custom-main-color transition-all duration-500 px-2"
          >
            {tab?.label}
          </Link>
          {index + 1 != arr?.length && <hr style={{ marginTop: "4px" }} />}
        </div>
      ))}
    </motion.div>
  );
};

function useOutsideAlerter(ref: any, close: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (
          event?.target?.id == "toggle-menu-lines-1" ||
          event?.target?.id == "toggle-menu-lines-2" ||
          event?.target?.id == "toggle-menu-lines-3" ||
          event?.target?.id == "toggle-menu"
        )
          return;
        close();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
