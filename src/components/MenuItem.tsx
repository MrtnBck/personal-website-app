"use client";

import TransitionLink from "@/components/utils/TransitionLink";

import { Icon } from "@iconify/react";

interface MenuItemProps {
  icon: string;
  label: string;
  description?: string;
  href: string;
}

export default function MenuItem({ icon, label, description, href }: MenuItemProps) {
  return (
    <div className="p-4 w-72 lg:w-full min-h-82 lg:min-h-54 flex items-center flex-col lg:flex-row lg:justify-start justify-center gap-2 border border-secondary rounded-md lg:items-start">
      <div className="mr-4 rounded-md bg-foreground h-24 w-24 flex items-center justify-center shrink-0">
        <Icon icon={icon} className="w-14 h-14 text-background" />
      </div>
      <div className="flex flex-col h-full items-center lg:items-start text-center lg:text-left justify-between  w-full">
        <div>
          <h3 className="text-xl mt-2 lg:mt-0">{label}</h3>
          {description && <p className="text-base text-secondary">{description}</p>}
        </div>
        <TransitionLink
          href={href}
          className="lg:self-end align-bottom text-primary-dark bg-emerald transition-colors px-6 py-2 rounded-md text-base mt-4"
        >
          Go to page
        </TransitionLink>
      </div>
    </div>
  );
}
