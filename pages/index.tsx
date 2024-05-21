import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import NavBar from "@/Components/NavBar/NavBar";
import Banner from "@/Components/Banner/Banner";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import About from "@/Components/About/About";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${roboto.className} bg-gray-900 min-h-screen`}>
      <NavBar tabs={tabs} />
      <Element name="section1" className="element">
        <Banner />
      </Element>
      <Element name="section2" className="element">
        {/* <About /> */}
      </Element>
      <Element name="section3" className="element">
        <div className="h-screen">Projects section</div>
      </Element>
    </main>
  );
}

const anchorsClassNames = {
  active: "w-full",
  nonActive: "w-1/4 group-hover:w-full transition-all ease-in-out delay-150",
};

const tabs: any = [
  {
    id: "1",
    name: "home",
    href: "/",
    label: "Home",
    section: "section1",
    classNameUnActive: `${anchorsClassNames?.nonActive}`,
    classNameActive: `${anchorsClassNames?.active}`,
  },

  {
    id: "2",
    name: "projects",
    href: "#Projects",
    label: "Projects",
    section: "section2",
    classNameUnActive: `${anchorsClassNames?.nonActive}`,
    classNameActive: `${anchorsClassNames?.active}`,
  },
  {
    id: "3",
    name: "skills",
    href: "#skills",
    label: "Skills",
    section: "section3",
    classNameUnActive: `${anchorsClassNames?.nonActive}`,
    classNameActive: `${anchorsClassNames?.active}`,
  },
  {
    id: "4",
    name: "socials",
    href: "#socials",
    label: "Socials",
    section: "section4",
    classNameUnActive: `${anchorsClassNames?.nonActive}`,
    classNameActive: `${anchorsClassNames?.active}`,
  },
];
