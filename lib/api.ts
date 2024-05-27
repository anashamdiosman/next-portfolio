import axios from "axios";

type Data = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
};

export const sendContactForm = async (data: Data) =>
  axios.post("/api/contact", data);
