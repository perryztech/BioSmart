import Hero1 from "@/components/mycomponent/Hero1";
import Nav from "@/components/mycomponent/Nav";
import SuccessStories from "@/components/mycomponent/SuccesStories";
import { Toaster } from "@/components/ui/toaster";

export default function CheckerPage() {
  return (
    <main className="relative w-full">
      <Toaster />
      <Nav />
      <Hero1 />
      <SuccessStories />
    </main>
  );
}
