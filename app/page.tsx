import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import { Knowledge } from "@/components/knowled";
import { Results } from "@/components/results";
import { Services } from "@/components/services";
import { Testimonial } from "@/components/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Services />
      <Results />
      <Testimonial />
      <Knowledge />
      {/* <ContactForm /> */}
      <Footer />
    </>

  );
}
