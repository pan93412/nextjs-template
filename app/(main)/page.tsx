"use client";

import * as Popover from "@radix-ui/react-popover";

/**
 * The page of main app (`/`)
 */
export default function Page() {
  return (
    <main className="flex flex-col gap-5 Main lg:flex-row lg:gap-20">
      <h1 className="text-2xl">Hi.</h1>
      <p>Welcome to this template.</p>

      <Popover.Root>
        <Popover.Trigger className="t">More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            Some more info…
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </main>
  );
}
