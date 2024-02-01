"use client";

import { SearchForm } from "@/components/Search/SearchForm";
import { StoreModal } from "@/components/Store/StoreModal/StoreModal";
import { OffersSection } from "@/components/UI/sections/OffersSection/OffersSection";
import { OffersSectionSkeleton } from "@/components/UI/sections/OffersSection/OffersSectionSkeleton";
import { SearchProvider } from "@/providers/Search/SearchProvider";
import { StoreModalProvider } from "@/providers/store/store-modal-provider";
import { Suspense } from "react";

export default function Home() {
  return (
    <StoreModalProvider>
      <SearchProvider>
        <div className="container px-4 pt-6 pb-4">
          <div className="mb-8">
            <SearchForm />
          </div>
          <Suspense fallback={<OffersSectionSkeleton />}>
            <OffersSection />
          </Suspense>
          <StoreModal />
        </div>
      </SearchProvider>
    </StoreModalProvider>
  );
}
