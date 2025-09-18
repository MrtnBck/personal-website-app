import Image from "next/image";

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
  logoPath: string;
};

export default function ExperienceItem({ experience }: { experience: EducationItemProps }) {
  return (
    <li className="text-center md:text-left flex flex-col gap-2 md:border md:border-secondary md:rounded-lg md:p-4 lg:p-8 mb-24 border-b border-secondary pb-12 last:mb-0 last:border-b-0  md:last:border-b-1">
      <div className="flex flex-col items-center md:flex-row justify-between md:items-start">
        <div className="">
          <h2 className=" mb-4 font-semibold ">{experience.position}</h2>
          <h3 className=" ">{experience.company}</h3>
          <h4 className=" font-space-grotesk text-secondary leading-tight">{experience.year}</h4>
          <h4 className=" font-space-grotesk text-secondary leading-tight">{experience.location}</h4>
        </div>
        <div className="mt-3.5 md:mt-0 md:ml-2 shrink-0 bg-foreground p-2  h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-lg flex items-center justify-center">
          <Image src={`${experience.logoPath}`} alt={`logo-${experience.company}`} width={150} height={150} />
        </div>
      </div>
      <div className="">
        <h3 className="mt-12 mb-4">
          Responsibilities<span className="h-2 w-2 rounded-full bg-emerald ml-1 inline-block"></span>
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.responsibilities.map((responsibility, index) => (
            <li
              key={index}
              className="list-none text-center   bg-secondary/20 rounded-lg p-6 hover:scale-105 transition-transform"
            >
              {responsibility}
            </li>
          ))}
        </ul>
        {experience.projects.length > 0 && (
          <div className="">
            <h3 className="mt-12 mb-4">
              Some Projects<span className="h-2 w-2 rounded-full bg-blue ml-1 inline-block"></span>
            </h3>
            <ul className="grid grid-cols-1  lg:grid-cols-2 gap-6">
              {experience.projects.map((project, index) => (
                <li
                  key={index}
                  className="list-none p-6 bg-secondary/20 rounded-lg hover:scale-105 transition-transform"
                >
                  {/* <strong>{project.name}</strong>: {project.description.join(" ")} */}
                  <h4 className="mb-4 text-center ">{project.name}</h4>
                  <p className="text-justify">{project.description.join(" ")}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}
