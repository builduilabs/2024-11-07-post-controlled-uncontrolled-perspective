"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { Button } from "../components/button";
import { Strong } from "../components/text";

export default function Counter({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  function increment() {
    onChange(value + 1);
  }

  function decrement() {
    onChange(value - 1);
  }

  return (
    <div className="flex items-center gap-4">
      <Button plain onClick={decrement}>
        <MinusIcon />
      </Button>
      <Strong className="tabular-nums">{value}</Strong>
      <Button plain onClick={increment}>
        <PlusIcon />
      </Button>
    </div>
  );
}
