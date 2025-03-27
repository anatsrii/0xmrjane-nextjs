import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "0xmrjane.com",
  description: "Hello I'm Mr.Jane ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="https://ext.same-assets.com/946278250/190269907.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://ext.same-assets.com/1020582611/279559729.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://ext.same-assets.com/160014050/4129102554.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="win95-bg">{children}

      </body>
    </html>
  );
}
