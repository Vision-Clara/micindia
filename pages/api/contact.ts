import sendMail from "@/utils/mailer";
import { HttpStatusCode } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    if (req.method === "POST") {
      const { name, email, message } = req.body;

      //check details
      if (!name || !email || !message) {
        return res
          .status(HttpStatusCode.BadRequest)
          .json({ message: "Please fill all details" });
      }

      //send mail to contact email address
      const mailBody = `<div>
                         <p>Dear Admin, 
                         <br/> <br/> We have a message from <strong>${name}</strong>. Please have a look up on it. 
                         <br/> <br/> Sender Email: <i> ${email} </i>
                         <br/> Sender Message: <i> ${message} </i>
                      <div/>`;

      const mailTo = process.env.ADMIN_MAILS || "dev.visionclara@gmail.com";
      const mailSubject = "Contact Form Submission";

      await sendMail(mailTo, mailSubject, mailBody);
      res.status(HttpStatusCode.Ok).json({ message: "Sent" });
    } else {
      res
        .status(HttpStatusCode.InternalServerError)
        .json({ message: "Invaid Request Method" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
