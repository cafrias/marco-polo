import { useSearch } from "@/providers/Search/SearchProvider";
import { LatestSection } from "./components/LatestSection";
import { ResultsSection } from "./components/ResultsSection";

interface OffersSectionProps {}

export function OffersSection({}: OffersSectionProps) {
  // TODO: will have the search state logic
  // const { term } = useSearch();

  // if (term) {
  //   return <ResultsSection term={term} />;
  // }

  return <LatestSection />;
}
