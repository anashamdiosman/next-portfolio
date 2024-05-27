import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Socials() {
  const handleDownloadPdf = () => {
    const pdfUrl = "/assets/resume/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "anashamdi.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col justify-between">
      <div>
        <h4 className="text-2xl py-6">About Me</h4>
        <p className="text-zinc-400">
          Experienced Software Developer with over two years of intensive
          experience in Full-Stack development, primarily focusing on Node.js
          and React.js technologies using MERN stack.
        </p>
        <button
          className="flex items-center gap-5 mt-6 border-[1px] border-zinc-500 rounded-lg p-4 hover:bg-zinc-500 hover:shadow-2xl hover:shadow-indigo-500/20  duration-300"
          onClick={handleDownloadPdf}
        >
          Download My Resume
          <IoMdDownload />
        </button>
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
