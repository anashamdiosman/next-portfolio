import React from "react";
import Socials from "./Socials";
import MailForm from "./MailForm";

export default function Contact() {
  return (
    <div className="pt-[100px] px-6">
      <div className="grid xs:grid-cols-1 md:grid-cols-2 py-6 gap-10">
        <Socials />
        <MailForm />
      </div>
    </div>
  );
}
