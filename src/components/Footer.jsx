import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ahmednazzall",
      color: "hover:text-neutral-900 dark:hover:text-neutral-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ahmednazzall/",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:nazzall.ahmed@gmail.com",
      color: "hover:text-primary-600",
    },
  ];

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Ahmad Nazzal"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base">
                Ahmad Nazzal
              </span>
            </Link>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 max-w-md">
              MERN & PERN stack developer passionate about creating exceptional
              digital experiences with modern technologies and mentoring the
              next generation of developers.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1.5 sm:p-2 rounded-lg bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 transition-colors duration-200 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 text-sm sm:text-base">
              Get In Touch
            </h3>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              <p>nazzall.ahmed@gmail.com</p>
              <p>+962798546036</p>
              <p>Amman, Jordan</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Ahmad Nazzal. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-1.5 sm:p-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
