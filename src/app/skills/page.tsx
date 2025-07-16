import SkillItem from "@/components/SkillItem";

export default function Skills() {
  const skills = [
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
    {
      category: "backend",
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
          icon: "ph:file-sql-duotone",
          label: "SQL",
        },
        {
          icon: "simple-icons:express",
          label: "Express",
        },
        {
          icon: "simple-icons:mongodb",
          label: "MongoDB",
        },
      ],
    },
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
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mt-8 ">Skills</h2>
      <div className="flex flex-col text-center">
        <h3 className="text-2xl  mt-6">Frontend Development</h3>
        <h4 className="text-xl mt-6 mb-4 text-secondary font-space-grotesk">Languages</h4>
        <ul className="list-disc ">
          {skills
            .find((skill) => skill.category === "languages")
            ?.items.map((item) => (
              <SkillItem key={item.label} item={item} />
            ))}
        </ul>

        <h4 className="text-xl mt-6 mb-4 text-secondary font-space-grotesk">Frameworks</h4>
        <ul className="list-disc">
          {skills
            .find((skill) => skill.category === "frameworks")
            ?.items.map((item) => (
              <SkillItem key={item.label} item={item} />
            ))}
        </ul>
        <h4 className="text-xl mt-6 mb-4 text-secondary font-space-grotesk">Styling</h4>
        <ul className="list-disc">
          {skills
            .find((skill) => skill.category === "styling")
            ?.items.map((item) => (
              <SkillItem key={item.label} item={item} />
            ))}
        </ul>
        <h4 className="text-xl mt-6 mb-4 text-secondary font-space-grotesk">Build Tools</h4>
        <ul className="list-disc">
          {skills
            .find((skill) => skill.category === "buildTools")
            ?.items.map((item) => (
              <SkillItem key={item.label} item={item} />
            ))}
        </ul>
        <h4 className="text-xl mt-6 mb-4 text-secondary font-space-grotesk">State Management</h4>
        <ul className="list-disc">
          {skills
            .find((skill) => skill.category === "stateManagement")
            ?.items.map((item) => (
              <SkillItem key={item.label} item={item} />
            ))}
        </ul>

        <h3 className="text-2xl mt-6">Backend Development</h3>
        <h4 className="text-xl mt-6 mb-4 text-secondary font-space-grotesk">
          Languages & <br />
          Frameworks
        </h4>
        <ul className="list-disc">
          {skills
            .find((skill) => skill.category === "backend")
            ?.items.map((item) => (
              <SkillItem key={item.label} item={item} />
            ))}
        </ul>
        <h4 className="text-xl mt-6 mb-4 text-secondary font-space-grotesk">
          Tooling & <br />
          DevOps & Others
        </h4>
        <ul className="list-disc">
          {skills
            .find((skill) => skill.category === "toolsDevOpsOthers")
            ?.items.map((item) => (
              <SkillItem key={item.label} item={item} />
            ))}
        </ul>
      </div>
    </div>
  );
}
