/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { getBlogPosts, getJSONData } from "@/lib/serverUtils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const Hello = async () => {
  const data = await getJSONData();
  return (
    <>
      <section
        id="home"
        className="container bg-[#ffffff6b] border border-white/20 shadow-lg dark:bg-[#00284da8] mx-auto rounded-lg overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="mx-auto relative rounded-b-full overflow-hidden md:overflow-visible bg-[#004ddb] dark:bg-amber-300 w-95">
            <Image
              src="/assets/me-1.png"
              alt="Developer"
              width={1170}
              height={1500}
              className="w-full h-auto mx-auto overflow-hidden object-scale-down object-center block dark:hidden"
            />

            <Image
              src="/assets/me-2.png"
              alt="Developer"
              loading="eager"
              width={1170}
              height={1500}
              className="w-full h-auto mx-auto overflow-hidden object-scale-down object-center hidden dark:block"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-5">
            <div className="space-y-2">
              <h1 className="text-5xl leading-16 font-bold text-center md:text-start tracking-tighter text-black dark:text-white">
                Hey 👋, <br />
                I&apos;m {data.personalInfo.name}
              </h1>
            </div>
            <p className="text-center px-2 md:px-0 md:text-start lg:text-md text-gray-800 dark:text-gray-400">
              {data.personalInfo.bio}
            </p>
            <div className="space-x-4">
              <Link
                href={data.contactInfo.github}
                prefetch={false}
                target="_blank"
              >
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white dark:bg-gray-800 text-black dark:text-white shadow shadow-gray-500 dark:shadow-gray-200 hover:bg-[#ffffff88] dark:hover:bg-gray-700 border-none cursor-pointer hover:scale-90 transition"
                >
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link
                href={data.contactInfo.linkedin}
                prefetch={false}
                target="_blank"
              >
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white dark:bg-gray-800 text-black dark:text-white shadow shadow-gray-500 dark:shadow-gray-200 hover:bg-[#ffffff88] dark:hover:bg-gray-700 border-none cursor-pointer hover:scale-90 transition"
                >
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={`mailto:${data.contactInfo.email}`} target="_blank">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white dark:bg-gray-800 text-black dark:text-white shadow shadow-gray-500 dark:shadow-gray-200 hover:bg-[#ffffff88] dark:hover:bg-gray-700 border-none cursor-pointer hover:scale-90 transition"
                >
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hello;
