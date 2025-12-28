import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
} from "lucide-react";
import PageBackground from "../components/PageBackground";
import SplashCursor from "../components/SplashCursor";
import { usePerformance } from "../contexts/PerformanceContext";
import { useCursor } from "../contexts/CursorContext";

const Contact = () => {
  const { currentTier } = usePerformance();
  const { isEnabled: isCursorEnabled } = useCursor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copied, setCopied] = useState({ email: false, phone: false });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with actual form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For demo purposes, we'll just show success
      // In real implementation, you would:
      // 1. Send data to Formspree, Netlify Forms, or your backend
      // 2. Handle the response appropriately

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("nazzall.ahmed@gmail.com");
      setCopied((prev) => ({ ...prev, email: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, email: false })), 2000);
    } catch (err) {
      // Failed to copy email
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText("+962798546036");
      setCopied((prev) => ({ ...prev, phone: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, phone: false })), 2000);
    } catch (err) {
      // Failed to copy phone
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nazzall.ahmed@gmail.com",
      action: copyEmail,
      clickable: true,
      href: "mailto:nazzall.ahmed@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+962798546036",
      action: copyPhone,
      clickable: true,
      href: "tel:+962798546036",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Amman, Jordan",
      action: null,
      clickable: false,
      href: null,
    },
  ];

  return (
    <div className="min-h-screen pt-16 relative">
      {/* SplashCursor Effect */}
      {isCursorEnabled && <SplashCursor key={`splash-${currentTier}`} />}

      {/* Page Background */}
      <PageBackground variant="contact" opacity={0.08} />

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
              >
                <span className="gradient-text">Get In Touch</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-2"
              >
                I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can work together to bring your
                ideas to life.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
            >
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="card p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 sm:mb-6">
                    Send me a message
                  </h2>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 sm:space-y-6"
                  >
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 transition-colors duration-200 text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 transition-colors duration-200 text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        {...register("subject")}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 transition-colors duration-200 text-sm sm:text-base"
                        placeholder="What's this about?"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        {...register("message", {
                          required: "Message is required",
                        })}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 transition-colors duration-200 resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2 text-green-600 dark:text-green-400"
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span>
                          Message sent successfully! I'll get back to you soon.
                        </span>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2 text-red-600 dark:text-red-400"
                      >
                        <AlertCircle className="w-5 h-5" />
                        <span>Failed to send message. Please try again.</span>
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                    Let's connect
                  </h2>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                    I'm always excited to hear about new opportunities and
                    interesting projects. Whether you have a question, want to
                    collaborate, or just want to say hi, I'd love to hear from
                    you!
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const CardComponent = info.clickable
                      ? motion.a
                      : motion.div;

                    return (
                      <CardComponent
                        key={info.title}
                        href={info.clickable ? info.href : undefined}
                        className={`card p-6 flex items-center space-x-4 ${
                          info.clickable
                            ? "cursor-pointer hover:shadow-lg transition-all duration-200"
                            : ""
                        }`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        target={info.clickable ? "_blank" : undefined}
                        rel={info.clickable ? "noopener noreferrer" : undefined}
                      >
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                            {info.title}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-400">
                            {info.value}
                          </p>
                        </div>
                        {info.action && (
                          <motion.button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              info.action();
                            }}
                            className="p-2 text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Copy ${info.value}`}
                          >
                            {copied[info.title.toLowerCase()] ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Copy className="w-5 h-5" />
                            )}
                          </motion.button>
                        )}
                      </CardComponent>
                    );
                  })}
                </div>

                {/* Additional Info */}
                <div className="card p-6">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    Response Time
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    I typically respond to messages within 24 hours. For urgent
                    inquiries, feel free to reach out via phone.
                  </p>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    Availability
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    I'm currently available for freelance projects and full-time
                    opportunities. Let's discuss how we can work together!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
