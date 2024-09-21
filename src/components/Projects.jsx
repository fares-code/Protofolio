import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Title Section */}
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 w-full lg:w-3/4 flex flex-col lg:flex-row items-start"
          >
            {/* Left: Project Image */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
            >
              <img
                src={project.image}
                className="rounded w-full mt-6 lg:max-w-xs"
                alt={project.title}
              />
            </motion.div>

            {/* Right: Project Details */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:ml-10"
            >
              {/* Project Title */}
              <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>

              {/* Project Description */}
              <p className="mb-2">{project.description}</p>

              {/* Links */}
              <div className="flex text-2xl gap-3 mb-4">
                <a
                  href={project.githubLink}
                   target="_blank"
                  className="text-xl"
               
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.Link}
                  
                  className="text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLink />
                </a>
              </div>

              {/* Technologies Used */}
              <div>
                {project.technologies.map((tec, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 text-sm px-2 py-1 font-medium text-purple-800"
                  >
                    {tec}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
