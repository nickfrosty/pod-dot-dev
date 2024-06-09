import Link from "next/link";
import { GithubIcon, GlobeIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

type ComponentProps = {
  className?: string;
  iconSize: string;
  socials: {
    twitter?: string;
    github?: string;
    youtube?: string;
    website?: string;
  };
};

export default function SocialIcons({
  className = "",
  iconSize,
  socials,
}: ComponentProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {!!socials.twitter && (
        <Link
          href={`https://twitter.com/${socials.twitter}`}
          aria-label={`@${socials.twitter} on Twitter`}
          title={`@${socials.twitter} on Twitter`}
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:text-blue-500"
        >
          <TwitterIcon strokeWidth={1.4} className={iconSize} />
        </Link>
      )}

      {!!socials.youtube && (
        <Link
          href={`https://youtube.com/@${socials.youtube}`}
          aria-label={`@${socials.youtube} on YouTube`}
          title={`@${socials.youtube} on YouTube`}
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:text-red-600"
        >
          <YoutubeIcon strokeWidth={1.4} className={iconSize} />
        </Link>
      )}

      {!!socials.github && (
        <Link
          href={`https://github.com/${socials.github}`}
          aria-label={`@${socials.github} on GitHub`}
          title={`@${socials.github} on GitHub`}
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:text-primary"
        >
          <GithubIcon strokeWidth={1.4} className={iconSize} />
        </Link>
      )}

      {!!socials.website && (
        <Link
          href={socials.website}
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:text-primary"
        >
          <GlobeIcon strokeWidth={1.4} className={iconSize} />
        </Link>
      )}
    </div>
  );
}
