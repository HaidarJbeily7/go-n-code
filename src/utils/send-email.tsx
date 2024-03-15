import { Resend } from "resend";

interface sendEmailProps {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  message: string;
}

const resend = new Resend("re_V5ijSVCV_Q83JFGieHKaE9h7qXk9tch58");

export const sendEmail = async ({
  name,
  phoneNumber,
  emailAddress,
  message,
}: sendEmailProps) => {
  try {
    await resend.emails.send({
      from: `${emailAddress}`,
      to: "billybeatsboone@gmail.com",
      subject: `New Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email Address:</strong> ${emailAddress}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Failed to send email", error);
  }
};
