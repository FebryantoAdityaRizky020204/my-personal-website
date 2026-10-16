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
        className="container bg-[#00284da8] mx-auto rounded-lg"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="mx-auto relative rounded-b-full bg-amber-300">
            <Image
              src="/assets/hello-image.png"
              width={300}
              height={300}
              alt="Developer"
              className="w-auto mx-auto overflow-hidden object-cover object-center"
            />
            {/* <div
              className="absolute inset-0 backdrop-blur-md w-11/12 mx-auto"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 60%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 60%, black 100%)",
              }}
            /> */}
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl leading-16 font-bold tracking-tighter text-black dark:text-white">
                Hey 👋, <br />
                I&apos;m {data.personalInfo.name}
              </h1>
            </div>
            <p className="max-w-150 lg:text-lg text-gray-500 dark:text-gray-400">
              {data.personalInfo.bio}
            </p>
            <div className="space-x-4">
              <Link href={data.contactInfo.github} prefetch={false}>
                <Button variant="secondary" size="icon">
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={data.contactInfo.twitter} prefetch={false}>
                <Button variant="secondary" size="icon">
                  <TwitterLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={data.contactInfo.linkedin} prefetch={false}>
                <Button variant="secondary" size="icon">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={`mailto:${data.contactInfo.email}`}>
                <Button variant="secondary" size="icon">
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
