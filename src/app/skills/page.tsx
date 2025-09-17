import SkillCard from "@/components/SkillCard";

export default function Skills() {
  const skills = [
    {
      main: "frontend",
      categories: [
        {
          category: "languages",
          items: [
            {
              icon: "ant-design:html5-outlined",
              label: "HTML",
            },
            {
              icon: "tdesign:css3",
              label: "CSS3",
            },
            {
              icon: "teenyicons:javascript-outline",
              label: "JavaScript",
            },
            {
              icon: "teenyicons:typescript-outline",
              label: "TypeScript",
            },
          ],
        },
        {
          category: "frameworks",
          items: [
            {
              icon: "lineicons:vuejs",
              label: "Vue",
            },
            {
              icon: "mdi:react",
              label: "React",
            },
            {
              icon: "devicon-plain:nextjs",
              label: "Next.js",
            },
            {
              icon: "devicon-plain:jquery-wordmark",
              label: "jQuery",
            },
            {
              icon: "simple-icons:primevue",
              label: "PrimeVue",
            },
          ],
        },
        {
          category: "styling",
          items: [
            {
              icon: "lineicons:tailwindcss",
              label: "Tailwind CSS",
            },
            {
              icon: "simple-icons:sass",
              label: "SASS",
            },

            {
              icon: "file-icons:postcss",
              label: "PostCSS",
            },
          ],
        },
        {
          category: "buildTools",
          items: [
            {
              icon: "lineicons:vite",
              label: "Vite",
            },
            {
              icon: "proicons:webpack",
              label: "Webpack",
            },
          ],
        },
        {
          category: "stateManagement",
          items: [
            {
              icon: "simple-icons:pinia",
              label: "Pinia",
            },
            {
              icon: "simple-icons:redux",
              label: "Redux",
            },
            {
              icon: "simple-icons:react-context",
              label: "React Context API",
            },
          ],
        },
      ],
    },
    {
      main: "backend",
      categories: [
        {
          category: "all",
          items: [
            {
              icon: "mdi:nodejs",
              label: "Node.js",
            },
            {
              icon: "lineicons:php",
              label: "PHP",
            },
            {
              icon: "simple-icons:express",
              label: "Express",
            },
            {
              icon: "ph:file-sql-duotone",
              label: "SQL",
            },
            {
              icon: "simple-icons:mongodb",
              label: "MongoDB",
            },
          ],
        },
      ],
    },
    {
      main: "others",
      categories: [
        {
          category: "toolsDevOpsOthers",
          items: [
            {
              icon: "simple-icons:git",
              label: "Git",
            },

            {
              icon: "mdi:aws",
              label: "AWS",
            },
            {
              icon: "mdi:github",
              label: "GitHub",
            },
            {
              icon: "mdi:gitlab",
              label: "GitLab",
            },
            {
              icon: "solar:figma-bold",
              label: "Figma",
            },
          ],
        },
      ],
    },
  ];

  // Frontend skill categories configuration
  const frontendSkills = [
    { title: "Languages", category: "languages" },
    { title: "Frameworks", category: "frameworks" },
    { title: "Styling", category: "styling" },
    { title: "Build Tools", category: "buildTools" },
    { title: "State Management", category: "stateManagement" },
  ];

  const backendSkills = [{ title: "All", category: "all" }];

  const toolsDevOpsOthers = [{ title: "All", category: "all" }];

  return (
    <>
      <h2 className="text-4xl font-bold mt-8 mb-8">Skills</h2>

      {/* Frontend Development Section */}
      <section className="flex flex-col text-center mb-12">
        <div className="md:border md:border-secondary md:rounded-lg md:p-4 lg:p-8 flex flex-col items-center">
          <h3 className="text-2xl mb-6">Frontend Development</h3>
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {frontendSkills.map((skillGroup) => (
              <SkillCard
                key={"frontend-" + skillGroup.category}
                skills={skills}
                title={skillGroup.title}
                category={skillGroup.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Backend Development Section */}
      <section className="flex flex-col text-center mb-12">
        <div className="md:border md:border-secondary md:rounded-lg md:p-4 lg:p-8 flex flex-col items-center">
          <h3 className="text-2xl mb-6">Backend Development</h3>
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {backendSkills.map((skillGroup) => (
              <SkillCard
                key={"backend-" + skillGroup.category}
                skills={skills}
                title={skillGroup.title}
                category={skillGroup.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Others Section */}
      <section className="flex flex-col text-center mb-12">
        <div className="md:border md:border-secondary md:rounded-lg md:p-4 lg:p-8 flex flex-col items-center">
          <h3 className="text-2xl mb-6">Tooling & DevOps & Others</h3>
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {toolsDevOpsOthers.map((skillGroup) => (
              <SkillCard
                key={"others-" + skillGroup.category}
                skills={skills}
                title={skillGroup.title}
                category={skillGroup.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
