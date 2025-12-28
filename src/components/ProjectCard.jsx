import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="card card-hover overflow-hidden group flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-40 sm:h-48 object-cover"
            variants={imageVariants}
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.div
            className="w-full h-40 sm:h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center"
            variants={imageVariants}
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
            transition={{ duration: 0.3 }}
          >
            <div className="text-primary-600 dark:text-primary-400 text-4xl font-bold opacity-50">
              {project.title.charAt(0)}
            </div>
          </motion.div>
        )}

        {/* Overlay */}
        <motion.div
          variants={overlayVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          {project.comingSoon ? (
            <div className="text-center">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                <Eye className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Coming Soon</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View source code of ${project.title}`}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Project Content */}
      {!project.comingSoon ? (
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 pr-2 flex-1">
              {project.title}
            </h3>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="p-1 text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View details of ${project.title}`}
            >
              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.button>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4 line-clamp-3 min-h-[3.75rem] sm:min-h-[4.5rem]">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 min-h-[2rem]">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Links - Always at bottom */}
          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-1 sm:space-y-0 mt-auto">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                whileHover={{ x: 2 }}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Live Demo</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
                whileHover={{ x: 2 }}
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Source</span>
              </motion.a>
            )}
          </div>
        </div>
      ) : (
        <div className="p-6 flex items-center justify-center h-32">
          <div className="text-center">
            <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 mb-2">
              Coming Soon
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
};

export default ProjectCard;
