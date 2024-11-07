"use client";

import { useState } from "react";
import { Heading } from "../components/heading";
import { Text } from "../components/text";
import Counter from "./counter";
import { Button } from "@/app/components/button";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <>
      <span data-hide-urlbar />

      <div className="mt-1 flex grow justify-center">
        <div className="w-1/2">
          <Heading className="text-center">Counter</Heading>

          <div className="mt-10 flex justify-center">
            <Counter value={count} onChange={setCount} />
          </div>

          <div className="mt-4 space-y-4">
            <Text>App&apos;s state: {count}</Text>

            <Button onClick={() => setCount(0)} outline>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
