// src/app/example/page.tsx

import { getAllExample } from "@/app/actions/example";

export default async function Page() {
  const examples = await getAllExample();

  return (
    <>
      {examples.map((example) => (
        <div key={example.id}>{example.message}</div>
      ))}
    </>
  );
}
