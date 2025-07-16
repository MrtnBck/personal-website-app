import { Icon } from "@iconify/react";

type SkillItemProps = {
  icon: string;
  label: string;
};

export default function SkillItem({ item }: { item: SkillItemProps }) {
  return (
    <li className="flex flex-col items-center gap-2 mb-6">
      <Icon icon={item.icon} className="h-6 w-6 " />
      <p className="">{item.label}</p>
    </li>
  );
}
