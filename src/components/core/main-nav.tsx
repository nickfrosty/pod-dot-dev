import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  items: LinkDetails[];
}

export function MainNav({ className, items, ...props }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center space-x-1 lg:space-x-1", className)}
      {...props}
    >
      {items.map(item => (
        <Button size={"sm"} className="px-3" variant={"link"} asChild>
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors",
              (item.href.length > 1 && pathname.startsWith(item.href)) ||
                pathname == item.href
                ? "!text-primary"
                : "!text-muted-foreground hover:!text-primary",
            )}
          >
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
