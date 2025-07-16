type EducationItemProps = {
  year: string;
  company: string;
  position: string;
  description: string;
  location: string;
  responsibilities: string[];
  projects: {
    name: string;
    description: string[];
  }[];
};

export default function ExperienceItem({ experience }: { experience: EducationItemProps }) {
  return (
    <li className="flex flex-col gap-2 mb-14">
      <h5 className="text-base font-space-grotesk text-secondary leading-none ">{experience.year}</h5>
      <h4 className="text-xl leading-none mb-1 font-space-grotesk text-secondary">{experience.company}</h4>
      <h3 className="text font-semibold leading-none">{experience.position}</h3>
      <h5 className="font-semibold mt-5">Responsibilities</h5>
      <ul className="pl-5">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="list-none list-inside mb-4 text-justify">
            {responsibility}
          </li>
        ))}
      </ul>
      {experience.projects.length > 0 && (
        <>
          <h5 className="font-semibold mt-5">Projects</h5>
          <ul className="pl-5">
            {experience.projects.map((project, index) => (
              <li key={index} className="list-none list-inside mb-4 text-justify">
                <strong>{project.name}</strong>: {project.description.join(" ")}
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}
