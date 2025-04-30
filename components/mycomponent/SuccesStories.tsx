import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function SuccessStories() {
  const testimonials = [
    {
      quote:
        "Thanks to BioSmart, my university credentials were verified instantly by my employer. It gave me a competitive edge during my interview process.",
      name: " Amaka Nwosu",
      designation: "Data Analyst at FinEdge",
      src: "https://img.freepik.com/free-photo/front-view-working-covid-concept_23-2148616714.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
    },
    {
      quote:
        "Before BioSmart, getting my certificates authenticated was a nightmare. Now, it's seamless—and it helped me land a job abroad!",
      name: "Tunde Adebayo",
      designation: "Software Engineer at CloudNova",
      src: "https://img.freepik.com/free-photo/medium-shot-health-worker-with-equipment_23-2148814236.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
    },
    {
      quote:
        "BioSmart gave my employer full confidence in my credentials. It made the hiring process smoother than ever.",
      name: "Chioma Eze",
      designation: "Teacher at EduBright Academy",
      src: "https://img.freepik.com/free-photo/medium-shot-health-worker-with-equipment_23-2148814236.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
    },
    {
      quote:
        "I uploaded my certificate, and within minutes, my employer had all the information they needed. It felt futuristic!",
      name: "Kelvin Okoro",
      designation: "Recent Graduate | Now Interning at HealthTech NG",
      src: "https://img.freepik.com/free-photo/handsome-hispanic-pilot-man-holding-paper-plane-passport-smiling-looking-side-staring-away-thinking_839833-8475.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
    },
    {
      quote:
        "Having my nursing license verified by BioSmart made onboarding so easy. They’re setting a new standard for education trust.",
      name: "Zainab Bello",
      designation: "Nurse at MercyLife Hospital",
      src: "https://img.freepik.com/free-photo/medium-shot-health-worker-with-equipment_23-2148814236.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
    },
  ];
  const words = [
    {
      text: "Trusted",
    },
    {
      text: "Certificates,",
    },
    {
      text: "Real",
    },

    {
      text: "Opportunities.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="w-full h-lvh">
      <div className="flex items-center justify-center">
        <TypewriterEffectSmooth words={words} />
      </div>

      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
