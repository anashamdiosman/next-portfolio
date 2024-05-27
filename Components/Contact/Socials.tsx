import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Socials() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h4 className="text-2xl py-6">About Me</h4>
        <p className="text-zinc-400">
          Experienced Software Developer with over two years of intensive
          experience in Full-Stack development, primarily focusing on Node.js
          and React.js technologies using MERN stack.
        </p>
      </div>
      <hr className="pb-6 mt-6" />
      <div>
        <h4 className="text-2xl">Socials</h4>
        <div className="py-2 flex  items-center gap-2">
          <FaLinkedin fontSize={30} className="cursor-pointer" />
          <FaGithub fontSize={30} />
        </div>
      </div>
    </div>
  );
}

export default Socials;
