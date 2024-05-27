import React, { ChangeEvent, FormEvent, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { sendContactForm } from "@/lib/api";
import { AiOutlineLoading } from "react-icons/ai";
import { motion } from "framer-motion";
import { MdDoneOutline } from "react-icons/md";
import { BiErrorAlt } from "react-icons/bi";

type Data = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
};

function MailForm() {
  const [data, setData] = useState<Data>({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<any>(null);

  const handleSubmitContactForm = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await sendContactForm(data);

      if (res?.data?.status === 200) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
    }

    setTimeout(() => {
      setSuccess(null);
    }, 1000);
  };

  const handleChangeTextFeild = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setData((prev) => ({
      ...prev,
      [target?.name]: target?.value,
    }));
  };

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e;

    setData((prev) => ({
      ...prev,
      [target?.name]: target?.value,
    }));
  };

  return (
    <div>
      <h4 className="text-2xl text-center mb-6">Let&apos;s get in touch</h4>
      <form
        className="p-4 bg-zinc-900 rounded-lg shadow-2xl shadow-indigo-500/20"
        onSubmit={(e) => handleSubmitContactForm(e)}
      >
        <div className="py-6">
          <div className="flex gap-6 mb-6">
            <LabelInputContainer className="flex">
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="John"
                type="text"
                value={data?.firstname}
                onChange={(e) => handleChangeTextFeild(e)}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="flex">
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Doe"
                type="text"
                value={data?.lastname}
                onChange={(e) => handleChangeTextFeild(e)}
                required
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="flex mb-6">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              type="email"
              value={data?.email}
              onChange={(e) => handleChangeTextFeild(e)}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="flex mb-6">
            <Label htmlFor="message">Message</Label>
            <textarea
              className={`flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `}
              id="message"
              name="message"
              placeholder="Message..."
              value={data?.message}
              onChange={(e) => handleChangeTextArea(e)}
              required
            ></textarea>
          </LabelInputContainer>
          <div className="pt-6">
            <button
              className="gap-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-transparent bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full"
              type="submit"
              //   onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            >
              {loading ? (
                <AiOutlineLoading color="#FFF" className="animate-spin" />
              ) : (
                "Send"
              )}
            </button>
          </div>
        </div>
      </form>
      {/* <motion.div
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 100 }}
      > */}
      {success != null ? (
        success ? (
          <motion.div
            className="fixed bottom-10 left-0 flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 gap-2"
            role="alert"
            animate={{ x: 20 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <MdDoneOutline />
            <h4 className="text-sm">Email has been sent!</h4>
          </motion.div>
        ) : (
          <motion.div
            className="fixed bottom-10 left-0 flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 gap-2"
            role="alert"
            animate={{ x: 20 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <BiErrorAlt />
            <h4 className="text-sm">Email could not be sent!</h4>
          </motion.div>
        )
      ) : (
        ""
      )}
      {/* </motion.div> */}
    </div>
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
