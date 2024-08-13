import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";

const roboto = Roboto_Slab({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

import "./globals.css";
import Layout from "@/views/Layouts";
import ServiceLayout from "@/views/Services/layout";
import TranslationContext from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Medmar Agency",
  description:
    "Discover Medmar Agency's comprehensive marketing solutions, client success stories, and industry insights on our dynamic and responsive website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-200`}>
      <TranslationContext>

        <Layout>
          <ServiceLayout>{children}</ServiceLayout>
        </Layout>
      </TranslationContext>

        
      </body>
    </html>
  );
}
