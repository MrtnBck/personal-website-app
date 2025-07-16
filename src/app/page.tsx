import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto flex flex-col items-start relative">
          <h1 className="text-[64px] font-bold leading-none tracking-tighter mt-8">
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
            className="self-end mt-4 absolute top-0"
          />
          <div className="mt-10">
            <h2 className="text-xl font-medium italic">Web Developer</h2>
            <h3 className="font-space-grotesk text-secondary text-base font-medium">
              I like progress, flow and creativity.
            </h3>
          </div>
        </div>
        <h2 className="text-2xl mt-16 mb-4 ">My Story</h2>
        <p className="text-base text-justify">
          I began my academic journey in engineering in Budapest. I’ve always enjoyed viewing the world as a complex
          system, where different parts connect and influence each other. When I had to choose a university major,
          <span className=" text-emerald"> mechatronics</span> caught my attention—combining mechanical, electrical, and
          software engineering. It gave me a broad perspective and helped me understand how different disciplines come
          together to form a bigger picture. While I may not have become Tony Stark (yet), I gained valuable knowledge
          and developed key skills such as analytical thinking, precision, problem solving, and teamwork during various
          project assignments. In parallel with my technical studies, I discovered that I also enjoy organizing and
          coordinating events—big or small. I wanted to strengthen these abilities and gain insights beyond the
          technical world, so after completing my bachelor’s degree in Mechatronics, I enrolled in a Master’s in
          Business Development. I was looking for a foundation that would help me navigate the business world—and I
          found it. During my master’s, I developed a growing interest in IT and web technologies. I started teaching
          myself the basics of web development, and took IT-related courses during my Erasmus semester, which helped me
          build a deeper understanding of programming concepts. I loved the feeling of building websites from the ground
          up—putting together essential building blocks and working on designs that are not just functional but visually
          satisfying. To me, it felt like an adult version of playing with LEGO: creative, modular, and full of
          possibilities. After graduating in Vienna, I found a job as a developer at a small Austrian company, where I
          worked on several frontend projects, but also had the chance to explore backend development. You can read more
          about these projects on the Experience page. Right now, I’m taking some time to deepen my skills and prepare
          for my next opportunity where I can continue my journey as a web developer. Have I mentioned that learning and
          growth are my passions? I truly enjoy picking up new skills, building useful things, and evolving both
          professionally and personally through the process.
        </p>
      </div>
    </>
  );
}
