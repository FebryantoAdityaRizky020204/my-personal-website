/* eslint-disable @next/next/no-img-element */

import Hello from "@/app/slide/Hello";
import Later from "./slide/Later";

export default function Home() {
  return (
    // <main className="absolute top-22 left-2 right-2 md:left-6 md:right-6 bottom-6 flex flex-col gap-5 h-fit pt-4 mb-5">
    //   {/* // <main className="flex flex-col gap-5 h-fit pt-4"> */}
    //   <Hello />
    // </main>

    <div className="flex flex-col w-fit gap-5 pt-24 px-2 md:px-6 pb-6">
      <Hello />
      <Later />
      <Later />
      <Later />
    </div>
  );
}
