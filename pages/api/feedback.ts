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
      const { name, type, message } = req.body;

      //check details
      if (!name || !type || !message) {
        return res
          .status(HttpStatusCode.BadRequest)
          .json({ message: "Please fill all details" });
      }

      //send mail to contact email address
      const mailBody = `<div>
                         <p>Dear Admin, 
                         <br/> <br/> We have a feedback submission from <strong>${name}</strong>, regarding <strong>${type}</strong>. Please have a look up on it. 
                         <br/> <br/> Feedback Message: <i> ${message} </i>
                      <div/>`;

      const mailTo = process.env.ADMIN_MAILS || "dev.visionclara@gmail.com";
      const mailSubject = "Feedback Submission";

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
