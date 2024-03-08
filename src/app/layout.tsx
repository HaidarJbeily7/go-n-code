import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./globals.css";
import "@fontsource/poppins/100-italic.css";
import "@fontsource/poppins/200-italic.css";
import "@fontsource/poppins/300-italic.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/600-italic.css";
import "@fontsource/poppins/700-italic.css";
import "@fontsource/poppins/800-italic.css";
import "@fontsource/poppins/900-italic.css";
// import "@fontsource-variable/poppins";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"], // Specify the subsets here
});

const theme = extendTheme({
  fonts: {
    heading: `Poppins, sans-serif`,
    body: `Poppins, sans-serif`,
  },
});

export const metadata: Metadata = {
  title: "Go'N Code",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
