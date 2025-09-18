type EducationItemProps = {
  year: string;
  title: string;
  institution: string;
  location: string;
};

export default function EducationItem({ year, title, institution, location }: EducationItemProps) {
  return (
    <li className=" flex flex-col gap-2 mb-14">
      <h4 className=" font-space-grotesk text-secondary leading-tight ">{year}</h4>
      <h3 className=" leading-none mb-1">{title}</h3>
      <p className="leading-none">{institution}</p>
      {institution.includes("Udemy") ? (
        <a href={location} target="_blank" className="text-md leading-none">
          Link
        </a>
      ) : (
        <p className="leading-none">{location}</p>
      )}
    </li>
  );
}
