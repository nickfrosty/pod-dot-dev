import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@@/public/logo.svg";
import BrandWordmark from "@@/public/wordmark.svg";

import { SITE } from "@/lib/config";

export const SiteLogo = ({
  className = "",
  logoSize,
}: {
  className?: string;
  logoSize: number;
}) => {
  return (
    <Link
      href={"/"}
      className={`font-bold font-mono text-[1.7rem] inline-flex items-center gap-3 ${className}`}
    >
      <Image priority src={BrandLogo} width={36} height={36} alt={""} />
      <Image
        priority
        src={BrandWordmark}
        width={100}
        height={36}
        alt={SITE.name}
      />
    </Link>
  );
};
