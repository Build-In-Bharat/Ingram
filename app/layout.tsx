import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify"; // Change Toaster to ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ingram Campaign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T92N854K'); 
            `,
          }}
        />
      </head>
      <body
        className={inter.className + " antialiased bg-background min-h-screen"}
      >
        <ToastContainer /> {/* Update Toaster to ToastContainer */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T92N854K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
