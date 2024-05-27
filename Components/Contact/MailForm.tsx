import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";

function MailForm() {
  return (
    <form className="p-4 bg-zinc-900 rounded-lg shadow-2xl shadow-indigo-500/20">
      <h4 className="text-2xl text-center">Let's get in touch</h4>
      <div className="py-6">
        <div className="flex gap-6">
          <LabelInputContainer className="flex">
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="John" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="flex">
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Doe" type="text" />
          </LabelInputContainer>
        </div>
        <div className="pt-6">
          <LabelInputContainer className="flex">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" placeholder="johndoe@gmail.com" type="text" />
          </LabelInputContainer>
        </div>
        <div className="pt-6">
          <LabelInputContainer className="flex">
            <Label htmlFor="email">Message</Label>
            <textarea
              className={`flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `}
              id="email"
              placeholder="Message..."
            ></textarea>
          </LabelInputContainer>
        </div>
        <div className="pt-6">
          <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-transparent bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full"
            //   onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default MailForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
