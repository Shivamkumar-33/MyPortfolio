import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Next.js", level: 40, category: "frontend" },

  // Backend
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = useMemo(
    () =>
      skills.filter(
        (skill) =>
          activeCategory === "all" || skill.category === activeCategory
      ),
    [activeCategory]
  );

  // duplicate for seamless loop
  const scrollingSkills = [...filteredSkills, ...filteredSkills];

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Infinite scrolling skills */}
        <div
          className="relative w-full overflow-hidden
          [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]"
        >
          <div className="flex gap-6 animate-skills-scroll">
            {scrollingSkills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[260px] bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <h3 className="font-semibold text-lg mb-4">
                  {skill.name}
                </h3>

                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="text-right mt-1 text-sm text-muted-foreground">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
