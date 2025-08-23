import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg1 from "../../assets/HeroSectionImg/corgi.png";
import heroImg2 from "../../assets/HeroSectionImg/golden.png";
import heroImg3 from "../../assets/HeroSectionImg/bulldog.png";

// Example pet data (replace with your PNG images)
const pets = [
  {
    id: 1,
    name: "Corgi",
    age: "2 months",
    img: heroImg1,
    desc: "The Corgi is intelligent, quick and curious. It is a kind, adventurous breed which shows a large measure of independence. They are good with children and normally kind with strangers.",
  },
  {
    id: 2,
    name: "Golden Retriever",
    age: "3 months",
    img: heroImg2,
    desc: "Golden Retrievers are friendly, intelligent and devoted. They love to play and are excellent family dogs.",
  },
  {
    id: 3,
    name: "Bulldog",
    age: "4 months",
    img: heroImg3,
    desc: "Bulldogs are calm, courageous, and friendly. They make great companions for families.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const prevPet = () => {
    setCurrent((prev) => (prev === 0 ? pets.length - 1 : prev - 1));
  };

  const nextPet = () => {
    setCurrent((prev) => (prev === pets.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-50 to-orange-100 px-6 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left - Pet Image */}
        <motion.div
          key={pets[current].id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={pets[current].img}
            alt={pets[current].name}
            className="w-80 h-100 object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Right - Pet Info */}
        <motion.div
          key={`info-${pets[current].id}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Everybody Needs <br /> A Friend In Life.
          </h1>
          <p className="text-gray-700 leading-relaxed">{pets[current].desc}</p>

          {/* Replaced Button with normal button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl shadow-md">
            Buy Me
          </button>

          <p className="text-gray-600 text-sm">
            {pets[current].name} ({pets[current].age})
          </p>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <button
          onClick={prevPet}
          className="p-3 rounded-full bg-white shadow-md hover:bg-orange-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          onClick={nextPet}
          className="p-3 rounded-full bg-white shadow-md hover:bg-orange-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 flex flex-col items-center">
        <div className="w-8 h-8 border-2 border-gray-600 rounded-full flex items-center justify-center animate-bounce">
          ↓
        </div>
      </div>
    </section>
  );
}
