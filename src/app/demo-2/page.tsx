"use client";

import { useState } from "react";
import { Text } from "../components/text";
import { Input } from "../components/input";
import { Heading } from "../components/heading";
import { Button } from "../components/button";

export default function Page() {
  let [search, setSearch] = useState("");

  return (
    <>
      <span data-hide-urlbar />

      <div className="mt-1 flex grow justify-center">
        <div className="w-1/2">
          <Heading className="text-center">Controlled</Heading>

          <div className="mt-10 space-y-4">
            <Input
              name="controlled"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Text className="truncate">React state: {search}</Text>

            <Button onClick={() => setSearch("")} outline>
              Clear search
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
