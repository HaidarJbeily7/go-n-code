import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

export function useSendEmail() {
  const toast = useToast(); // For showing feedback to the user
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  interface SendEmailProps {
    name: string;
    phoneNumber: string;
    email: string;
    message: string;
  }

  const sendEmail = async ({
    name,
    phoneNumber,
    email,
    message,
  }: SendEmailProps) => {
    setIsSending(true);
    setError(null);
    try {
      await emailjs.send(
        "service_zlzcp0h",
        "template_wy3cmfl",
        {
          from_name: name,
          to_name: "Go N Code",
          from_email: email,
          to_email: "",
          message: message,
        },
        "njO-HNDAVecm5l-tZ"
      );

      toast({
        title: "Message sent successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setIsSending(false);
      return true; // Indicate success
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Failed to send message.",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setError(error);
      setIsSending(false);
      return false;
    }
  };

  return { sendEmail, isSending, error };
}
