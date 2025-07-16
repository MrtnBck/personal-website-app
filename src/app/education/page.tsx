import EducationItem from "@/components/EducationItem";

export default function Education() {
  const education = [
    {
      year: "2019-2022",
      title: "Business Development",
      institution: "Óbuda University",
      location: "Budapest, Hungary",
    },
    {
      year: "2015-2019",
      title: "Mechatronical Engineer",
      institution: "Óbuda University",
      location: "Budapest, Hungary",
    },
    {
      year: "2025",
      title: "Cloud Computing Concepts and Master AWS Fundamentals",
      institution: "Udemy, Online Course",
      location: "https://www.udemy.com/course/introduction-to-cloud-computing-on-amazon-aws-for-beginners",
    },
    {
      year: "2025",
      title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
      institution: "Udemy, Online Course",
      location: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      year: "2024",
      title: "PHP From Scratch 2024 - Beginner To Advanced",
      institution: "Udemy, Online Course",
      location: "https://www.udemy.com/course/php-from-scratch-course",
    },
    {
      year: "2023",
      title: "Vue - The Complete Guide (incl. Router & Composition API)",
      institution: "Udemy, Online Course",
      location: "https://www.udemy.com/course/vuejs-2-the-complete-guide/",
    },
    {
      year: "2020",
      title: "The Web Development Bootcamp",
      institution: "Udemy, Online Course",
      location: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mt-8 mb-4 ">Education</h2>
      <ul className="list-disc">
        {education.map((item) => (
          <EducationItem key={Math.random() * 10000} {...item} />
        ))}
      </ul>
    </div>
  );
}
