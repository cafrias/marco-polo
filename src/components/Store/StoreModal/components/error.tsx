import Image from "next/image";

import exclamationIcon from "@/assets/icons/exclamation-circle.svg";

interface ErrorProps {}

/**
 * The Store Modal in error state
 */
export function Error({}: ErrorProps) {
  return (
    <section>
      <header className="flex gap-2 mb-4">
        <Image alt="" src={exclamationIcon} />
        <h1 className="font-bold text-2xl">Error</h1>
      </header>
      <p>Please, close the modal and open it again.</p>
    </section>
  );
}
