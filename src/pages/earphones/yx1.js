import { productsArray } from "@/productsData";
import Head from "next/head";
import Navigation from "@/components/navigation/Navigation";
import Shop from "@/components/shop/Shop";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";

export default function YX1() {
  const product = productsArray[5];

  return (
    <>
      <Head>
        <title>Audiophile | YX1 Earphones</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navigation />
      <main className="main--current-product">
        <Shop />
        <div className="spacer hidden-sm-lg"></div>
        <About />
      </main>
      <Footer />
    </>
  );
}
