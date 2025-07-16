type EducationItemProps = {
  year: string;
  title: string;
  institution: string;
  location: string;
};

export default function EducationItem({ year, title, institution, location }: EducationItemProps) {
  return (
    <div className="flex flex-col gap-2 mb-14">
      <h5 className="text-base font-space-grotesk text-secondary leading-tight ">{year}</h5>
      <h4 className="text-xl font-semibold leading-none mb-1">{title}</h4>
      <p className="text-md leading-none">{institution}</p>
      {institution.includes("Udemy") ? (
        <a href={location} className="text-md leading-none">
          Link
        </a>
      ) : (
        <p className="text-md leading-none">{location}</p>
      )}
    </div>
  );
}
