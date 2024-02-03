import { useSearch } from "@/providers/Search/SearchProvider";
import { LatestSection } from "./components/LatestSection";
import { ResultsSection } from "./components/ResultsSection";

interface OffersSectionProps {}

export function OffersSection({}: OffersSectionProps) {
  const { term } = useSearch();

  if (term) {
    return <ResultsSection term={term} />;
  }

  return <LatestSection />;
}
