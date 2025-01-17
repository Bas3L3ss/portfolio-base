import { motion } from "framer-motion";
import AppScreen from "./AppScreen";
import { ExternalLink } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";

const ExperienceScreen = ({ onBack }: { onBack: () => void }) => {
  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description:
        "Leading development of complex web applications using React and Next.js",
      type: "work",
    },
    {
      title: "Web Developer",
      company: "StartUp Inc",
      period: "2018 - 2021",
      description:
        "Developed and maintained various client websites and web applications",
      type: "work",
    },
    {
      title: "Bachelor of Science in Computer Science",
      company: "University Name",
      period: "2014 - 2018",
      description:
        "Graduated with honors, specializing in web technologies and software engineering",
      type: "education",
    },
  ];

  return (
    <AppScreen title="Experience" onBack={onBack}>
      <div className="p-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
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
      </div>
    </AppScreen>
  );
};

// About Screen Component
const AboutScreen = ({ onBack }: { onBack: () => void }) => (
  <AppScreen title="About Me" onBack={onBack}>
    <div className="p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 dark:bg-gray-700 mb-4" />
        <h2 className="text-xl font-bold">Pham Thien Hung</h2>
        <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <p className="text-gray-600 dark:text-gray-400">
          A passionate developer with over 5 years of experience in creating
          innovative web solutions. I specialize in React, Next.js, and modern
          web technologies.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Quick Facts</h3>
          <ul className="space-y-2">
            <li>🌍 Based in Vietnam</li>
            <li>💻 Full Stack Developer</li>
            <li>🚀 Open Source Contributor</li>
            <li>📚 Continuous Learner</li>
          </ul>
        </div>
      </motion.div>
    </div>
  </AppScreen>
);

const TestimonialsScreen = ({ onBack }: { onBack: () => void }) => {
  const testimonials = [
    {
      name: "John Doe",
      position: "Software Engineer",
      text: "This is an amazing platform! It really helped me streamline my work process and collaborate more efficiently with my team.",
      company: "Tech Corp",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with real avatar URL
    },
    {
      name: "Jane Smith",
      position: "Product Manager",
      text: "The user interface is incredibly intuitive. I've never experienced such a smooth workflow before. Highly recommend it!",
      company: "Innovative Solutions",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg", // Replace with real avatar URL
    },
    {
      name: "Michael Brown",
      position: "UX Designer",
      text: "The design tools provided helped us create a fantastic user experience for our customers. Couldn't have asked for more.",
      company: "Design Studios",
      avatar: "", // No avatar, will fall back to initials
    },
  ];

  return (
    <AppScreen title="Testimonials" onBack={onBack}>
      <div className="p-6 space-y-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex items-start space-x-6"
          >
            {/* Avatar with Fallback */}
            <Avatar className="w-16 h-16 rounded-full border border-gray-200 dark:border-gray-600">
              <AvatarImage
                src={testimonial.avatar || undefined}
                alt={testimonial.name}
              />
              <AvatarFallback>
                {testimonial.name.split(" ")[0][0] +
                  testimonial.name.split(" ")[1][0]}{" "}
                {/* Initials */}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position} at {testimonial.company}
                  </span>
                </div>
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <ExternalLink size={16} />
                </motion.a>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 italic">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </AppScreen>
  );
};

export { AboutScreen, ExperienceScreen, TestimonialsScreen };
