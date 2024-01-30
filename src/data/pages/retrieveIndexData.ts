import type { Offer } from "../../models/Offer";
import type { Store } from "../../models/Store";
import { mockedOffers, mockedStores } from "../mocks/offers";

export interface IndexData {
  offers: Offer[];
}

/**
 * Retrieves the data used in `index` page.
 */
// TODO: Make this a Promise
export function retrieveIndexData(): IndexData {
  return {
    offers: mockedOffers,
  };
}
