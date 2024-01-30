"use client";

import { useState } from "react";
import { OfferCard } from "@/components/Offer/OfferCard";
import { SearchForm } from "@/components/Search/SearchForm";
import { StoreModal } from "@/components/Store/StoreModal";
import { HOME_OFFERS_LIST_ID } from "@/config";
import { retrieveIndexData } from "@/data/pages/retrieveIndexData";

export default function Home() {
  const { offers } = retrieveIndexData();

  const [selectedStore, setSelectedStore] = useState<string | null>(null);

  return (
    <div className="container px-4 pt-6 pb-4">
      <div className="mb-8">
        <SearchForm />
      </div>
      <section id={HOME_OFFERS_LIST_ID}>
        <div>
          <h1 className="font-bold text-2xl mb-6">Latest Offers</h1>
          <ul className="flex flex-col gap-5">
            {offers.map((offer) => {
              return (
                <li key={offer.id}>
                  <OfferCard onStore={setSelectedStore} offer={offer} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <StoreModal
        store={selectedStore}
        onClose={() => setSelectedStore(null)}
      />
    </div>
  );
}
