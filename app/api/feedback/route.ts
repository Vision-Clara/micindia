import sendMail from "@/utils/mailer";
import { HttpStatusCode } from "axios";

export async function POST(request: Request) {
  try {
    const { name, type, message } = await request.json();

    //check details
    if (!name || !type || !message) {
      return new Response("Please fill all details", {
        status: HttpStatusCode.BadRequest,
      });
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
    return new Response("Sent", {
      status: HttpStatusCode.Ok,
    });
  } catch (err: any) {
    console.log(err);
    return new Response(`Internal Server Error ${err.message}`, {
      status: HttpStatusCode.InternalServerError,
    });
  }
}
