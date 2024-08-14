import {
  Header,
  About,
  Events,
  Teachers,
  Testimonials,
  Contact,
} from "@/components/private";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full h-[2px] bg-black/10 rounded-full" />
      <About />
      <div className="w-full h-[2px] bg-black/10 rounded-full" />
      <Events />
      <div className="w-full h-[2px] bg-black/10 rounded-full" />
      <Teachers />
      <div className="w-full h-[2px] bg-black/10 rounded-full" />
      <Testimonials />
      <Contact />
    </div>
  );
}
