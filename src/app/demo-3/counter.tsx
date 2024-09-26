'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Button } from '../components/button';
import { Strong } from '../components/text';

export default function Counter({
  value = 0,
  onChange = () => {},
}: {
  value?: number;
  onChange?: (v: number) => void;
}) {
  let [internalValue, setInternalValue] = useState(value);

  function increment() {
    setInternalValue(internalValue + 1);
    onChange(internalValue + 1);
  }

  function decrement() {
    setInternalValue(internalValue - 1);
    onChange(internalValue - 1);
  }

  return (
    <div className="flex items-center gap-4">
      <Button plain onClick={decrement}>
        <MinusIcon />
      </Button>
      <Strong className="tabular-nums">{internalValue}</Strong>
      <Button plain onClick={increment}>
        <PlusIcon />
      </Button>
    </div>
  );
}
