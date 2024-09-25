'use client';

import { useState } from 'react';
import { Text } from '../components/text';
import { Input } from '../components/input';
import { Heading } from '../components/heading';
import { Button } from '../components/button';

export default function Page() {
  let [search, setSearch] = useState('');

  return (
    <>
      <span data-hide-urlbar />
      <div className="grow flex">
        <div className="w-1/2 border-r items-center pr-6">
          <Heading className="text-center">Uncontrolled</Heading>

          <div className="space-y-4 mt-10">
            <Input name="uncontrolled" />
            <Text>React state:</Text>
          </div>
        </div>
        <div className="w-1/2 pl-6">
          <Heading className="text-center">Controlled</Heading>

          <div className="space-y-4 mt-10">
            <Input
              name="controlled"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Text className="truncate">React state: {search}</Text>

            <Button onClick={() => setSearch('')} outline>
              Clear search
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
