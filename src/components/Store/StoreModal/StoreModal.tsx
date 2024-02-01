import React, { Suspense, useCallback } from "react";
import { useStoreModal } from "@/providers/store/store-modal-provider";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Error } from "./components/error";
import { Skeleton } from "./components/skeleton";
import { Modal } from "@/components/UI/Modal";
import { Content } from "./components/content";

export function StoreModal() {
  const { selected, setSelected } = useStoreModal();

  const onClose = useCallback(() => {
    setSelected(null);
  }, [setSelected]);

  if (!selected) {
    return null;
  }

  return (
    <Modal title="Store Details" onClose={onClose} open>
      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<Skeleton />}>
          <Content selected={selected} />
        </Suspense>
      </ErrorBoundary>
    </Modal>
  );
}
