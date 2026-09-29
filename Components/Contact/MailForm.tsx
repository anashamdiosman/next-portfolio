import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { sendContactForm } from "@/lib/api";
import { AiOutlineLoading } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { MdDoneOutline } from "react-icons/md";
import { BiErrorAlt } from "react-icons/bi";

type Data = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
};

const initialData: Data = {
  firstname: "",
  lastname: "",
  email: "",
  message: "",
};

const buttonClassName =
  "gap-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-transparent bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full disabled:cursor-not-allowed disabled:opacity-70";

function MailForm() {
  const [data, setData] = useState<Data>(initialData);

  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [sentTo, setSentTo] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmitContactForm = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(false);

    try {
      const res = await sendContactForm(data);

      if (res?.data?.success) {
        setSentTo(data.firstname);
        setData(initialData);
        setSent(true);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(false), 4000);
    return () => clearTimeout(timer);
  }, [error]);

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
      <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="sent"
          className="p-4 bg-zinc-900 rounded-lg shadow-2xl shadow-indigo-500/20"
          role="status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="py-12 flex flex-col items-center text-center gap-4">
            <motion.div
              className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500/10 text-green-400 shadow-lg shadow-green-500/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
            >
              <MdDoneOutline size={28} />
            </motion.div>
            <h4 className="text-xl">
              Thanks{sentTo ? `, ${sentTo}` : ""}! Your message has been sent.
            </h4>
            <p className="text-sm text-neutral-400 max-w-sm">
              I&apos;ll get back to you as soon as possible.
            </p>
            <div className="pt-6 w-full">
              <button
                className={buttonClassName}
                type="button"
                onClick={() => setSent(false)}
              >
                Send another message
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
      <motion.form
        key="form"
        className="p-4 bg-zinc-900 rounded-lg shadow-2xl shadow-indigo-500/20"
        onSubmit={(e) => handleSubmitContactForm(e)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ type: "spring", stiffness: 100 }}
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
              className={buttonClassName}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <AiOutlineLoading color="#FFF" className="animate-spin" />
              ) : (
                "Send"
              )}
            </button>
          </div>
        </div>
      </motion.form>
      )}
      </AnimatePresence>
      <AnimatePresence>
        {error && (
          <motion.div
            className="fixed bottom-10 left-0 flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 gap-2"
            role="alert"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 20, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <BiErrorAlt />
            <h4 className="text-sm">
              Email could not be sent! Please try again.
            </h4>
          </motion.div>
        )}
      </AnimatePresence>
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
