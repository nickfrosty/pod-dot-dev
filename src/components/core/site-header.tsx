"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import PodcastImage from "@/../public/media/podcast/cover0.jpg";
import { MenuIcon, XIcon } from "lucide-react";

import { NAV_ROUTES } from "@/lib/const/nav";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  NavigationListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SiteLogo } from "@/components/core/site-logo";

const navLinks: LinkDetails[] = [
  // NAV_ROUTES["podcast"],
  // NAV_ROUTES["episodes"],
  // NAV_ROUTES["hosts"],
  // NAV_ROUTES["listen"],
];

export default function MarketingHeader(
  {
    // session,
  }: {
    // session?: Option<Session>;
  },
) {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  return (
    <>
      <header
        className={
          "sticky top-0 z-10 lg:relative bg-background flex items-center justify-between w-full h-16 border-b border-border"
        }
      >
        <div
          className={
            "z-30 w-full flex items-center justify-between mx-auto gap-2 container"
          }
        >
          <div
            className={
              "items-center gap-4 flex-1 justify-between md:justify-start flex"
            }
          >
            <SiteLogo logoSize={36} />

            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="gap-1">
                {navLinks.map((item, key) => (
                  <NavigationMenuItem key={key}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {false && (
              <Drawer direction="right" open={open} onOpenChange={setOpen}>
                <DrawerTrigger className="md:hidden" asChild>
                  {/* <Button variant="outline">
                    <MenuIcon className="w-full" />
                  </Button> */}
                  <button className="icon-lg">
                    {open ? (
                      <XIcon className="w-full" />
                    ) : (
                      <MenuIcon className="w-full" />
                    )}
                  </button>
                </DrawerTrigger>
                <DrawerContent className="rounded-none w-full">
                  <NavigationMenu className="flex !max-w-full !items-start !w-full !flex-initial flex-col p-4 gap-y-2">
                    <NavigationMenuItem className="list-none w-full flex items-center justify-between">
                      <SiteLogo
                        logoSize={36} /*className="pr-8" showImage={true}*/
                      />

                      <button
                        onClick={() => setOpen(false)}
                        className="icon-lg"
                      >
                        {open ? (
                          <XIcon className="w-full" />
                        ) : (
                          <MenuIcon className="w-full" />
                        )}
                      </button>
                    </NavigationMenuItem>

                    <ul className="">
                      {navLinks.map(item => (
                        <NavigationListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </NavigationListItem>
                      ))}
                    </ul>

                    {/* <section className="flex items-center justify-between w-full">
                    {!session?.user && (
                      <Link
                        href={"/signin"}
                        className={`btn btn-ghost w-full text-center items-center justify-center`}
                      >
                        Sign in
                      </Link>
                    )}
                  </section> */}
                  </NavigationMenu>
                </DrawerContent>
              </Drawer>
            )}
          </div>
          {/* <div className="flex items-center gap-2">
            <HeaderUserMenu className="" />
          </div> */}
        </div>
      </header>
    </>
  );
}
