"use client";

import { Heading } from "../components/heading";
import Counter from "./counter";

export default function Page() {
  return (
    <>
      <span data-hide-urlbar />
      <div className="flex grow justify-center">
        <div className="mt-4 w-1/2">
          <Heading className="text-center">Counter</Heading>

          <div className="mt-10 flex justify-center">
            <Counter />
          </div>
        </div>
      </div>
    </>
  );
}
