"use client";

import { SearchForm } from "@/components/Search/SearchForm";
import { StoreModal } from "@/components/Store/StoreModal/StoreModal";
import { StoreModalProvider } from "@/components/Store/StoreModal/StoreModalProvider";
import { LatestSection } from "@/components/UI/sections/LatestSection";
import { LatestSectionSkeleton } from "@/components/UI/sections/LatestSectionSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <StoreModalProvider>
      <div className="container px-4 pt-6 pb-4">
        <div className="mb-8">
          <SearchForm />
        </div>
        <Suspense fallback={<LatestSectionSkeleton />}>
          <LatestSection />
        </Suspense>
        <StoreModal />
      </div>
    </StoreModalProvider>
  );
}
