// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import { Resend } from "resend";
// import MessageForm from "../../../components/contact-us/message-form";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["delivered@resend.dev"],
//       subject: "Hello world",
//       react: MessageForm(),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }

// Assuming you're using something like Next.js, Express, or similar
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend("re_V5ijSVCV_Q83JFGieHKaE9h7qXk9tch5");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, phoneNumber, emailAddress, message } = req.body;

      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["delivered@resend.dev"],
        subject: `New message from ${name}`,
        // You need to craft the email body here, using the variables above
        text: `Name: ${name}\nPhone: ${phoneNumber}\nEmail: ${emailAddress}\nMessage: ${message}`,
      });

      res.status(200).json(data);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
