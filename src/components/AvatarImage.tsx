import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type ComponentProps = {
  className?: string;
  sizeClass?: string;
  src: ImageProps["src"];
};

export default function AvatarImage({
  className,
  sizeClass,
  src,
}: ComponentProps) {
  return (
    <span className={cn("block rounded-full", sizeClass, className)}>
      <Image
        className={cn(
          "place-self-center avatar border rounded-full shadow border-gray-800",
          sizeClass,
          className,
        )}
        src={src}
        width={256}
        height={256}
        alt="Nick Frostbutter"
      />
    </span>
  );
}
