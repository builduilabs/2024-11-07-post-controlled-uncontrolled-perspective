"use client";

import { Heading } from "../components/heading";
import { Text } from "../components/text";
import Counter from "./counter";

export default function Page() {
  return (
    <>
      <span data-hide-urlbar />
      <div className="mt-4 flex grow justify-center">
        <div className="w-1/2">
          <Heading className="text-center">Counter</Heading>

          <div className="mt-10 flex justify-center">
            <Counter />
          </div>

          <div className="mt-4">
            <Text>App&apos;s state:</Text>
          </div>
        </div>
      </div>
    </>
  );
}
