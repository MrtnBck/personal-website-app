import ExperienceItem from "@/components/ExperienceItem";

export default function Experiences() {
  const experiences = [
    {
      year: "2022-2025",
      company: "Lobo Software",
      logoPath: "/logo-lobo.webp",
      position: "Frontend Developer",
      description: "",
      location: "Vienna, Austria",
      responsibilities: [
        "Collaborated closely with backend developers and UI/UX designers to implement modern, responsive interfaces",
        "Contributed to the redesign and modernization of the core product’s user interface, improving usability and user satisfaction",
        "Participated in brainstorming sessions, project planning, and the full implementation lifecycle",
        "Maintained direct communication with clients, providing technical support and addressing real-time issues effectively",
        "Fixed bugs dynamically and continuously improved the application based on user feedback and business needs",
        "Took part in decision-making processes and actively shaped product development through team discussions and hands-on implementation",
        "Emphasized a proactive mindset, clear communication, and independent work to meet project goals.",
      ],
      projects: [
        {
          name: "Dispatch Panels",
          description: [
            "Rebuilt an interactive dashboard for dispatchers in Lobo (the company’s logistics platform) using modern technologies: Vue 3, PrimeVue, Vue Router, Pinia, VueUse, Tailwind CSS, and Gridstack.js",
            "Replaced outdated UI components and technologies, redesigning the UX to significantly improve usability",
            "Implemented new features to streamline the dispatching process and increase operational efficiency",
          ],
        },
        {
          name: "Customer Portal",
          description: [
            "Developed a customer-facing web application allowing end users to place online orders, view order history, and access invoices via a modern, intuitive interface",
            "Automated the ordering process, reducing dispatcher workload and accelerating customer workflows",
            "Designed and implemented the architecture using the Vue ecosystem, with seamless integration into Lobo via a REST API",
          ],
        },
        {
          name: "Vue Web Components",
          description: [
            "Built custom, reusable UI components (e.g., dialog boxes, tables) using Vue to help modernize and unify Lobo’s frontend system",
            "Automated the ordering process, reducing dispatcher workload and accelerating customer workflows",
            "Improved maintainability and scalability by modularizing UI elements and establishing consistent coding standards",
          ],
        },
      ],
    },
    {
      year: "2018-2021",
      company: "Baker Hughes, a GE company",
      logoPath: "/logo-bhge.png",
      position: "Human Machine Interface Engineer Intern",
      description:
        "Human Machine Interface Engineer Internkent a tanulmanyaim mellett gyakornokkent dolgoztam ennel a cegnel ahol goz es gazturbinas eromuvek gepeinek adatvizualizaciojan es iranyitasanak modernizaciojaban es boviteseben vettem reszt.",
      location: "Budapest, Hungary",
      responsibilities: [
        "egy multinacionalis nagy csapatban projektek vegrehajtasa egyutt dolgozva control mernokokkel projekmangerekkel, anyagbeszerzokkel es ugyfelekkel.",
        "Eromuvi terepfelmeres a projekt vegrehajtasahoz szukseg infok osszegyujtese, beuzemelesben valo reszvetel",
        "Ipari network tervezese, anyagrendeles, network muszaki rajzok keszitese",
        "Ipari celra szamitogepek konfiguralasa a rendszerek tesztkornyezetben valo osszeepitese es tesztelese.",
        "A beuzemelo mernokoknek support nyujtas",
      ],
      projects: [],
    },
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-8 mb-8">Experiences</h2>
      <ul className="list-disc">
        {experiences.map((experience) => (
          <ExperienceItem key={Math.random() * 10000} experience={experience} />
        ))}
      </ul>
    </div>
  );
}
