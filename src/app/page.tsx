import type { Metadata } from "next";
import Link from "next/link";
import NickAvatar from "@@/public/img/nick.jpg";
import ScottAvatar from "@@/public/img/scott.jpg";

import { SITE } from "@/lib/config";
import AvatarImage from "@/components/AvatarImage";
import SocialIcons from "@/components/SocialIcons";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: `${SITE.name} - developers building startup businesses on blockchain`,
  // description: "",
};

export default function Page() {
  return (
    <>
      <section className="text-center space-y-4 mx-auto">
        <h1 className="mx-auto">Developers building startups on blockchain</h1>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          Follow along as we each build our businesses and get nerdy about
          technical things
        </p>
      </section>

      {/* <iframe
        width="100%"
        height="180"
        frameBorder="no"
        scrolling="no"
        // seamless=""
        src="https://share.transistor.fm/e/pod-dev/latest"
        className="max-w-3xl mx-auto"
      ></iframe> */}

      {/* <iframe
        width="100%"
        height="390"
        frameBorder="no"
        scrolling="no"
        className="max-w-3xl mx-auto"
        // seamless=""
        src="https://share.transistor.fm/e/pod-dev/playlist"
      ></iframe> */}

      {/* <section className="text-center space-y-4 mx-auto">
        <h1 className="mx-auto">Meet the Hosts</h1>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
        </p>
      </section> */}

      <section className="grid items-center max-w-6xl grid-cols-1 gap-10 mx-auto mt-4 md:gap-30 lg:grid-cols-2">
        <section className="items-center md:grid-cols-2 md:items-center lg:block">
          <div className="gap-6 grid md:flex items-center mb-5">
            <Link
              href="/nick"
              target="_blank"
              className="block self-center place-self-center mx-auto md:mx-[initial]"
            >
              <AvatarImage
                src={NickAvatar}
                sizeClass={"w-52 h-52 md:w-48 md:h-48 lg:w-32 lg:h-32"}
              />
            </Link>

            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-5xl md:text-4xl font-semibold">Nick</h2>

              <p className="text-muted-foreground text-lg">
                <Link
                  href={"/nick"}
                  target="_blank"
                  className="hover:text-primary hover:shadow-indigo"
                >
                  @nickfrosty
                </Link>
              </p>
            </div>
          </div>

          <p className="col-span-2 text-2xl whitespace-pre-line sm:text-2xl sm:col-span-2">
            Full time{" "}
            <Link
              href="https://github.com/nickfrosty"
              target="_blank"
              className="link-active"
              title="@nickfrosty on GitHub"
            >
              DevRel
            </Link>{" "}
            at the Solana Foundation. Building{" "}
            <Link
              href="https://solfate.com/?utm=pod.dev"
              target="_blank"
              className="link-active"
              title="Solfate"
            >
              Solfate
            </Link>{" "}
            (discovery platform for the Solana ecosystem){" and "}
            <Link
              href="https://x.com/nickfrosty"
              target="_blank"
              className="link-active"
              title="Nickle.app"
            >
              Nickle.app
            </Link>{" "}
            (a personal finance app for the crypto native).
          </p>

          <SocialIcons
            className="space-x-6 text-gray-300 mt-8 justify-center md:justify-normal"
            iconSize="w-8 h-8"
            socials={{
              twitter: "nickfrosty",
              github: "nickfrosty",
              youtube: "nickfrosty",
              website: "https://nick.af",
            }}
          />

          {/* <p className="col-span-2 space-y-5 text-xl md:mt-10 xl:mt-14">
            Here, you can find{" "}
            <Link href="/now" className="link-active">
              what I am working on now
            </Link>{" "}
            and my{" "}
            <Link href="/newsletter" className="link-active">
              latest newsletter
            </Link>{" "}
            posts.
          </p> */}
        </section>

        <section className="items-center md:grid-cols-2 md:items-center lg:block">
          <div className="gap-6 grid md:flex items-center mb-5">
            <Link
              href="/scott"
              target="_blank"
              className="block self-center place-self-center mx-auto md:mx-[initial]"
            >
              <AvatarImage
                src={ScottAvatar}
                sizeClass={"w-52 h-52 md:w-48 md:h-48 lg:w-32 lg:h-32"}
              />
            </Link>

            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-5xl md:text-4xl font-semibold">Scott</h2>

              <p className="text-muted-foreground text-lg">
                <Link
                  href={"/scott"}
                  target="_blank"
                  className="hover:text-primary hover:shadow-indigo"
                >
                  @cloakdDev
                </Link>
              </p>
            </div>
          </div>

          <p className="col-span-2 text-2xl whitespace-pre-line sm:text-2xl sm:col-span-2">
            Co-founder of{" "}
            <Link
              href="https://fluxbeam.xyz/"
              target="_blank"
              className="link-active"
            >
              Fluxbeam
            </Link>
            {" & "}
            full time developer with over a decade of experience across
            distributed systems, machine learning & cyber security.
          </p>

          <SocialIcons
            className="space-x-6 text-gray-300 mt-8 justify-center md:justify-normal"
            iconSize="w-8 h-8"
            socials={{
              twitter: "cloakdDev",
              // github: "nickfrosty",
              website: "https://fluxbot.xyz/",
            }}
          />

          {/* <p className="col-span-2 space-y-5 text-xl md:mt-10 xl:mt-14">
            Here, you can find{" "}
            <Link href="/now" className="link-active">
              what I am working on now
            </Link>{" "}
            and my{" "}
            <Link href="/newsletter" className="link-active">
              latest newsletter
            </Link>{" "}
            posts.
          </p> */}
        </section>
      </section>

      <iframe
        width="100%"
        height="390"
        frameBorder="no"
        scrolling="no"
        // seamless=""
        className="max-w-3xl mx-auto"
        src="https://share.transistor.fm/e/pod-dev/playlist"
      ></iframe>
    </>
  );
}
