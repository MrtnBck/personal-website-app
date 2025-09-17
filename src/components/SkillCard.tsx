import SkillItem from "@/components/SkillItem";

interface SkillCardProps {
  skills: Array<{
    main: string;
    categories: Array<{
      category: string;
      items: Array<{ icon: string; label: string }>;
    }>;
  }>;
  title: string;
  category: string;
}

export default function SkillCard({ skills, title, category }: SkillCardProps) {
  // Create a lookup map for better performance
  const skillsMap = skills.reduce((acc, skill) => {
    skill.categories.forEach((category) => {
      acc[category.category] = category.items;
    });
    return acc;
  }, {} as Record<string, Array<{ icon: string; label: string }>>);

  return (
    <div className="w-full max-w-sm border border-secondary rounded-lg p-4 min-h-128">
      <h4 className="text-xl mb-4 text-secondary font-space-grotesk">{title === "All" ? "" : title}</h4>
      <ul className="list-disc list-inside">
        {skillsMap[category]?.map((item) => (
          <SkillItem key={item.label} item={item} />
        ))}
      </ul>
    </div>
  );
}
