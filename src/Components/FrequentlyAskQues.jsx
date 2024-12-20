import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ_DATA = [
  {
    question: "What colours does Galaxy Z Fold6 come in?",
    answer:
      "Galaxy Z Fold6 is available in Silver Shadow, Pink and Navy. Crafted Black and White are special colours found only on Samsung.com",
  },
  {
    question: "What Galaxy AI features does Galaxy Z Fold6 have?",
    answer:
      "Galaxy Z Fold6 uses AI throughout many apps. For example, the camera uses AI Zoom; Photo Assist uses AI to fill backgrounds and move, resize or erase objects. Productivity tools include Interpreter, which works offline to translate conversations in real-time, and Live Translate, which facilitates calls. Composer feature for Chat Assist helps draft messages efficiently; Note Assist transcribes recordings and organizes notes.",
  },
  {
    question: "Why should I switch to Galaxy Z Fold6?",
    answer:
      "Galaxy Z Fold6 comes with a big screen, with a 15.89 cm Cover Screen and 19.32 cm Main Screen. Equipped with Galaxy AI, it is the perfect setup for high-powered productivity. Furthermore, Galaxy Z Fold6 is ideal for watching videos or an immersive gaming experience. Galaxy Z Fold6 hits a peak brightness of 2600 nits, a boost from Galaxy Z Fold5's 1750 nits. Its 3 Step Vision Booster also adjusts colour according to illuminance, keeping the display clear enough even outdoors or while on the go.",
  },
  {
    question: "Can Galaxy Z Fold6 use S Pen?",
    answer:
      "S Pen enables productive usage of Galaxy AI. While S Pen is supported on the Main Screen, Galaxy Z Fold6 does not come with an S Pen. Purchase the S Pen Fold Edition or S Pen Case to enjoy smooth note-taking and perform Air Commands.",
  },
  {
    question: "How long does the battery last on Galaxy Z Fold6?",
    answer:
      "A single charge lasts longer on Galaxy Z Fold6 than Galaxy Z Fold5. Though Galaxy Z Fold6 features the same 4400mAh (typical) battery as Galaxy Z Fold5, an advanced processor allows for more efficient power usage, so you can listen up to 77 hours of music or watch up to 23 hours of video.",
  },
  {
    question: "Why is Galaxy Z Fold6 good for gaming?",
    answer:
      "Its software has upgraded to Snapdragon® 8 Gen 3 Mobile Platform for Galaxy, a high-performance processor, to enable silky-smooth gaming. Besides featuring Vulkan API and the newest AP, its 3 Step Vision Booster also adjusts colour according to illuminance. Galaxy Z Fold6 hits a peak brightness of 2600 nits, a boost from Galaxy Z Fold5's 1750 nits. Vapor Chamber area also increased to support extended periods of heavy gameplay.",
  },
  {
    question: "How is Galaxy Z Fold6 different from Galaxy Z Fold5?",
    answer:
      "At 239 grams, Galaxy Z Fold6 is lighter and slimmer than Galaxy Z Fold5, making it more pocketable. An upgraded processor elevates Galaxy Z Fold6 performance across the board with CPU performance improved by 18%, GPU by 19% and NPU by 42% compared to Galaxy Z Fold5. Last but not least, the latest and most advanced version of Galaxy AI ups your productivity game.",
  },
  {
    question: "What kinds of cameras does Galaxy Z Fold6 have?",
    answer:
      "Galaxy Z Fold6 features a 10MP Front/Cover Camera. The Main Screen has a hidden 4MP Under Display Camera. And on the rear, Galaxy Z Fold6 is equipped with a 50MP Wide-angle Camera, 12MP Ultra Wide Camera and 10MP Telephoto Camera. Throughout your day, take crisp, clear photos enhanced by an advanced processor and AI-powered software. Download Expert RAW for even more creative control of Galaxy Z Fold6's pro-grade cameras.",
  },
  {
    question: "How durable is Galaxy Z Fold6?",
    answer:
      "Galaxy Z Fold6 features the durable dual rail FlexHinge and carries a IP48 rating for water resistance. Its front and back glass are applied with the latest Corning® Gorilla® Glass Victus® 2 material and metal frame with Armor Aluminum.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      gsap.to(itemRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
      });
    }
  }, [isInView, index]);

  return (
    <motion.div
      ref={itemRef}
      variants={itemVariants}
      className="border-b border-blue-100 overflow-hidden last:border-none opacity-0 translate-y-8"
      initial={false}
    >
      <motion.button
        className="w-full py-6 px-6 flex justify-between items-center bg-white hover:bg-blue-50 transition-all duration-300 group"
        onClick={onClick}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
      >
        <span className="text-lg font-medium text-left text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {question}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen
              ? "rgb(59, 130, 246)"
              : "rgb(219, 234, 254)",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-full p-2 ml-4 flex-shrink-0"
        >
          <ChevronUp
            className={`w-5 h-5 ${isOpen ? "text-white" : "text-blue-500"}`}
          />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden bg-gradient-to-b from-blue-50 to-white"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 text-gray-600 leading-relaxed"
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FrequentlyAskQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Card container animation
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-full mx-auto py-16 px-4 min-h-screen bg-gradient-to-br from-gray-700 via-gray-700 to-gray-700"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1
          ref={titleRef}
          className="text-4xl font-bold text-center mb-4 text-green-500 opacity-0"
        >
          Frequently Asked Questions
        </h1>

        <p
          ref={subtitleRef}
          className="text-center text-gray-300 mb-12 opacity-0"
        >
          Everything you need to know about the Galaxy Z Fold6
        </p>

        <div
          ref={cardRef}
          className="bg-white w-[50vw] mx-auto rounded-2xl shadow-xl overflow-hidden border border-blue-100 opacity-0"
        >
          {FAQ_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FrequentlyAskQuestions;
