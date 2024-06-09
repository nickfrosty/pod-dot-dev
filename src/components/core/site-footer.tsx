import Link from "next/link";

import SITE from "@/lib/config";

export default function AppFooter({}: SimpleComponentProps) {
  return (
    <footer className="w-full pt-5 pb-8 mt-5 mb-2 overflow-hidden text-lg text-center text-muted-foreground">
      <div
        id="footer-divider"
        className="w-2/3 h-px mx-auto mb-10 transform bg-secondary shadow-lg -rotate-1 md:w-2/3"
      ></div>

      <div className="text-center">
        <div className="">
          &copy;{new Date().getFullYear()}{" "}
          <Link
            href="/"
            className="hover:text-primary underline-offset-4 hover:shadow-indigo"
          >
            {SITE.name}
          </Link>
        </div>
      </div>
    </footer>
  );
}
