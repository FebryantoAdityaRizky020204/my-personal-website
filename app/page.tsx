/* eslint-disable @next/next/no-img-element */

import Hello from "@/app/slide/Hello";

export default function Home() {
  return (
    <main className="absolute top-22 left-2 right-2 md:left-6 md:right-6 bottom-6 flex flex-col gap-5 h-fit pt-4">
      {/* // <main className="flex flex-col gap-5 h-fit pt-4"> */}
      <Hello />
    </main>
  );
}
