import Link from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onToggleMenu?: () => void;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function TransitionLink({ children, href, ...props }: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    //call onToggleMenu in the parent component
    props.onToggleMenu?.();

    const body = document.querySelector("#transition-content");
    body?.classList.add("page-transition");

    //run fade out exit animation with framer motion
    //sleep for a bit
    await sleep(300); // Adjust duration as needed

    router.push(href);

    await sleep(300); // Adjust duration as needed

    //run fade in enter animation with framer motion
    body?.classList.remove("page-transition");
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
}
