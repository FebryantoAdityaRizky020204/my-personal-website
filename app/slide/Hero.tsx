import { getJSONData } from "@/lib/serverUtils";
// import Link from "next/link";
// import {
//   EnvelopeClosedIcon,
//   GitHubLogoIcon,
//   LinkedInLogoIcon,
// } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";
import Lanyard from "../components/Lanyard";

const Hero = async () => {
  const data = await getJSONData();

  return (
    // <>
    //   <div style={{ width: "100%", height: "600px", position: "relative" }}>
    //     <Lanyard interactive={false} />
    //   </div>
    // </>

    <>
      <section
        id="hero"
        className="container bg-[var(--bg-hero)] min-w-full overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row overflow-visible items-center justify-center gap-12 w-full md:w-10/12  mx-auto">
          <div className="relative">
            <Lanyard
              className="absolute overflow-visible min-h-96"
              finish="metallic"
              metal="silver"
              breeze={0.7}
              imageFit="cover"
              size={1}
              strapLength={0.4}
              frontImage="./assets/me-2.png"
              backImage="./assets/me-1.png"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-5">
            <div className="space-y-2">
              <h1 className="text-3xl leading-5 font-bold text-center md:text-start tracking-tighter text-black dark:text-white">
                Halo 👋, Saya Aditya Rizky Febryanto
              </h1>
            </div>
            <p className="text-center px-2 md:px-0 md:text-start lg:text-md text-gray-800 dark:text-gray-400">
              {data.personalInfo.bio}
            </p>
            {/* <div className="space-x-6 p-3 md:p-1">
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
