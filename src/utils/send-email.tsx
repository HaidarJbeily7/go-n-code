// // import { Resend } from "resend";

// // interface sendEmailProps {
// //   name: string;
// //   phoneNumber: string;
// //   emailAddress: string;
// //   message: string;
// // }

// // const resend = new Resend("re_V5ijSVCV_Q83JFGieHKaE9h7qXk9tch58");

// // export const sendEmail = async ({
// //   name,
// //   phoneNumber,
// //   emailAddress,
// //   message,
// // }: sendEmailProps) => {
// //   try {
// //     await resend.emails.send({
// //       from: "`${emailAddress}`",
// //       to: "billybeatsboone@gmail.com",
// //       subject: `New Message from ${name}`,
// //       html: `
// //         <p><strong>Name:</strong> ${name}</p>
// //         <p><strong>Phone Number:</strong> ${phoneNumber}</p>
// //         <p><strong>Email Address:</strong> ${emailAddress}</p>
// //         <p><strong>Message:</strong> ${message}</p>
// //       `,
// //     });

// //     console.log("Email sent successfully");
// //   } catch (error) {
// //     console.error("Failed to send email", error);
// //   }
// // };

// // /api/sendEmail.js
// import { Resend } from "resend";

// export default async (req, res) => {
//   if (req.method === "POST") {
//     try {
//       const resend = new Resend("your-resend-api-key");

//       const { name, phoneNumber, emailAddress, message } = req.body;

//       await resend.emails.send({
//         from: "onboarding@resend.dev",
//         to: "your-receiving-email@example.com",
//         subject: `New Contact Us Message from ${name}`,
//         html: `
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Phone Number:</strong> ${phoneNumber}</p>
//           <p><strong>Email Address:</strong> ${emailAddress}</p>
//           <p><strong>Message:</strong> ${message}</p>
//         `,
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error("Failed to send email", error);
//       res.status(500).json({ success: false, error: error.message });
//     }
//   } else {
//     // Handle any other HTTP methods
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// };
