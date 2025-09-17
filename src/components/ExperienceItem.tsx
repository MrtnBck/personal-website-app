import { Icon } from "@iconify/react";

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
    <li className="flex flex-col gap-2 mb-14">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-3xl font-semibold mb-2">{experience.company}</h4>
          <h3 className="text-2xl ">{experience.position}</h3>
          <h5 className="text-xl font-space-grotesk text-secondary leading-tight mb-2">{experience.year}</h5>
          <h4 className="text-xlfont-space-grotesk text-secondary leading-tight">{experience.location}</h4>
        </div>
        <div className="bg-foreground p-2  h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-lg flex items-center justify-center">
          <Image src={`${experience.logoPath}`} alt={`logo-${experience.company}`} width={150} height={150} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-between ">
        <div className={` md:pr-2 ${experience.projects.length > 0 ? "md:w-1/2" : "md:w-full"}`}>
          <h5 className=" text-base font-semibold mt-5 mb-3">Responsibilities</h5>
          <ul className="">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="list-none mb-4 md:mb-6 text-justify py-2 bg-secondary/20 rounded-lg px-3">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        {experience.projects.length > 0 && (
          <div className="md:w-1/2 md:pl-2 ">
            <h5 className="font-semibold mt-5 mb-3">Some Projects</h5>
            <ul className="">
              {experience.projects.map((project, index) => (
                <li key={index} className="list-none mb-4 md:mb-6 text-justify py-2 bg-secondary/20 rounded-lg px-3">
                  <strong>{project.name}</strong>: {project.description.join(" ")}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}
