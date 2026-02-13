import React from "react";
import { PinContainer } from "./ProjectPin";
import { useRouter } from "next/router";
import Meteors from "./Meteors";

function Projects() {
  return (
    <div className="pt-[100px] text-center">
      <h1 className="text-4xl">Important Projects</h1>
      <div className="h-full py-10 grid lg:grid-cols-3 xs:grid-cols-1 gap-10">
        {projects?.map((project: any, idx: number) => (
          <div className="h-full" key={idx}>
            <PinContainer
              title={project?.title}
              href={project?.href}
              routeToProject={() => {
                window.open(project?.href, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="min-w-[340px]">
                <div
                  style={{
                    background: `url("${project?.image}") center center / cover no-repeat`,
                    width: "100%",
                    height: "200px",
                  }}
                ></div>
                <div className="py-2">
                  <h4 className="text-2xl text-left font-bold text-zinc-200">
                    {project?.title}
                  </h4>
                  <h3 className="text-sm text-left text-zinc-400">
                    {project?.description}
                  </h3>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className="py-4">
        <h1 className="text-4xl">Github Projects</h1>
        <div className="py-6 px-6 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 ">
          {githubProjects?.map((project, idx) => (
            <div style={{ margin: "10px auto" }} key={idx}>
              <Meteors
                name={project?.title}
                link={project?.href}
                description={project?.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

const projects = [
  {
    title: "Jadwleny",
    href: "https://jadwelny.com",
    image: "/assets/projects/jadwelny.jpg",
    description:
      "Jadwelny - AI-powered travel booking platform that aims to make travel easy and stress-free.",
  },
  {
    title: "BYDI Student Portal",
    href: "https://studentmob.binyaber.com",
    image: "/assets/projects/bydi.jpg",
    description:
      "A student portal for booking and managing classes, and schedules through a simple, user-friendly interface.",
  },
  {
    title: "WinnerX",
    href: "https://winnerx.com",
    image: "/assets/projects/winnerx.png",
    description:
      "WinnerX is your gate to a shopping experience with opportunities to Win big.",
  },
];

const githubProjects = [
  {
    title: "Activies Algorithm",
    href: "https://github.com/anashamdiosman/activities_algorithm",
    description:
      "A Full-Stack that project Recommends activities based on user preferences.",
  },
  {
    title: "Cafe POS",
    href: "https://github.com/anashamdiosman/cafe_app",
    description:
      "Full-Stack POS system project for café restaurant management and sales.",
  },
  {
    title: "Library Api",
    href: "https://github.com/anashamdiosman/library_api",
    description:
      "Basic Node.js Express server project serving a library catalog.",
  },
];
