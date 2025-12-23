"use client";

import { useSearchParams } from "next/navigation";

export default function InteractiveComponent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  return (
    <h1>
      Client Component: {name},{age}
    </h1>
  );
}
