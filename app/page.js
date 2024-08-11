import About from "@/components/private/About";
import Contact from "@/components/private/Contact";
import Events from "@/components/private/Events";
import Header from "@/components/private/Header";
import Teachers from "@/components/private/Teachers";
import Testimonials from "@/components/private/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Events />
      <Teachers />
      <Testimonials />
      <Contact />
    </div>
  );
}
