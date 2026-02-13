import React from "react";
import { LampDemo } from "../Projects/Lamp";
import Image from "next/image";
import { RiNextjsFill } from "react-icons/ri";
import { HoverEffect } from "./Cards";

function Skills() {
  return (
    <div className="pt-[100px]">
      <h1 className="text-center text-4xl">Important Skills</h1>
      <div className="flex justify-center items-center gap-20 py-10">
        {mainSkills?.map((skill: any, idx) => (
          <div key={idx}>
            {skill?.image ? (
              <Image
                src={skill?.image}
                alt={skill?.name}
                width={100}
                height={100}
              ></Image>
            ) : (
              skill?.component
            )}
            <h4 className="text-center text-xl py-2">{skill?.name}</h4>
          </div>
        ))}
      </div>
      <div className="">
        <HoverEffect items={otherSkills} />
      </div>
    </div>
  );
}

export default Skills;

const mainSkills = [
  {
    id: "1",
    name: "React JS",
    image: "/assets/skills/react.svg",
  },
  {
    id: "2",
    name: "NEXT JS",
    // image: "/assets/skills/next-js.svg",
    component: <RiNextjsFill fontSize={100} />,
  },
  {
    id: "3",
    name: "Node JS",
    image: "/assets/skills/node.svg",
  },
];

const otherSkills = [
  {
    id: "1",
    title: "Front-end",
    description: "DADSAAS",
    link: "DSADASS",
    labels: [
      "React.js",
      "Next.js",
      "PUG",
      "Basic React-Native",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "MUI",
      "Redux",
      "SASS",
      "SCSS",
    ],
  },
  {
    id: "2",
    title: "Back-end",
    description: "DADSAAS",
    link: "DSADASS",
    labels: [
      "Node.js",
      "Nest.js",
      "PHP",
      "Sequelize.js",
      "Express.js",
      "Node-mailer",
      "Mongoose",
      "TypeScript",
    ],
  },
  {
    id: "3",
    title: "DBMS",
    description: "DADSAAS",
    link: "DSADASS",
    labels: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: "4",
    title: "Servers",
    description: "DADSAAS",
    link: "DSADASS",
    labels: ["Ubuntu", "AlmaLinux", "AWS (RDBMS, EC2, Amplify)", "Docker"],
  },
  {
    id: "5",
    title: "Version Control",
    description: "DADSAAS",
    link: "DSADASS",
    labels: ["Git", "TortoiseSVN"],
  },
  {
    id: "6",
    title: "Other Skills",
    description: "DADSAAS",
    link: "DSADASS",
    labels: [
      "NPM",
      "webpack",
      "RESTful APIs",
      "JWT",
      "Oauth",
      "Figma",
      "Miro",
      "SEO",
      "Google analytics",
      "Google Hotels Center",
    ],
  },
];
