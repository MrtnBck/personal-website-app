import Image from "next/image";

import MenuItem from "@/components/MenuItem";

export default function Home() {
  const menuItems = [
    {
      icon: "f7:wrench-fill",
      label: "Skills",
      description:
        "My technical skills My technical skills My technical skills My technical skills My technical skills My technical skills",
      href: "/skills",
    },
    {
      icon: "tdesign:education-filled",
      label: "Education",
      description: "My educational background",
      href: "/education",
    },
    {
      icon: "streamline-ultimate:team-meeting-bold",
      label: "Experiences",
      description: "My professional experiences",
      href: "/experiences",
    },
    {
      icon: "mdi:connection",
      label: "Contact",
      description: "Get in touch with me",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* SMALL SCREEN */}
      <div className="md:hidden max-w-md mx-auto flex flex-col items-start relative min-h-[600px]">
        <h1 className="text-[64px] font-bold leading-none tracking-tighter mt-8 relative z-10">
          Hi there
          <br />
          I am
          <br />
          Martin
          <Image src="/triangle.svg" alt="." className="inline-block ml-2" width={40} height={80} />
        </h1>

        <Image
          src="/profile-placeholder.png"
          width={250}
          height={500}
          alt="Profile Placeholder"
          className="absolute top-0 right-0 z-0"
        />

        <div className="mt-10 relative z-10 w-full">
          <h3 className="italic">Web Developer</h3>
          <h4 className="font-space-grotesk text-secondary text-base font-medium">
            I like progress, flow and creativity.
          </h4>
        </div>
      </div>

      {/* LARGE SCREEN */}
      <div className="hidden md:flex mt-12 relative w-full h-[600px] flex-col items-center justify-end overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[450px] h-[600px]">
            <Image
              src="/profile-placeholder-large.png"
              alt="Profile Placeholder"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-9">
          <h1 className="md:text-[96px] lg:text-[128px] font-bold leading-none tracking-tighter text-center text-primary-light">
            Hi there
            <br />
            I am Martin
            <Image
              src="/triangle.svg"
              alt="."
              className="inline-block ml-2 mt-5 lg:mt-9 align-middle"
              width={40}
              height={80}
            />
          </h1>
          <div className="text-center mt-6">
            <h2 className="text-xl lg:text-2xl font-medium italic">Web Developer</h2>
            <h3 className="font-space-grotesk text-secondary text-base lg:text-xl font-medium">
              I like progress, flow and creativity.
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-end">
        <p className="mr-2 mb-2">Highlights explained...</p>
        <ul className="font-space-grotesk text-secondary text-sm">
          <li className="flex items-center mb-1">
            <span className="h-4 w-4 inline-block mr-2 bg-emerald rounded-full"></span>
            Education
          </li>
          <li className="flex items-center mb-1">
            <span className="h-4 w-4 inline-block mr-2 bg-indigo rounded-full"></span>
            Locations
          </li>
          <li className="flex items-center justify-start mb-1">
            <span className="h-4 w-4 inline-block mr-2 bg-violet rounded-full"></span>
            Skills & Competencies
          </li>
          <li className="flex items-center mb-1">
            <span className="h-4 w-4 inline-block mr-2 bg-pink rounded-full"></span>
            Interests & Passions
          </li>
        </ul>
      </div>
      <h2 className="mt-10 mb-4 ">My Story</h2>
      <div className="text-justify ">
        <p className="mb-4">
          I began my academic journey in engineering in <span className=" text-indigo">Budapest</span>. I’ve always
          enjoyed viewing the world as a complex system, where different parts connect and influence each other. When I
          had to choose a university major,
          <span className=" text-emerald"> mechatronics</span> caught my attention—combining{" "}
          <span className=" text-violet">mechanical</span>, <span className=" text-violet">electrical</span>, and{" "}
          <span className=" text-violet">software engineering</span>. It gave me a broad perspective and helped me
          understand how different disciplines come together to form a bigger picture. While I may not have become Tony
          Stark (yet), I gained valuable knowledge and developed key skills such as
          <span className=" text-violet"> analytical thinking</span>, <span className=" text-violet">precision</span>,
          <span className=" text-violet"> problem solving</span>, and <span className=" text-violet">teamwork</span>{" "}
          during various project assignments.
        </p>
        <p className="mb-4">
          In parallel with my technical studies, I discovered that I also enjoy
          <span className=" text-violet">organizing</span> and <span className=" text-violet">coordinating</span>{" "}
          events—big or small. I wanted to strengthen these abilities and gain insights beyond the technical world, so
          after completing my bachelor’s degree in Mechatronics, I enrolled in a Master’s in{" "}
          <span className=" text-emerald">Business Development</span>. I was looking for a foundation that would help me
          navigate the business world—and I found it.
        </p>
        <p className="mb-4">
          During my master’s, I developed a growing interest in <span className=" text-pink">IT</span> and{" "}
          <span className=" text-pink">web technologies</span> . I started teaching myself the basics of web
          development, and took IT-related courses during my Erasmus semester, which helped me build a deeper
          understanding of programming concepts. I loved the feeling of{" "}
          <span className=" text-pink">building websites</span> from the ground up—putting together essential building
          blocks and working on designs that are not just functional but visually satisfying. To me, it felt like an
          adult version of playing with LEGO: creative, modular, and full of possibilities.
        </p>
        <p className="mb-4">
          After graduating in <span className=" text-indigo">Vienna</span>, I found a job as a developer at a small
          Austrian company, where I worked on several <span className=" text-violet">frontend </span> projects, but also
          had the chance to explore <span className=" text-violet">backend </span> development. You can read more about
          these projects on the Experience page.
        </p>
        <p className="mb-4">
          {" "}
          Right now, I’m taking some time to deepen my skills and prepare for my next opportunity where I can continue
          my journey as a web developer.
        </p>
        <p className="mb-4">
          I truly enjoy picking up new skills, building useful things, and evolving both professionally and personally
          through the process.
        </p>
        <p className="mb-4 font-space-grotesk text-secondary">
          Have I mentioned that learning and growth are my passions?
        </p>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12 ">
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </>
  );
}
