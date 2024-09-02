import React from "react";
import Navbar from "@/components/navbar/page";
import First from "@/components/First/page";
import Second from "@/components/second/page";
import Third from "@/components/Third/page";
import Fourth from "@/components/fourth/page";
import Last from "@/components/last/page";
import Fifth from "@/components/fifth/page";
import Sixth from "@/components/sixth/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <main className="bg-background" vaul-drawer-wrapper="">
      <Navbar />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Last />
      <Footer />
    </main>
  );
}
