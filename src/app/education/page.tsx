import EducationItem from "@/components/EducationItem";

export default function Education() {
  const education = [
    {
      type: "university",
      year: "2019-2022",
      title: "Business Development",
      institution: "Óbuda University",
      location: "Budapest, Hungary",
    },
    {
      type: "university",
      year: "2015-2019",
      title: "Mechatronical Engineer",
      institution: "Óbuda University",
      location: "Budapest, Hungary",
    },
    {
      type: "certificate",
      year: "2025",
      title: "Cloud Computing Concepts and Master AWS Fundamentals",
      institution: "Udemy, Online Course",
      location: "https://www.udemy.com/course/introduction-to-cloud-computing-on-amazon-aws-for-beginners",
    },
    {
      type: "certificate",
      year: "2025",
      title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
      institution: "Udemy, Online Course",
      location: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      type: "certificate",
      year: "2024",
      title: "PHP From Scratch 2024 - Beginner To Advanced",
      institution: "Udemy, Online Course",
      location: "https://www.udemy.com/course/php-from-scratch-course",
    },
    {
      type: "certificate",
      year: "2023",
      title: "Vue - The Complete Guide (incl. Router & Composition API)",
      institution: "Udemy, Online Course",
      location: "https://www.udemy.com/course/vuejs-2-the-complete-guide/",
    },
    {
      type: "certificate",
      year: "2020",
      title: "The Web Development Bootcamp",
      institution: "Udemy, Online Course",
      location: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    },
  ];

  return (
    <div className="text-center md:text-left">
      <h1 className="text-center mt-8 mb-16">Education</h1>
      <div className="flex flex-col md:flex-row md:space-between">
        <div className="mb-20 md:mb-0 md:border md:border-secondary md:rounded-lg md:p-4 md:mr-4 lg:p-8 md:w-1/2 md:pr-2 ">
          <h2 className="mb-8 ">Higher Education</h2>
          <ul className="list-disc">
            {education.map(
              (item) => item.type === "university" && <EducationItem key={item.title + item.year} {...item} />
            )}
          </ul>
        </div>
        <div className="md:border md:border-secondary md:rounded-lg md:p-4 md:ml-4 lg:p-8 md:w-1/2 md:pl-2 ">
          <h2 className="mb-8 ">Certificates</h2>
          <ul className="list-disc">
            {education.map(
              (item) => item.type === "certificate" && <EducationItem key={item.title + item.year} {...item} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
