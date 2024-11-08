"use client";

import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { Text } from "../components/text";

export default function Page() {
  return (
    <>
      <span data-hide-urlbar />
      <div className="mt-4 flex grow justify-center">
        <div className="w-1/2">
          <Heading className="text-center">Uncontrolled</Heading>

          <div className="mt-10 space-y-4">
            <Input name="uncontrolled" />
            <Text>React state:</Text>
          </div>
        </div>
      </div>
    </>
  );
}
