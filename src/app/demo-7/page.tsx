'use client';

import { useState } from 'react';
import Counter from './counter';
import { Text } from '../components/text';
import { Heading } from '../components/heading';
import { Button } from '../components/button';

export default function Page() {
  let [count, setCount] = useState(0);

  return (
    <>
      <span data-hide-urlbar />
      <div className="grow flex">
        <div className="w-1/2 border-r pr-6">
          <Heading className="text-center">Uncontrolled</Heading>

          <div className="mt-10 flex justify-center">
            <Counter />
          </div>

          <div className="mt-4">
            <Text>App&apos;s state:</Text>
          </div>
        </div>
        <div className="w-1/2 pl-6">
          <Heading className="text-center">Controlled</Heading>

          <div className="mt-10">
            <div className="mt-10 flex justify-center">
              <Counter value={count} onChange={setCount} />
            </div>

            <div className="mt-4 space-y-4">
              <Text className="truncate">
                App&apos;s state: <span className="tabular-nums">{count}</span>
              </Text>
              <Button onClick={() => setCount(0)} outline>
                Reset count
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
