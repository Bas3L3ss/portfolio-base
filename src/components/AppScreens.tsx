import { motion } from "framer-motion";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AppScreen from "./AppScreen";
import {
  ChevronRight,
  Github,
  LinkedinIcon,
  Mail,
  Moon,
  Phone,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkedIn, Linux } from "developer-icons";
import BlogCard from "./BlogCard";
import Markdown from "react-markdown";
import { GITHUB_URL, LINKEDIN_URL } from "@/constants";
import { formSchema } from "@/schema";
import {
  FaMapMarkerAlt,
  FaLaptopCode,
  FaAward,
  FaGraduationCap,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
  FaBrain,
} from "react-icons/fa";
import Resume from "./icon/Resume";

const ExperienceScreen = ({ onBack }: { onBack: () => void }) => {
  const experiences = [
    {
      title:
        "Currently in search of professional internship working experience ",
      company: "Hire me!",
      period: "2025-2027",
      description: "You won't regret hiring me",
      type: "work",
    },
  ];

  return (
    <AppScreen title="Experience" onBack={onBack}>
      <section className="p-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-8 relative"
          >
            <div className="flex items-start">
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-2" />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.company}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {exp.period}
                </p>
                <p className="mt-2 text-sm">{exp.description}</p>
              </div>
            </div>
            {index < experiences.length - 1 && (
              <div className="absolute left-1.5 top-4 w-px h-16 bg-gray-300 dark:bg-gray-700" />
            )}
          </motion.div>
        ))}
      </section>
    </AppScreen>
  );
};

