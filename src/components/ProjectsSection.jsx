import { ArrowRight, ExternalLink, Github } from "lucide-react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "motion/react";
import { useRef } from "react";

/* ===================== PROJECT DATA ===================== */

const projects = [
  {
    id: 1,
    title: "Chat-Now | Real-Time Chat Application",
    description:
      "A real-time 1:1 chat application with JWT authentication and low-latency messaging using WebSockets.",
    image: "/projects/chat-now.png",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
    demoUrl: "#",
    githubUrl: "https://github.com/Shivamkumar-33",
  },
  {
    id: 2,
    title: "Smart Classroom & AI Timetable Scheduler",
    description:
      "A full-stack system that automates timetable generation using AI with conflict detection and fallback logic.",
    image: "/projects/smart-classroom.png",
    tags: ["MERN", "Tailwind", "Google Gemini API", "JWT"],
    demoUrl: "https://smart-class-room-woad.vercel.app/",
    githubUrl: "https://github.com/Shivamkumar-33",
  },
  {
    id: 3,
    title: "EaseMyRoom | PG & Flat Rental Platform",
    description:
      "A responsive web platform for browsing and managing PG/Flat listings with search and enquiry features.",
    image: "/projects/easemyroom.png",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    demoUrl: "https://easemyroom.daapen.com/index.php",
    githubUrl: "https://github.com/Shivamkumar-33",
  },
  {
    id: 4,
    title: "Smart Classroom & AI Timetable Scheduler",
    description:
      "A full-stack system that automates timetable generation using AI with conflict detection and fallback logic.",
    image: "/projects/smart-classroom.png",
    tags: ["MERN", "Tailwind", "Google Gemini API", "JWT"],
    demoUrl: "https://smart-class-room-woad.vercel.app/",
    githubUrl: "https://github.com/Shivamkumar-33",
  },
  {
    id: 5,
    title: "Smart Classroom & AI Timetable Scheduler",
    description:
      "A full-stack system that automates timetable generation using AI with conflict detection and fallback logic.",
    image: "/projects/smart-classroom.png",
    tags: ["MERN", "Tailwind", "Google Gemini API", "JWT"],
    demoUrl: "https://smart-class-room-woad.vercel.app/",
    githubUrl: "https://github.com/Shivamkumar-33",
  },
];

/* ===================== FADE MASK ===================== */

const transparent = "#0000";
const opaque = "#000";

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} 20%, ${opaque} 80%, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (v) => {
    if (v === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} 80%, ${transparent})`
      );
    } else if (v === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} 20%, ${opaque})`
      );
    } else {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} 20%, ${opaque} 80%, ${transparent})`
      );
    }
  });

  return maskImage;
}

/* ===================== MAIN ===================== */

export const ProjectsSection = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Where performance meets user experience.
        </p>

        {/* PROGRESS RING */}
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="absolute -top-2 left-4 rotate-[-90deg]"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            strokeWidth="8"
            className="stroke-muted"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            strokeWidth="8"
            className="stroke-primary"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>

        {/* SCROLL CONTAINER */}
        <motion.div
          ref={scrollRef}
          style={{
            maskImage,
            WebkitMaskImage: maskImage,
          }}
          className="flex gap-6 overflow-x-auto py-8 px-2 snap-x snap-mandatory scroll-smooth"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="snap-start min-w-[320px] bg-card rounded-lg overflow-hidden shadow-xs"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border rounded-full bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a href={project.demoUrl} target="_blank">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} target="_blank">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button inline-flex items-center gap-2"
            href="https://github.com/shivamkumar-33"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
