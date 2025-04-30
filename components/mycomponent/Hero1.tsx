"use client";
// import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Fingerprint, Globe, Lock } from "lucide-react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Image } from "@heroui/image";
import { Tip1, Tip2, Tip3 } from "../ui/Tips";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://img.freepik.com/free-photo/beauty-young-latin-woman-with-ideal-skin_633478-419.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-woman-wearing-make-up_23-2149206641.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://img.freepik.com/premium-photo/skincare-beauty-smile-portrait-black-woman-with-confidence-white-background-cosmetics-product-health-dermatology-natural-makeup-model-studio-healthy-skin-care-wellness_590464-170015.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://img.freepik.com/free-photo/side-view-beautiful-woman-posing_23-2149732757.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://img.freepik.com/premium-photo/beautiful-woman-smiling-camera_13339-149155.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-african-woman-different-lights_23-2148747908.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740",
  },
];

const words = ` BioSmart is more than a tool — it is the future of trust in education, built on innovation, security, and purpose.`;

// Animation Variants
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2, // ✅ only this here
    },
  },
};

const bubbleVariant = {
  initial: { scale: 0 },
  animate: {
    scale: [0.9, 1.2, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: 3, // ✅ this is valid here
      repeatType: "loop" as const,
    },
  },
};

const scaleTextVariant = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const slideInFromLeft = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero1() {
  return (
    <section className="w-full h-lvh flex justify-between items-center px-10">
      <BackgroundBeamsWithCollision className="w-[40%] bg-white h-full flex flex-col  items-start gap-10">
        <div className="flex flex-col gap-2">
          <motion.p
            className="font-extrabold text-4xl"
            style={{ lineHeight: "2.8rem" }}
            variants={scaleTextVariant}
            initial="initial"
            animate="animate"
          >
            Unlocking Tomorrow&apos;s <br /> Knowledge Today
          </motion.p>
          <motion.p
            variants={slideInFromLeft}
            initial="initial"
            animate="animate"
            className="font-extrabold text-4xl text-gray-300 ms-7"
            style={{ lineHeight: "2.8rem" }}
          >
            where secure education <br /> meets smart technology
          </motion.p>
        </div>
        <div className=" w-72 flex flex-col items-start justify-center gap-4 text-start font-bold text-sm ms-7">
          <div>
            <TextGenerateEffect duration={1} filter={false} words={words} />
          </div>
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="flex gap-2 items-center justify-center w-fit"
          >
            <motion.div
              variants={bubbleVariant}
              className="size-[30px] rounded-full border border-black flex justify-center items-center"
            >
              <Globe size="22px" />
            </motion.div>

            <motion.div
              variants={bubbleVariant}
              className="size-[30px] rounded-full border border-black flex justify-center items-center"
            >
              <Fingerprint size="22px" />
            </motion.div>

            <motion.div
              variants={bubbleVariant}
              className="size-[30px] rounded-full border border-black flex justify-center items-center"
            >
              <Lock size="20px" />
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-row items-center justify-center mt-8 ms-7 ">
          <AnimatedTooltip items={people} />
        </div>
      </BackgroundBeamsWithCollision>

      <div className="w-[60%] h-full flex justify-center items-center">
        <div className="w-fit h-fit relative">
          <Image
            isBlurred
            isZoomed
            src="https://img.freepik.com/free-photo/portrait-afro-american-man-using-virtual-reality-headset_23-2148794636.jpg?uid=R195283799&ga=GA1.1.672191023.1743243535&semt=ais_hybrid&w=740"
            width={380}
            height={380}
            alt="secutiry imgee"
            className="rounded-2xl object-cover object-center"
          />

          <motion.div
            className="w-fit h-fit absolute -left-44 top-16 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <Tip1 />
          </motion.div>
          <motion.div
            className="w-fit h-fit absolute -right-48 bottom-10 z-10"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <Tip2 />
          </motion.div>
          <motion.div
            className="w-fit h-fit absolute -left-28 -bottom-10 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <Tip3 />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