const AboutScreen = ({ onBack }: { onBack: () => void }) => {
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
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AppScreen title="About Me" onBack={onBack}>
      <div className="flex flex-col h-full overflow-y-auto bg-gray-50 dark:bg-gray-900   ">
        <motion.div className="flex flex-col items-center pt-6 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div className="relative w-24 h-24 mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 opacity-20 blur-md" />
            <div className="relative w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              {/* Profile image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 text-4xl">
                PTH
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Pham Thien Hung
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Full-Stack Engineer | Aspiring AI Systems Engineer
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href={"mailto:phamthen.hun060906@gmail.com"}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-blue-500"
            >
              <Mail size={20} />
            </a>
            <a
              href={GITHUB_URL}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
            >
              <Github size={20} />
            </a>
            <a
              href={LINKEDIN_URL}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-blue-600"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          className="p-4  space-y-6 "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* About Me Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              About
            </h3>
            <div className="text-gray-700 dark:text-gray-300 text-sm">
              <Markdown>
                Results-driven **Full-Stack Engineer** specializing in backend
                architecture, scalable applications, and infrastructure
                optimization. **Seeking remote internships opportunities**. with
                a strong drive to contribute and **transitioning into the world
                of AI**.
              </Markdown>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Personal Information
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
              <li className="flex items-center">
                <span className="mr-3 text-blue-500">🎂</span>
                <span>Birthday: 6 Sep 2007</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500">🎓</span>
                <span>Education: LTT College for Associate Degree</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500">🌍</span>
                <span>Location: Vietnam, HCMC, Tan Binh</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500">
                  <Resume />
                </span>
                <a href="/cvs.pdf" download="cvs.pdf">
                  My Resume
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Quick Facts
            </h3>
            <ul className="space-y-3">
              {[
                {
                  icon: <FaLaptopCode />,
                  text: "Current expertise is Full Stack Developer",
                },
                {
                  icon: <FaAward />,
                  text: "I've grinded 100+ Leetcode problems",
                },
                {
                  icon: <FaGraduationCap />,
                  text: "Have tackled and researched multiple aspects of software architecture",
                },
                {
                  icon: <FaRocket />,
                  text: "Simply enjoy building hard software from scratch",
                },

                {
                  icon: <Moon />,
                  text: "Love dark mode :)",
                },
                {
                  icon: <Linux size={20} />,
                  text: "Linux Ubuntu user",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                  <span className="mr-3 text-blue-500">{item.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Soft Skills
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
              {[
                {
                  icon: <FaUsers className="mr-3 text-green-500" />,
                  text: "Strong teamwork and collaboration",
                },
                {
                  icon: <FaLightbulb className="mr-3 text-yellow-500" />,
                  text: "Critical thinking and problem-solving",
                },
                {
                  icon: <FaComments className="mr-3 text-blue-500" />,
                  text: "Effective communication and leadership",
                },
                {
                  icon: <FaClock className="mr-3 text-red-500" />,
                  text: "Time management and adaptability",
                },
                {
                  icon: <FaBrain className="mr-3 text-purple-500" />,
                  text: "Self-learning and continuous improvement",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Philosophy Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-4  shadow-sm "
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Philosophy
            </h3>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-gray-700 dark:text-gray-300 text-sm italic">
              &quot;Push my limits. Build real things. Make an impact.&quot;
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AppScreen>
  );
};

export default AboutScreen;

const TestimonialsScreen = ({ onBack }: { onBack: () => void }) => {
  const testimonials = [
    {
      name: "Khánh Vy",
      position: "Tech University Student",
      text: "A hardworking and driven individual who thrives in programming and technical research.",
      company: "Senica Polytechnic",
      avatar: "./vivan.png",
      likes: 24,
    },
    {
      name: "Chí Thắng",
      position: "Aspiring AI Engineer",
      text: "Possesses a broad understanding of software development and deep expertise in IT.",
      company: "HCMUTE University",
      avatar: "./cthang.png",
      likes: 18,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AppScreen title="Testimonials" onBack={onBack}>
      <div className="  dark:bg-black min-h-full">
        <motion.section
          className="p-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
            >
              {/* Header with avatar and name */}
              <div className="flex items-center space-x-3 mb-3">
                <Avatar className="w-10 h-10 rounded-full border-2 border-blue-100 dark:border-blue-900 shadow-sm">
                  <AvatarImage
                    src={testimonial.avatar || undefined}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {testimonial.name.split(" ")[0][0] +
                      testimonial.name.split(" ")[1][0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.position}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </AppScreen>
  );
};

function CTAScreen({ onBack }: { onBack: () => void }) {
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setIsSending(true);
    setSendResult(null);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSendResult("Message sent successfully!");
      reset();
    } catch {
      setSendResult("Failed to send message. Please try again.");
    }
    setIsSending(false);
  };

  return (
    <AppScreen onBack={onBack} title="Contact">
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="rounded-xl overflow-hidden mb-6 bg-white/10 backdrop-blur-md">
          <a
            href="mailto:phamthen.hun060906@gmail.com"
            className="flex items-center p-4 border-b border-gray-700/30"
            aria-label="Email me"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
              <Mail className="h-5 w-5 text-blue-400 dark:text-blue-300" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Email
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                phamthen.hun060907@gmail.com
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </a>

          <a
            href="tel:+84865974700"
            className="flex items-center p-4"
            aria-label="Call me"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
              <Phone className="h-5 w-5 text-green-400 dark:text-green-300" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Phone
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                0865974700
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </a>
        </div>

        <div className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-md mb-6">
          <div className="p-4 border-b border-gray-700/30">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Send a Message
            </h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
            <div>
              <Input
                {...register("email")}
                placeholder="Your email"
                type="email"
                className="w-full bg-gray-800/50 border-0 focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 text-gray-900 dark:text-gray-100 rounded-lg"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            <div>
              <Textarea
                {...register("message")}
                placeholder="Your message"
                rows={4}
                className="w-full bg-gray-800/50 border-0 focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 text-gray-900 dark:text-gray-100 rounded-lg"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.message.message as string}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 font-medium transition-colors"
            >
              {isSending ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </Button>

            {sendResult && (
              <div
                className={`text-center text-sm p-2 rounded-lg ${
                  sendResult.includes("success")
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {sendResult}
              </div>
            )}
          </form>
        </div>

        <div className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
          <div className="p-4 border-b border-gray-700/30">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Connect with me
            </h3>
          </div>

          <div className="p-4 flex justify-around">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-white" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700/50 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn className="h-6 w-6 text-blue-400 dark:text-blue-300" />
            </a>
          </div>
        </div>
      </div>
    </AppScreen>
  );
}

function BlogScreen({ onBack }: { onBack: () => void }) {
  const blogs = [
    // {
    //   id: 1,
    //   title: "Getting Started with Next.js",
    //   summary: "Learn how to build modern web applications with Next.js",
    //   image: "/placeholder.svg?height=200&width=300",
    //   link: "/blog/getting-started-with-nextjs",
    // },
    // {
    //   id: 2,
    //   title: "Mastering TypeScript",
    //   summary:
    //     "Dive deep into TypeScript and improve your JavaScript development",
    //   image: "/placeholder.svg?height=200&width=300",
    //   link: "/blog/mastering-typescript",
    // },
    // {
    //   id: 3,
    //   title: "The Power of Tailwind CSS",
    //   summary: "Discover how Tailwind CSS can streamline your styling workflow",
    //   image: "/placeholder.svg?height=200&width=300",
    //   link: "/blog/power-of-tailwind-css",
    // },
  ];
  return (
    <AppScreen title="My Blogs" onBack={onBack}>
      <section className="p-6 space-y-8">
        <div className="flex flex-col gap-4">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog.id} {...blog} />)
          ) : (
            <p className="text-gray-500 text-center">No blogs yet.</p>
          )}
        </div>
      </section>
    </AppScreen>
  );
}

export {
  AboutScreen,
  ExperienceScreen,
  TestimonialsScreen,
  BlogScreen,
  CTAScreen,
};
