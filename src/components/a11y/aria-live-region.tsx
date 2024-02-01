"use client";

import { useA11yNotification } from "@/providers/a11y/a11y-notification-provider";

export function AriaLiveRegion() {
  const { assertive, polite, status } = useA11yNotification();

  return (
    <div className="invisible w-0 h-0">
      <div aria-live="assertive">{assertive}</div>
      <div aria-live="polite">{polite}</div>
      <div role="status">{status}</div>
    </div>
  );
}
