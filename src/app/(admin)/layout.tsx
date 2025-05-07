import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paetreon ADMIN",
  description: "Karthik's Paetreon - ADMIN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
