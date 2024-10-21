import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Treasury Management",
  description: "A treasury management application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} bg-background`}>
      <body>
        <Toaster richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}
