import { Offer } from "@/models/Offer";
import { getLatestOffers } from "./getLatestOffers";

export async function searchOffers(term: string): Promise<{ data: Offer[] }> {
  const { docs: offers } = await getLatestOffers();

  const result = offers.filter((offer) => {
    return new RegExp(term, "i").test(offer.name);
  });

  return {
    data: result,
  };
}
