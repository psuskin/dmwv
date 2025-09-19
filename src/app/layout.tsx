import type { Metadata } from "next";
import "./globals.css";
import PdfWidgetWrapper from "@/components/PdfWidgetWrapper";

export const metadata: Metadata = {
  title: "German Medical Wellness Association",
  description: "Default Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-background text-foreground">
        {children}
        <PdfWidgetWrapper />
      </body>
    </html>
  );
}