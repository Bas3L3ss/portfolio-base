import { GITHUB_URL, LINKEDIN_URL } from "@/constants";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full text-center mt-16 p-6 bg-slate-300 dark:text-white text-black dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Pham Thien Hung</h2>
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-600 transition duration-300 dark:text-gray-300 dark:hover:text-indigo-500"
        >
          <Linkedin className="text-3xl" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 transition duration-300 dark:text-gray-300 dark:hover:text-gray-400"
        >
          <Github className="text-3xl" />
        </a>
      </div>
      <p className="text-sm text-gray-400 dark:text-gray-300">
        Thank you for visiting my portfolio!
      </p>
    </footer>
  );
};

export default Footer;
